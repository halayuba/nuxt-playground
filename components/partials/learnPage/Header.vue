<template>
  <header class="shrink-0 flex justify-between bg-white px-4 py-3">

    <!-- LOGO / HOME -->
    <div class="flex">
      <!-- HOME -->
      <router-link to="/">
        <HomeIcon class="w-7 h-7 text-blue-600" />
      </router-link>
      <!-- LOGO -->
      <a href="#" class="ml-2 text-2xl font-black tracking-tight">Simon's board</a>
    </div>

    <!-- NAVBAR -->
    <NavBar />

    <!-- LOGGED IN USERS -->
    <Menu as="div" class="relative z-20 mr-4">
      <MenuButton class="focus:outline-none ring-2 ring-offset-2 ring-gray-500 focus:ring-blue-700 rounded-full">
        <img src="@/assets/img/me.jpg" class="inline w-10 h-10 rounded-full">
      </MenuButton>

      <transition
        enter-active-class="transition transform duration-100 ease-out"
        enter-from-class="opacity-0 scale-90"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition transform duration-100 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-90"
      >
      <MenuItems class="origin-top-right mt-2 absolute right-0 w-40 bg-white rounded-md shadow-lg border focus:outline-none">
        <MenuItem
          v-slot="{active}"
        >
          <RouterLink to="/boards" class="block px-4 py-2 text-sm text-gray-700"
            :class="{ 'bg-gray-100': active }"
          >My Boards</RouterLink>
        </MenuItem>
        <MenuItem
          v-slot="{active}"
        >
          <RouterLink to="/profile" class="block px-4 py-2 text-sm text-gray-700"
            :class="{ 'bg-gray-100': active }"
          >My Profile</RouterLink>
        </MenuItem>
        <MenuItem
          v-slot="{active}"
        >
          <a href="#" class="block px-4 py-2 text-sm text-gray-700"
            :class="{ 'bg-gray-100': active }"
          >Settings</a>
        </MenuItem>
        <MenuItem
          v-slot="{active}"
        >
          <a href="#" class="block px-4 py-2 text-sm text-gray-700"
            :class="{ 'bg-gray-100': active }"
          >Logout</a>
        </MenuItem>
      </MenuItems>
      </transition>
    </Menu>

  </header>
</template>

<script setup>
import { HomeIcon } from '@heroicons/vue/solid'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import NavBar from '@/components/layouts/NavBar.vue'
</script>
