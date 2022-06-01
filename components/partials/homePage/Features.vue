<template>
  <section class="mt-24 md:mt-32 flex flex-col md:flex-row items-center space-y-8 md:space-y-0">
    <div class="flex flex-col space-y-12 md:w-1/2">
      <h2 class="max-w-md text-4xl font-bold text-center md:text-left">What's different about Flex Menu?</h2>
      <p class="max-w-sm text-center md:text-left text-darkGrayishBlue">Flex-Menu offers a Three Months free service of using our signature web-based solution with the flexibility in operating your website to post attractive food items promotion to your regular and new customers.</p>
    </div>

    <!-- LIST OF FEATURES -->
    <div class="flex flex-col space-y-8 md:w-1/2 p-2 md:p-0">
      <div class="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-6"
        v-for="feature in features"
        :key="feature.id"
      >
        <!-- LIST HEADING -->
        <div class="rounded-full bg-brightRedSupLight md:px-2 xl:px-0 py-2 sm:py-0">
          <div class="flex flex-col sm:flex-row items-center">
            <div class="px-4 py-2 md:py-1 text-white bg-brightRed rounded-full">{{ feature.id }}</div>
            <h3 class="text-base text-center md:text-left lg:font-medium mt-2 sm:mt-0 sm:ml-2 px-2">{{ feature.value }}</h3>
          </div>
        </div>
      </div>
    </div>

  </section> <!-- FEATURES SECTION -->
</template>

<script setup>
import {features} from '@/assets/data/homePage'

</script>
