<template>
  <div id="app">
    <vk-navbar class="nav">
      <vk-navbar-nav>
        <vk-navbar-logo><img src="./assets/logo.png" class="logo"></vk-navbar-logo>
        <vk-navbar-nav-item title="Home" :active="$router.currentRoute.name === 'home'" @click="$router.push({ name: 'home' })" />
      </vk-navbar-nav>

      <vk-navbar-nav slot="right">
        <vk-navbar-nav-item title="Register" :active="$router.currentRoute.name === 'signin'"  @click="$router.push({ name: 'signin' })" />
        <vk-navbar-nav-item title="Log In" :active="$router.currentRoute.name === 'login'"  @click="$router.push({ name: 'login' })" />
      </vk-navbar-nav>
    </vk-navbar>
    <router-view />
  </div>
</template>

<style scoped>
.logo {
  max-height: 50%
}
.nav {
  padding-right: 15px;
  padding-left: 15px;
}
</style>

<script>
export default {
}
</script>
