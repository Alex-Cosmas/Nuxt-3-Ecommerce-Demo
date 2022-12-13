<template>
  <div>
    <h2>About</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at dolor ipsa magnam obcaecati officia omnis
      pariatur, reiciendis rem reprehenderit saepe, sunt velit? Autem consectetur ducimus ea nemo nostrum tenetur?</p>

    <p>{{ data }}</p>
  </div>
</template>

<script setup>
// const {data} = await useFetch('/api/product?name=mario', {
//   method: 'post',
//   body: {age: 30}
// })

const {data} = useFetch('/api/currency/GBP')
</script>
