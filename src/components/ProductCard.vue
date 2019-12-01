<template>
  <vk-card style="margin-bottom: 10px">
    <vk-grid>
      <div class="uk-width-1-5@m">
        <img src="../assets/car.jpg">
      </div>
      <div class="uk-width-3-5@m">
        <vk-card-title>{{ product.name }}</vk-card-title>
        <p>{{ product.description }}</p>
      </div>
      <div class="uk-width-1-5@m">
        <p>
          Starting price: {{ product.startPrice }}
          <br>
          Current price: {{ product.currentPrice }}
          <br>
          End date: {{ product.endDate }}, {{ product.endHour }}
          <br>
          Lots: {{ product.lots }}
        </p>
      </div>
    </vk-grid>
  </vk-card>
</template>

<script>
    export default {
        name: "productCard",
        props: {
            id: null
        },
        data () {
            return {
                product: {
                    name: 'Lamborghini Urus',
                    startPrice: 1000,
                    currentPrice: 1500,
                    endDate: '8 dec',
                    endHour: '12 pm',
                    lots: 7,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor justo sed nibh pulvinar sodales. Donec ornare eros nulla, vitae maximus lacus fermentum sit amet. '
                }
            }
        }
    }
</script>

<style scoped>

</style>