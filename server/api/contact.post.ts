// server/api/contact.post.ts
import { Resend } from 'resend'
import { z } from 'zod'

const BodySchema = z.object({
  name: z.string().max(120).optional().default(''),
  email: z.string().email(),
  message: z.string().min(1).max(5000),
  // 简易反爬：蜜罐字段，前端不会显示；机器人会乱填
  honey: z.string().max(0).optional().default(''),
})

export default defineEventHandler(async (event) => {
  // 1) 读取 & 校验
  const raw = await readBody(event).catch(() => ({}))
  const parsed = BodySchema.safeParse(raw)
  if (!parsed.success) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid input' })
  }
  const { name, email, message, honey } = parsed.data
  if (honey) {
    // 蜜罐非空 → 丢弃
    return { ok: true }
  }

  // 2) 取环境变量
  const config = useRuntimeConfig()
  const apiKey = config.resendApiKey
  const to = config.contactToEmail
  const from = config.contactFromEmail || 'no-reply@example.com'

  if (!apiKey || !to) {
    throw createError({ statusCode: 500, statusMessage: 'Mail config missing' })
  }

  // 3) 组织内容（注意转义）
  const subject = `[Contact] ${name || 'Anonymous'}`
  const html = `
    <div>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Message:</strong></p>
      <div>${escapeHtml(message).replace(/\n/g, '<br/>')}</div>
    </div>
  `

  // 4) 发送邮件
  const resend = new Resend(apiKey)
  await resend.emails.send({
    from,           // 需是已验证域名邮箱
    to,
    subject,
    html,
    replyTo: email, // ✅ 直接“回复”会回到用户邮箱
  })

  // 5) 返回
  return { ok: true }
})

// 简单转义
function escapeHtml(s = '') {
  return s.replace(/[&<>"']/g, (m) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]!))
}
