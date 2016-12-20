<template>
  <div>
    <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
  </div>
</template>

<script>
  import Stock from './Stock.vue'

  export default {
    data () {
      return {
        stocks: [
          { id: 1, name: 'BMW', price: 110 },
          { id: 2, name: 'Google', price: 220 },
          { id: 3, name: 'Apple', price: 250 },
          { id: 4, name: 'Twitter', price: 8 }
        ]
      }
    },
    components: {
      appStock: Stock
    }
  }
</script>
