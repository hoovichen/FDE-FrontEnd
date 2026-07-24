# 门户网站优化文档索引

Last reviewed: 2026-07-24

这组文档是对 `FDE-FrontEnd` 当前状态的第一轮接管分析，目标是先建立基线，再进入 UI 重构、CMS/后端接入、SEO 和内容工作流优化。

## 文档列表

- `current-status.md`
  - 当前项目状态、技术栈、内容来源、部署/验证结果、FDG OS 后端相关性、以及 `FDE-FrontEnd` 改名为 `FDG-FrontEnd` 的影响判断。

- `module-progress.md`
  - 首页、导航、产品、博客、FAQ、食谱、Stockists、Contact、SEO、i18n、媒体上传、CMS 等模块的当前完成度和建议开发阶段。

- `known-bugs.md`
  - 当前已确认 bug 和技术风险，包括 lint 失败、客户端 redirect、canonical/domain 不一致、产品 JSON-LD placeholder、CSS token 错误、blog API contract 风险等。

- `backend-integration-plan.md`
  - 如何让 FDG OS 接管门户内容发布：blog/CMS、翻译、media library、public API、缓存、视频上传、迁移顺序和待决策项。

- `fdg-os-portal-collaboration-brief.md`
  - 给 FDG-OS 负责人/后端负责人的协作交接文档：门户现状、FDG-OS 边界、CMS/API/权限建议、迁移顺序、第一张后端 ticket 范围、以及不能先做的高风险事项。

- `blog-cms-operating-plan.md`
  - Blog CMS 的专门方案：FDG-OS 如何管理 Blog 编辑、翻译、SEO、导入、发布、撤回、权限和日志，并让 Vercel/Nuxt 门户通过 public API 获取可 SEO 的内容。

- `homepage-redesign-design-brief.md`
  - 根据设计部 homepage 清单和参考图整理的 UI 改版设计规格：section 顺序、视觉方向、design token、组件清单、全站一致化影响范围、SEO/可访问性注意点和实施阶段。

## 当前结论

- 这个站点不是完全静态站，已经有 Nuxt/Nitro API，但内容发布仍然依赖代码或 markdown 提交。
- `pnpm type-check` 和 `pnpm build` 通过，当前可构建。
- `pnpm lint` 失败，原因是 frontend repo 里没有可用的 `eslint`。
- Blog API 和 sitemap 动态 URL API 本地验证可用。
- 真正要解决“不用每次通过代码发布 blog”的问题，需要在 FDG OS 或独立 CMS 中建立内容管理边界。
- 给 FDG-OS 负责人讨论时，优先使用 `fdg-os-portal-collaboration-brief.md`；进入具体开发时再使用 `backend-integration-plan.md` 做技术细化。
- 下一步大改 UI 前，建议先修复 Phase 0 稳定项，避免把旧技术债带进新设计系统。
- Homepage 新设计方向更接近 Instagram / editorial commerce 风格；如果只改首页不统一产品页、Blog、Recipes、Stockists、Contact，会出现明显视觉割裂。
