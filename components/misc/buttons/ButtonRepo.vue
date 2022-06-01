<template>
  <div class="inline-flex rounded-md shadow">
    <a
      target="_blank"
      href=""
      class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-indigo-600 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-indigo-500 focus:outline-none"
    >{{ props.title }}</a>
  </div>
</template>

<script setup>
const props = defineProps({ title: String })
</script>
