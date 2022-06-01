<template>
  <Popover v-slot="{ open }" class="relative">
    <PopoverButton
      :class="open ? 'bg-blue-50 text-blue-600' : 'text-opacity-90'"
      class="ml-4 px-3 py-2 bg-gray-100 rounded hover:bg-gray-200 tracking-wide inline-flex items-center"
    >
      <PlusIcon class="w-4 h-4 -ml-1" />
      <span class="ml-1">Create board</span>
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
          <CreateBoardForm
            @closeForm="closeForm(close)"
          />
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel, PopoverOverlay} from '@headlessui/vue'
import { PlusIcon, ChevronDownIcon } from '@heroicons/vue/solid';

import CreateBoardForm from '@/components/partials/learnPage/CreateBoardForm.vue'

  const closeForm = (closePopover) => {
    closePopover()
  }
</script>
