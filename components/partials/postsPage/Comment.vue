<template>
  <div>
    <div 
      v-for="comment in comments" 
      :key="comment.id"
    >
      <h3 class="text-lg font-semibold py-1">{{ comment.name }}</h3>
      <p>{{ comment.body }}</p>
    </div>
  </div>
</template>

<script setup>
  defineProps(['comments'])
</script>