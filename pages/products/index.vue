<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-5">
      <div v-for="(p, index) in products">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'products'
})

// Fetch the products from API
const { data: products } = await useFetch("https://fakestoreapi.com/products")
// console.log(products);


// const { data: products } = await useFetch('https://api.nuxtjs.dev/mountains')

</script>

<style scoped>

</style>
