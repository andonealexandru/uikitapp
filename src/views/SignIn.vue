<template>
  <div class="uk-padding uk-flex-middle">
    <div class="uk-width-2-5@m uk-align-center">
      <vk-card hover>
        <vk-card-title>Create account</vk-card-title>
        <form class="uk-card-body">
          <div class="uk-margin">
            <div class="uk-inline uk-width-1-1">
              <span class="uk-form-icon"><vk-icon icon="user"></vk-icon></span>
              <input class="uk-input" type="text" placeholder="First name">
            </div>
          </div>
          <div class="uk-margin">
            <div class="uk-inline uk-width-1-1">
              <span class="uk-form-icon"><vk-icon icon="user"></vk-icon></span>
              <input class="uk-input" type="text" placeholder="Last name">
            </div>
          </div>
          <div class="uk-margin">
            <div class="uk-inline uk-width-1-1">
              <span class="uk-form-icon"><vk-icon icon="mail"></vk-icon></span>
              <input class="uk-input" type="text" placeholder="Email">
            </div>
          </div>
          <div class="uk-margin">
            <div class="uk-inline uk-width-1-1">
              <span class="uk-form-icon"><vk-icon icon="location"></vk-icon></span>
              <input class="uk-input" type="text" placeholder="Address">
            </div>
          </div>
          <div class="uk-margin">
            <div class="uk-inline uk-width-1-1">
              <span class="uk-form-icon"><vk-icon icon="receiver"></vk-icon></span>
              <input class="uk-input" type="text" placeholder="Phone number">
            </div>
          </div>
          <div class="uk-margin">
            <div class="uk-inline uk-width-1-1">
              <span class="uk-form-icon"><vk-icon icon="user"></vk-icon></span>
              <input class="uk-input" type="text" placeholder="Lock">
            </div>
          </div>
          <vk-button class="uk-width-1-1">Submit</vk-button>
        </form>
      </vk-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'signin'
}
</script>
