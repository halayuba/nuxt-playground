<template>
  <router-link :to="`/ecommerce/products/${product.id}`">
    <img class="hover:grow hover:shadow-lg"
      :src="product.imageUrl"
    />
    <div class="pt-3 flex items-center space-x-4">
      <p class="">
        {{ product.name }}
      </p>
      <icon name="heart" class="w-6 h-6 fill-current text-gray-500 hover:text-black" />
    </div>
    <p class="pt-1 text-gray-900">
      ${{ product.price }}
    </p>
  </router-link>
</template>

<script setup>
  const props = defineProps({
    product:{
      type: Object,
      required: true
    },
  })

</script>
