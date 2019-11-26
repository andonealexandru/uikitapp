<template>
  <div id="app">
    <vk-navbar class="nav">
      <vk-navbar-nav>
        <vk-navbar-logo><img src="./assets/logo.png" class="logo"></vk-navbar-logo>
        <vk-navbar-nav-item title="Home" :active="activeHome" @click="activateHome"></vk-navbar-nav-item>
      </vk-navbar-nav>

      <vk-navbar-nav slot="right">
        <vk-navbar-nav-item title="Sign In" :active="activeSignIn"  @click="activateSignIn"></vk-navbar-nav-item>
        <vk-navbar-nav-item title="Log In" :active="activeLogIn"  @click="activateLogIn"></vk-navbar-nav-item>
      </vk-navbar-nav>
    </vk-navbar>
    <router-view></router-view>
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
</style>>
</style>

<script>
export default {
  data() {
    return {
      activeHome: true,
      activeSignIn: true,
      activeLogIn: true
    }
  },
  created: function () {
    this.activeHome = true
    this.activeLogIn = false
    this.activeSignIn = false
  },
  methods: {
    activateHome () {
      this.activeHome = true
      this.activeSignIn = false
      this.activeLogIn = false
      this.$router.push({ name: 'home' })
    },
    activateSignIn () {
      this.activeHome = false
      this.activeSignIn = true
      this.activeLogIn = false
      this.$router.push({ name: 'signin' })
    },
    activateLogIn () {
      this.activeHome = false
      this.activeSignIn = false
      this.activeLogIn = true
      this.$router.push({ name: 'login' })
    }
  }
}
</script>
