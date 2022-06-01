<template>
<div class="bg_img">
  <div class="container mx-auto p-6">
    <!-- NAV -->
    <NavBar />
    <div>
      {{ title }}
    </div>
  </div>
</div>
</template>

<script setup>
  import { ref } from "vue"
  import NavBar from '@/components/layouts/NavBar.vue'

    const title = ref('To Dos')
</script>