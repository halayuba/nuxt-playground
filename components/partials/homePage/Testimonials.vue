<template>
  <section class="mt-32 max-w-6xl mx-auto px-5 text-center">
    <!-- HEADING -->
    <h2 class="text-4xl text-semibold text-center">Why Flex Menu</h2>

    <!-- TESTIMONIAL WRAPPER -->
    <div class="mt-12 md:mt-24 flex flex-col md:flex-row md:space-x-6">
      <div class="md:w-1/3 p-6"
        v-for="potential in potentials"
        :key="potential.id"
      >
        <div class="flex flex-col items-center rounded-lg bg-veryLightGray space-y-6">
          <img class="-mt-8 w-16"
            :src="`assets/img/${potential.img}`"
          >
          <h5 class="text-lg font-semibold">{{ potential.dubheading }}</h5>
          <p class="text-sm text-darkGrayishBlue">{{ potential.body }}</p>
        </div>
      </div>
    </div>
  </section> <!-- TESTIMONIALS -->
</template>

<script setup>
import {potentials} from '@/assets/data/homePage'

</script>
