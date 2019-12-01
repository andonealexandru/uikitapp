<template xmlns="http://www.w3.org/1999/html">
  <div class="uk-padding uk-flex-middle">
    <div class="uk-width-2-5@m uk-align-center">
      <vk-card hover v-if="showForm">
        <form @submit.prevent="handleSubmit">
          <fieldset class="uk-fieldset">
            <legend class="uk-legend">Create your account</legend>
            <div class="uk-margin">
              <div class="uk-inline uk-width-1-1">
                <span class="uk-form-icon"><vk-icon icon="user" /></span>
                <input v-model="formData.firstName" class="uk-input" type="text" placeholder="First name" required="required">
              </div>
            </div>
            <div class="uk-margin">
              <div class="uk-inline uk-width-1-1">
                <span class="uk-form-icon"><vk-icon icon="user" /></span>
                <input v-model="formData.lastName" class="uk-input" type="text" placeholder="Last name" required="required">
              </div>
            </div>
            <div class="uk-margin">
              <div class="uk-inline uk-width-1-1">
                <span class="uk-form-icon"><vk-icon icon="mail" /></span>
                <input v-model="formData.email" class="uk-input" type="email" placeholder="Email" required="required">
              </div>
            </div>
            <div class="uk-margin">
              <div class="uk-inline uk-width-1-1">
                <span class="uk-form-icon"><vk-icon icon="location" /></span>
                <input v-model="formData.city" class="uk-input" type="text" placeholder="City" required="required">
              </div>
            </div>
            <div class="uk-margin">
              <div class="uk-inline uk-width-1-1">
                <span class="uk-form-icon"><vk-icon icon="home" /></span>
                <input v-model="formData.address" class="uk-input" type="text" placeholder="Address" required="required">
              </div>
            </div>
            <div class="uk-margin">
              <div class="uk-inline uk-width-1-1">
                <span class="uk-form-icon"><vk-icon icon="receiver" /></span>
                <input v-model="formData.phone" class="uk-input" type="tel" placeholder="Phone number" required="required">
              </div>
            </div>
            <div class="uk-margin">
              <div class="uk-inline uk-width-1-1">
                <span class="uk-form-icon"><vk-icon icon="lock" /></span>
                <input v-model="formData.password" class="uk-input" type="password" placeholder="Password" required="required">
              </div>
            </div>
            <div class="uk-margin" v-if="!showSpinner">
              <div class="uk-inline uk-width-1-1">
                <input type="submit" class="uk-button uk-button-default uk-width-1-1" value="Register now!">
              </div>
            </div>
            <div class="uk-inline uk-width-1-1" style="height: 45px"  v-if="showSpinner">
              <vk-spinner class="uk-position-center uk-container" ratio="1.5" />
            </div>
          </fieldset>
        </form>
      </vk-card>

      <vk-card class="uk-text-center" type="blank" v-if="!showForm">
        <vk-card-title>One more step!</vk-card-title>
        <p>We need to make sure you used your real email.<br> Check your inbox for confirmation email.</p>
      </vk-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'signin',
  data () {
    return {
      showSpinner: false,
      showForm: true,
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        city: '',
        address: '',
        phone: '',
        password: ''
      }
    }
  },
  methods: {
    handleSubmit () {
      this.showSpinner = true;
      setTimeout(this.afterResponse, 3000);
    },
    afterResponse() {
      this.showForm = false;
    }
  }
}
</script>
