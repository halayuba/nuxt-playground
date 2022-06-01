<template>
  <Popover class=""
    v-slot="{ open }"
  >
    <PopoverButton class="w-full flex items-center cursor-pointer px-3 py-1 hover:bg-gray-100"
      :class="open ? 'bg-blue-50 text-blue-600' : 'text-opacity-90'"
    >
      <PencilIcon class="w-5 h-5 text-gray-600" />
      <span class="ml-2 text-gray-700">Edit</span>
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
      <PopoverPanel class="absolute z-10 w-72 px-4 mt-3 -translate-x-1/2 left-1/2 sm:px-0"
        v-slot="{ close }"
        :focus="true"
      >
        <div class="bg-white p-3 overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
          <EditBoardForm
            :board="board"
            @closeForm="closeForm(close)"
          />
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel, PopoverOverlay} from '@headlessui/vue'
import { PencilIcon } from '@heroicons/vue/solid';

import EditBoardForm from '@/components/partials/learnPage/EditBoardForm.vue'

  const props = defineProps({
    board:{
      type: Object,
      required: true
    },
  })
  const closeForm = (closePopover) => {
    closePopover()
  }
</script>
