<template>



  <div class=" mx-auto container px-24 min-h-screen flex flex-col">
    <header class="py-10">
      <nav class="flex justify-between">
        <div>
          <NuxtLink to="/">
            <span class="font-semibold">
              Nuxt E-Commerce Demo
            </span>
          </NuxtLink>
        </div>
        <div class="space-x-4">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
          <NuxtLink to="/products" class="btn">Products</NuxtLink>
        </div>


      </nav>
    </header>


    <div class="flex-grow">
      <slot />
    </div>

    <footer class="pin-b py-10">
      <nav class="space-x-4">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
      </nav>
    </footer>
  </div>
</template>


<style scoped>
.router-link-exact-active {
  color: #12b488
}
</style>
