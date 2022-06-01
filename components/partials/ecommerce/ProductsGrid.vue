<template>
  <div class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col"
    v-for="product in products"
    :key="product.id"
  >
    <ProductsGridItem :product="product" />
  </div>
</template>

<script setup>
import { ref } from "vue"
// import { products } from '@/assets/data/ecommerce'
import ProductsGridItem from './ProductsGridItem.vue'
import { storeToRefs } from 'pinia'

import { useEcommerceStore } from '@/store/ecommerce'

  const { products, loading, error } = storeToRefs(useEcommerceStore())
  const { fetchProducts } = useEcommerceStore()

  fetchProducts()

</script>
