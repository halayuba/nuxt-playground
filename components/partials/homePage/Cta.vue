<template>
  <section id="cta" class="mt-24 md:mt-32 bg-brightRed">
    <div class="container mx-auto px-6 flex flex-col md:flex-row justify-between items-cecnter py-16 md:py-12 space-y-12 md:space-y-0">
      <h2 class="text-white font-bold text-4xl text-enter md:text-left leading-tight md:max-w-xl">Learn more about Flex Menu</h2>

      <!-- BUTTON -->
      <MyBtn class=""
        label="Get Started"
        :inverse="true"
      />
    </div>
  </section> <!-- CTA -->
</template>

<script setup>
import MyBtn from '@/components/misc/buttons/NavBarButton.vue'
</script>