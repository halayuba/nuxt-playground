<template>
  <div class="flex flex-col space-y-3 text-white">
    <a class="hover:text-darkGrayishBlue"
      v-for="link in colNavMenuItems"
      :key="link.id"
      :href="link.href"
    >
      {{ link.item }}
    </a>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import navbarmenuitems from '@/assets/data/navbarmenuitems'

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

    if( props.col === 1 ) {
      let i = 0
      colNavMenuItems.value = []
      for(i; i < itemsPerCol; i++){
        console.log('TEST i', i)
        colNavMenuItems.value.push(navbarmenuitems[i])
      }
    } else {
      let i = itemsPerCol
      colNavMenuItems.value = []
      for(i; i < navbarmenuitems.length; i++){
        console.log('RESULT i', i)
        colNavMenuItems.value.push(navbarmenuitems[i])
      }
    }

    // return colNavMenuItems.value
  }

  onMounted(() => {
    footerLinks()
  })

</script>
