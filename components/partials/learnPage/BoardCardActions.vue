<template>
  <div class="space-y-1">

    <!-- EDIT: CREATE NEW BOARD (POPOVER) -->
    <EditBoardPopover
      :board="board"
    />

    <!-- STATUS -->
    <div class="flex items-center cursor-pointer px-3 py-1 hover:bg-gray-100"
      @click.prevent="updateBoardStatus"
    >
      <RefreshIcon class="w-5 h-5 text-gray-600" />
      <span class="ml-2 text-gray-700">Status</span>
    </div>

    <!-- DELETE -->
    <div class="flex items-center cursor-pointer px-3 py-1 hover:bg-gray-100"
      @click.prevent="removeBoard"
    >
      <TrashIcon class="w-5 h-5 text-gray-600" />
      <span class="ml-2 text-gray-700">Delete</span>
    </div>


  </div>
</template>

<script setup>
import { PencilIcon, TrashIcon, RefreshIcon } from '@heroicons/vue/solid'
import { storeToRefs } from 'pinia'
import vm from '@/main'

import { useBoardStore } from '@/store/boards'
import EditBoardPopover from '@/components/partials/learnPage/EditBoardPopover.vue'
// import EditBoardModal from '@/components/partials/learnPage/EditBoardModal.vue'

  const props = defineProps({
    board:{
      type: Object,
      required: true
    },
  })

  const { error } = storeToRefs(useBoardStore())

  const { deleteBoard, toggleBoardStatus, updateModalState } = useBoardStore()

  const updateBoardStatus = () => {
    try {
      toggleBoardStatus(props.board._id)
      vm.$toast.success('Status updated successfully.')
    } catch (err) {
      vm.$toast.error(err)
    }
  }

  const removeBoard = () => {
    try {
      deleteBoard(props.board._id)
      vm.$toast.success('Deleted successfully.')
    } catch (err) {
      vm.$toast.error(err)
    }
  }

  // function openModal() {
  //   updateModalState(true)
  // }
</script>
