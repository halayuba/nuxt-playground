<template>
  <div class="product-container">
    <img class="product-image" :src="product.imageUrl" />
    <div class="details-wrap flex flex-col justify-center">
      <h3>{{ product.name }}</h3>
      <p>${{ product.price }}</p>
    </div>
    <div class="flex items-center">
      <MyButton
        label="Remove From Cart"
        background="bg-gray-900"
        color="text-white"
        @click.prevent="removeItem"
      />
    </div>
  </div>
</template>

<script setup>
import MyButton from '@/components/misc/buttons/MyButton.vue'
import { storeToRefs } from 'pinia'
import vm from '@/main'

import { useEcommerceStore } from '@/store/ecommerce'

  const { cart, loading, error } = storeToRefs(useEcommerceStore())
  const { deleteFromCart } = useEcommerceStore()

  const props = defineProps({
    product:{
      type: Object,
      required: true
    },
  })

  const removeItem = () => {
    deleteFromCart(props.product.id)
    if(error){
      vm.$toast.error('Failed! Action not completed.')
    } else {
      vm.$toast.success('Item removed from your cart successfully.')
    }
  }
</script>

<style scoped>
  .product-container {
    align-content: 'center';
    border-bottom: 1px solid #ddd;
    display: flex;
    padding: 16px;
    width: 100%;
  }

  .product-image {
    flex: 1;
    height: 100px;
    max-width: 100px;
  }

  .details-wrap {
    padding: 0 16px;
    flex: 3;
  }
</style>
