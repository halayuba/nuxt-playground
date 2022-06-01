<template>
  <Menu as="div" class="relative z-20">
    <MenuButton class="flex items-center">
      <span>{{ navbarmenuitem.item }}</span>
      <ChevronDownIcon class="w-5 h-5 ml-1" />
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
          v-for="sub in navbarmenuitem.submenu"
        >
          <RouterLink class="block px-4 py-2 text-sm text-gray-700"
            :class="{ 'bg-gray-100': active }"
            :to="sub.href"
          >
            {{ sub.item }}
          </RouterLink>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/solid'

  const props = defineProps({
    navbarmenuitem:{
      type: Object,
      required: true
    },
  })

</script>
