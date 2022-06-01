<template>
  <a
    class="inline-flex justify-center items-center px-4 py-2 font-medium leading-6 transition duration-150 ease-in-out border border-transparent rounded-full focus:outline-none"
    :class="[ inverse ? 'text-brightRed bg-white hover:bg-veryPaleRed shadow-2xl' : 'text-white bg-brightRed hover:bg-brightRedLight']"
    :href="href"
  >
    {{ props.label }}
  </a>
</template>

<script setup>
  import { computed } from 'vue'

  const props = defineProps({
    label:{
      type: String,
      required: true
    },
    inverse:{
      type: Boolean,
      default: false
    },
    href:{
      type: String,
      default: '#'
    }
  })
</script>
