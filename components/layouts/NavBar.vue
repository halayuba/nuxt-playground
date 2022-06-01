<template>
  <nav class="relative">
    <div class="flex justify-between items-center">

      <!-- NAV MENU ITEM -->
      <div class="hidden md:flex space-x-6">
        <NavBarItem
          v-for="navbarmenuitem in navBarMenuItems"
          :key="navbarmenuitem.id"
          :navbarmenuitem="navbarmenuitem"
        />
      </div> <!-- MENU -->

      <!-- HAMBURGER ICON -->
      <button class="block md:hidden focus:outline-none"
        @click="toggleMobileMenu"
      >
        <icon class="w-6 h-6 fill-current text-gray-700"
          :name="[ mobileMenuFlag? 'cancel' : 'mobilemenu']"
        />
      </button>
    </div>

    <!-- MOBILE MENU -->
    <div class="md:hidden">
      <div class="mt-6 py-8 absolute bg-white drop-shadow-md font-semibold w-full"
        v-if="mobileMenuFlag"
      >
        <ul class="space-y-1 w-full">
          <li class="py-4 hover:bg-gray-100 text-center"
            v-for="navbarmenuitem in navBarMenuItems"
            :key="navbarmenuitem.id"
          >
            <a class="hover:text-darkGrayishBlue tracking-wider"
              :href="navbarmenuitem.href"
            >
              {{ navbarmenuitem.item }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import {navBarMenuItems} from '@/assets/data/homePage'
import NavBarItem from './NavBarItem.vue'

  const toggleMobileIcon = ref(false)
  const mobileMenuFlag = ref(false)

  const toggleMobileMenu = () => {
    mobileMenuFlag.value = mobileMenuFlag.value ? false : true
  }

</script>
