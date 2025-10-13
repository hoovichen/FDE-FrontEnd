<template>
  <footer class="footer">
    <div class="footer__inner container">
      <!-- 左侧 LOGO -->
      <div class="footer__logo">
        <NuxtLink to="/">
          <img class="footer__brand" src="/logo-3-topic.png" alt="火龙企业标志 | Fire Dragon Enterprise Logo">
        </NuxtLink>
      </div>

      <!-- 中间 INFO -->
      <div class="footer__info">
        <h3 class="footer__title">INFO</h3>
        <ul>
          <li><NuxtLink to="/faq">FAQ</NuxtLink></li>
          <li><NuxtLink to="/privacy-policy">PRIVACY POLICY</NuxtLink></li>
          <li><NuxtLink to="/terms">TERMS & CONDITIONS</NuxtLink></li>
        </ul>
      </div>

      <!-- 右侧 STALK US -->
      <div class="footer__social">
        <h3 class="footer__title">STALK US</h3>
        <div class="footer__icons">
          <a href="https://facebook.com" target="_blank" aria-label="Facebook">
            <img src="" alt="" />
          </a>
          <a href="https://instagram.com" target="_blank" aria-label="Instagram">
            <img src="" alt="" />
          </a>
          <a href="https://tiktok.com" target="_blank" aria-label="TikTok">
            <img src="" alt="" />
          </a>
        </div>
      </div>
    </div>

    <!-- COPYRIGHT -->
    <div class="footer__copyright">
      COPYRIGHT © 2025 FIRE DRAGON ENTERPRISE
    </div>
  </footer>
</template>
