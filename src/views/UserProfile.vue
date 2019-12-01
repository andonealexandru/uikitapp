<template>
  <div class="uk-padding">
    <vk-grid gutter="small" class="uk-flex-center">
      <div class="uk-width-2-5@m">
        <img src="../assets/no-profile.png" style="max-height: 100%; max-width: 100%;">
      </div>
      <div class="uk-width-3-5@m">
        <table class="uk-table uk-table-justify uk-table-divider">
          <tbody>
          <tr>
            <td class="uk-text-right">FIRST NAME</td>
            <td>{{ user.first_name }}</td>
            <td><vk-icon icon="pencil" /></td>
          </tr>
          <tr>
            <td class="uk-text-right">LAST NAME</td>
            <td>{{ user.last_name }}</td>
            <td><vk-icon icon="pencil" /></td>
          </tr>
          <tr>
            <td class="uk-text-right">EMAIL</td>
            <td>{{ user.email }}</td>
            <td><vk-icon icon="pencil" /></td>
          </tr>
          <tr>
            <td class="uk-text-right">CITY</td>
            <td>{{ user.city }}</td>
            <td><vk-icon icon="pencil" /></td>
          </tr>
          <tr>
            <td class="uk-text-right">ADDRESS</td>
            <td>{{ user.address }}</td>
            <td><vk-icon icon="pencil" /></td>
          </tr>
          <tr>
            <td class="uk-text-right">PHONE NUMBER</td>
            <td>{{ user.phone }}</td>
            <td><vk-icon icon="pencil" /></td>
          </tr>
          </tbody>
        </table>
      </div>
    </vk-grid>
  </div>
</template>

<script>
  export default {
    name: "profile",
    data () {
      return {
        user: {
          first_name: 'Alexandru',
          last_name: 'Andone',
          email: 'andonealexandru19@yahoo.com',
          city: 'Brasov',
          address: 'Str. Valea Cetatii',
          phone: '0720097608'
        }
      }
    }
  }
</script>
