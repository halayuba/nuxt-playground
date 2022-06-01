<template>
  <li class="group relative bg-blue-600 hover:bg-blue-700 rounded-md min-h-[8rem]">

    <!-- BOARD NAME & DESCRIPTION -->
    <BoardNameDesc
      :board="board"
    />

    <Popover v-slot="{ open }" class="relative">
      <PopoverButton
        :class="open ? 'bg-blue-50 text-blue-600' : 'text-opacity-90'"
        class="hidden absolute top-1 right-1 bg-gray-300 hover:bg-gray-200 w-8 h-8 rounded-md group-hover:grid place-content-center text-gray-600 hover:text-black"
      >
        <ChevronDownIcon class="w-5 h-5" />
      </PopoverButton>
      <PopoverOverlay className="z-10 bg-black opacity-30 fixed inset-0" />

      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="translate-y-1 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="translate-y-1 opacity-0"
      >
        <PopoverPanel class="absolute z-10 w-28 px-4 mt-8 translate-x-4 right-1 sm:px-0"
          v-slot="{ close }"
        >
          <div class="bg-white py-3 overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
            <BoardCardActions
              :board="board"
            />
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </li>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel, PopoverOverlay} from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/solid'

import BoardCardActions from './BoardCardActions.vue'
import BoardNameDesc from './BoardNameDesc.vue'

  const props = defineProps({
    board:{
      type: Object,
      required: true
    },
  })
</script>
