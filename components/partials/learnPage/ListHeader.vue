<template>
  <div class="flex justify-between items-center px-3 py-2">
    <div class="flex items-center">

      <!-- ICON INDICATING PRIORITY -->
      <icon  class="w-6 h-6 fill-current text-gray-700"
        :name="iconName"
        v-if="iconName"
      />

      <!-- LIST TYPE: PRIORITY LEVEL -->
      <h5 class="ml-2 text-sm text-gray-700 font-semibold">
        {{ list.type }}
      </h5>
    </div>
    <div class="flex items-center">

      <!-- COUNT OF ITEMS IN THE LIST (OR FILTERED LIST) -->
      <button class="bg-blue-500 px-2 py-1 font-medium text-white rounded-md">
        {{ countCourses }}
      </button>

      <!-- ACTIONS: POPOVER MENU -->
      <Menu as="div" class="relative z-10 ml-2">
        <MenuButton class="hover:bg-gray-300 w-8 h-8 rounded-md grid place-content-center">
          <DotsHorizontalIcon class="w-5 h-5" />
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
              <!-- ADD NEW CARD -->
              <a href="#" class="block px-4 py-2 text-sm text-gray-700"
                :class="{ 'bg-gray-100': active }"
              >Add Card</a>
            </MenuItem>

            <!-- DELETE ENTIRE LIST -->
            <MenuItem
              v-slot="{active}"
            >
              <a href="#" class="block px-4 py-2 text-sm text-red-600"
                :class="{ 'bg-gray-100': active }"
              >Delete list</a>
            </MenuItem>
          </MenuItems>
        </transition>
      </Menu>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { DotsHorizontalIcon } from '@heroicons/vue/solid'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

  const props = defineProps({
    list:{
      type: Object,
      required: true
    },
    countCourses:{
      type: Number,
      required: true
    }
  })

  const iconName = ref('')

  const getIconName = () => {
    if(props.list.type === 'High priority') iconName.value = "priority-high"
    else if(props.list.type === 'Medium priority') iconName.value = "priority-medium"
    else if(props.list.type === 'Low priority') iconName.value = "priority-low"
    else if(props.list.type === 'Completed') iconName.value = "shield-check"
  }

  onMounted(() => {
    getIconName()
  })
</script>
