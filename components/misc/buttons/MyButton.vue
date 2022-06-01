<template>
  <button
    type="btnType"
    class="flex items-center justify-center px-4 py-2 text-lg font-medium leading-6 transition duration-150 ease-in-out border border-transparent rounded-md focus:outline-none"
    :class="[background, color, btnState]"
    :disabled="disabled"
    @click="clicked"
  >
    {{ props.label }}
  </button>
</template>

<script setup>
  import { computed } from 'vue'

  const props = defineProps({
    label:{
      type: String,
      required: true
    },
    btnType:{
      type: String,
      default: 'submit'
    },
    background:{
      type: String,
      required: true
    },
    color:{
      type: String,
      required: true
    },
    disabled:{
      type: Boolean,
      default: false
    }
  })

  const emit = defineEmits()

  const clicked = () => {
    emit('clicked')
  }

  const btnState = computed(() => props.disabled ? 'pointer-events-none opacity-50' : 'hover:opacity-90')

</script>
