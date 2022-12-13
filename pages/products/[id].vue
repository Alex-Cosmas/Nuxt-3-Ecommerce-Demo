<template>
  <div class="space-y-10">
    <div>
      <ProductDetails :product="product"/>
    </div>

  </div>
</template>

<script setup>

const {id} = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id

// Fetch the product
const {data: product} = await useFetch(uri, {key: id})

if (!product.value) {
  throw createError({statusCode: 404, statusMessage: 'Product not found!'})
}

definePageMeta({
  layout: 'products'
})

</script>
