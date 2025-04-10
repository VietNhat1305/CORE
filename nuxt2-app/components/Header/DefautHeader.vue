<template>
  <header class="header header-fixed header-nav">
    <div class="container">
      <nav class="navbar navbar-expand-lg header-nav">
        <div class="navbar-header" style="height: 100%;">
          <a id="mobile_btn" href="javascript:void(0);" @click="toggleSidebar">
            <span class="bar-icon">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </a>
          <router-link to="/" class="navbar-brand logo" style="height: 100%;">
            <img
              src="@/assets/img/logo/default.png"
              class="img-fluid"
              alt="Logo"
              style="height: 100%;"
            />
          </router-link>
        </div>
        <div class="main-menu-wrapper">
          <div class="menu-header">
            <router-link to="/" class="menu-logo">
              <img
                src="@/assets/img/logo/default.png"
                class="img-fluid"
                alt="Logo"
              />
            </router-link>
            <a
              id="menu_close"
              class="menu-close"
              href="javascript:void(0);"
              @click="closeSidebar"
            >
              <i class="fas fa-times"></i>
            </a>
          </div>
          <ul class="main-nav">
            <li class="has-submenu megamenu">
              <nuxt-link to="/">
                Trang chủ
              </nuxt-link>
            </li>
            <li class="has-submenu megamenu">
              <nuxt-link to="/profile">
                Giới thiệu
              </nuxt-link>
            </li>
            <li class="has-submenu megamenu">
              <nuxt-link to="/decks">
                Đồ bóng đá
              </nuxt-link>
            </li>
            <li class="has-submenu megamenu">
              <nuxt-link to="/settings">
                Cài đặt
              </nuxt-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen
      document.documentElement.classList.toggle('menu-opened')
    },
    closeSidebar() {
      this.isSidebarOpen = false
      document.documentElement.classList.remove('menu-opened')
    }
  }
}
</script>

<style>
.nuxt-link-exact-active {
  color: #d90012;
}
</style>
