<template>
  <div id="app">
    <vk-navbar class="nav">
      <vk-navbar-nav>
        <vk-navbar-logo><img src="./assets/logo.png" class="logo" style="max-height: 50%"></vk-navbar-logo>
        <vk-navbar-nav-item title="Home" :active="$router.currentRoute.name === 'home'" @click="$router.push({ name: 'home' })" />
      </vk-navbar-nav>

      <vk-navbar-nav slot="right">
        <vk-navbar-nav-item
          v-if="!getLogged"
          title="Register"
          :active="$router.currentRoute.name === 'signin'"
          @click="$router.push({ name: 'signin' })" />
        <vk-navbar-nav-item
          v-if="!getLogged"
          title="Log In"
          :active="$router.currentRoute.name === 'login'"
          @click="$router.push({ name: 'login' })" />
        <vk-navbar-nav-item
          v-if="getLogged"
          title="My profile"
          :active="$router.currentRoute.name === 'profile'"
          @click="$router.push({ name: 'profile' })" />
        <vk-navbar-nav-item
          v-if="getLogged"
          title="Sign out"
          @click="logOut" />
      </vk-navbar-nav>
    </vk-navbar>
    <router-view />
  </div>
</template>

<style scoped>
.nav {
  padding-right: 15px;
  padding-left: 15px;
}
</style>

<script>
import store from "./store"

export default {
    name: 'app',
    computed: {
        getLogged() {
            return this.$store.state.logged;
        }
    },
    methods: {
        logOut () {
            store.commit('changeLogged');
            this.$router.push({name: 'home'});
        }
    }
}
</script>
