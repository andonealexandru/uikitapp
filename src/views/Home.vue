<template>
  <div class="uk-padding">
    <ProductCard
      :id = id
    />
    <ProductCard
      :id = id
    />
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard";
export default {
  name: 'home',
  components: {
    ProductCard
  },
  data () {
    return {
      id: 7
    }
  }
}
</script>
