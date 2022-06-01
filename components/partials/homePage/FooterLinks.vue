<template>
  <div class="flex flex-col space-y-3 text-white">
    <NuxtLink class="hover:text-darkGrayishBlue"
      v-for="link in colNavMenuItems"
      :key="link.id"
      :href="link.href"
    >
      {{ link.item }}
    </NuxtLink>
  </div>
</template>

<script setup>
import { ref } from "vue"
import {navBarMenuItems} from '@/assets/data/homePage'

  const props = defineProps({
    col:{
      type: Number,
      required: true
    },
  })

  /* == NUMBER OF NAV LINK ITEMS PER COLUMN == */
  const itemsPerCol = 3

  /* == DEFINE A NEW REACTIVE ARRAY TO HOLD THE NAV LINKS == */
  const colNavMenuItems = ref([])

  const footerLinks = () => {

    /* == POPULATE THE FIRST COLUMN WITH THE FIRST 3 LINKS == */
    if( props.col === 1 ) {
      let i = 0
      colNavMenuItems.value = []
      for(i; i < itemsPerCol; i++){
        colNavMenuItems.value.push(navBarMenuItems[i])
      }
    } else {
      let i = itemsPerCol
      colNavMenuItems.value = []
      for(i; i < navBarMenuItems.length; i++){
        colNavMenuItems.value.push(navBarMenuItems[i])
      }
    }
  }

  footerLinks()

</script>
