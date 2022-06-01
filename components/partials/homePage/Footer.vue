<template>
  <footer class="bg-veryDarkBlue">

    <!-- INPUT: REPEATED TWICE FOR RESPONSIVE DESIGN -->
    <div class="pt-12 hidden md:flex lg:hidden justify-center items-center">
      <form class="flex">
        <input type="text" name="" class="flex-1 px-4 rounded-l-full focus:outline-none" placeholder="Send me updates" />
        <button type="button" class="px-6 py-2 text-white rounded-r-full bg-brightRed hover:bg-brightRedLight focus:outline-none">Go</button>
      </form>
    </div> <!-- INPUT -->

    <!-- FOOTER WRAPPER -->
    <div class="flex flex-col-reverse md:flex-row justify-between px-4 md:container md:mx-auto md:px-6 py-10 space-y-8 md:space-y-0">

      <!-- LOGO AND SOCIAL LINKS -->
      <div class="flex flex-col justify-center items-center md:items-start mt-8 md:mt-0 space-y-2">
        <!-- LOGO -->
        <picture class="">
          <img src="@/assets/img/logo-white.svg" class="h-8">
        </picture>
        <!-- SOCIAL LINKS -->
        <div class="flex justify-center space-x-2">
          <a href="#" class="p-1 bg-brightRedSupLight hover:bg-brightRedLight" target="_blank"
            v-for="link in socialLinks"
            :key="link.id"
          >
            <icon :name="link.name" class="w-6 h-6 fill-current text-gray-700" />
          </a>
        </div>
        <!-- COPYRIGHT -->
        <div class="text-gray-100 text-sm font-light">
          Copyright &copy; 2022. All rights reserved.
        </div>
      </div> <!-- LOGO AND SOCIAL LINKS -->

      <!-- NAV LINKS -->
      <div class="flex justify-center py-4 md:py-0"
        :class="{'space-x-12 lg:space-x-24': mutliCols}"
      >
        <div class=""
          v-for="col in columns"
          :key="col"
        >
          <FooterLinks :col="col" />
        </div>
      </div> <!-- NAV LINKS -->

      <!-- INPUT -->
      <div class="flex md:hidden lg:flex justify-center items-center">
        <form class="flex">
          <input type="text" name="" class="flex-1 px-4 rounded-l-full focus:outline-none" placeholder="Send me updates" />
          <button type="button" class="px-6 py-2 text-white rounded-r-full bg-brightRed hover:bg-brightRedLight focus:outline-none">Go</button>
        </form>
      </div> <!-- INPUT -->
    </div> <!-- FOOTER WRAPPER -->
  </footer>
</template>

<script setup>
import { ref } from "vue"
import {navBarMenuItems, socialLinks} from '@/assets/data/homePage'
import FooterLinks from './FooterLinks.vue'
import icon from '@/components/misc/icons/Icons.vue'

  /* == NUMBER OF NAV LINK ITEMS PER COLUMN == */
  const itemsPerCol = 3

  /* == MAX NUMBER OF NAV LINK ITEMS ALLOWED IN THE FOOTER == */
  const maxItems = 9

  /* == NUMBER OF NAV LINK COLUMNS IN THE FOOTER == */
  const columns = ref(0)

  /* == IS MULTI COLUMN OF NAV LINKS EXPECTED? == */
  const mutliCols = ref(false)

  /* == THE ASSUMPTION IS LINKS CAN FIT IN ONE, TWO, OR THREE COLUMNS - NO OTHER OPTION IS ENTERTAINED (OR UPDATE CODE) == */
  /* == FIND HOW MANY COLUMNS AND HOW MANY ITEMS IN THE LAST COLUMN == */
  const numOfCols = () => {
    /* == THE ASSUMPTION IS LINKS CAN NOT BE MORE THAN 9 ITEMS (OR UPDATE CODE) == */
    if(navBarMenuItems.length > maxItems){
      columns.value = 3 //== JUST CONSIDER THE FIRST 3 COLUMNS
      mutliCols.value = true
    }
    /* == MORE LINKS TO FIT IN ONE COLUMN == */
    else if(navBarMenuItems.length > itemsPerCol){
      if((navBarMenuItems.length / itemsPerCol) < 2){
        columns.value = 2
        mutliCols.value = true
      } else if((navBarMenuItems.length / itemsPerCol) == 2){
        columns.value = 2
        mutliCols.value = true
      } else {
        columns.value = 3
        mutliCols.value = true
      }
    }
    /* == LINKS CAN FIT IN ONE COLUMN ONLY == */
    else {
      mutliCols.value = false
      columns.value = 1
    }
  }

  numOfCols()
</script>
