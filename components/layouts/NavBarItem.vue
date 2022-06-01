<template>
  <div class="">
    <!-- NAV MENU WITH SUBITEMS -->
    <div class=""
      v-if="navbarmenuitem.submenu"
    >
      <NavBarSubItem
        :navbarmenuitem="navbarmenuitem"
      />
    </div>

    <!-- NAV MENU WITH NO SUBITEMS -->
    <div class="" v-else>
      <RouterLink class="hover:text-darkGrayishBlue"
        :to="navbarmenuitem.href"
      >
        {{ navbarmenuitem.item }}
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import NavBarSubItem from './NavBarSubItem.vue'

  const props = defineProps({
    navbarmenuitem:{
      type: Object,
      required: true
    },
  })

</script>
