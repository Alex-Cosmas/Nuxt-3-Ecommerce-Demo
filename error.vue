<template>
  <div class="flex flex-col min-h-screen items-center justify-center">
    <div class="mx-auto text-center card w-1/2 py-16 bg-gray-900 text-amber-50">
      <p class=" ">Status</p>
      <p class=" text-9xl font-bold">
        {{ error.statusCode }}
      </p>
      <div>
        <p class="mt-7 sm:text-2xl">{{ error.message }}</p>
      </div>
    </div>

    <div class="mt-10 ">
      <button @click="handleClearError" class="uppercase border-b-2 inline">Go back to homepage</button>
    </div>
  </div>
</template>

<script setup>
defineProps(['error'])
const handleClearError = () => clearError({redirect: '/'})

</script>