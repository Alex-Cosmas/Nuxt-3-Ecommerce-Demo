<template>
  <div class="space-y-10">
    <div>

      <p>
        {{ product.id }}
      </p>
      <p>
        {{ product.title }}
      </p>

      <p>
        {{ product.price }}
      </p>


    </div>

  </div>
</template>

<script setup>

const { id } = useRoute().params

const uri = 'https://fakestoreapi.com/products/' + id

// Fetch the product
const { data: product } = await useFetch(uri, { key: id })

definePageMeta({
  layout: 'products'
})

</script>
