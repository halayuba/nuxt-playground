<template>
  <div class="">
    <!-- NAV MENU WITH SUBITEMS -->
    <div class=""
      v-if="navbarmenuitem.submenu"
    >
      <NavSubItem
        :navbarmenuitem="navbarmenuitem"
      />
    </div>

    <!-- NAV MENU WITH NO SUBITEMS -->
    <div class="" v-else>
      <NuxtLink class="hover:text-darkGrayishBlue"
        :to="navbarmenuitem.href"
      >
        {{ navbarmenuitem.item }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import NavSubItem from './NavSubItem.vue'

  const props = defineProps({
    navbarmenuitem:{
      type: Object,
      required: true
    },
  })

</script>
