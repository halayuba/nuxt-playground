<template>
  <button
    type="button"
    class="text-center align-middle whitespace-no-wrap select-none cursor-pointer inline-block mb-0 bg-blue-500 text-white font-semibold text-lg rounded leading-tight px-4 py-2 shadow"
    :class="{ 'pointer-events-none opacity-50 ring-2 ring-blue-500 ring-opacity-70 ring-offset-2': selected }"
    @click.prevent="clicked"
  >
    {{ props.label }}
  </button>
</template>

<script setup>
import { ref } from 'vue'

  const emit = defineEmits()

  const props = defineProps({
    label:{
      type: String,
      required: true
    },
    selected:{
      type: Boolean,
      required: true
    }
  })

  const clicked = () => {
    emit('clicked')
  }
</script>
