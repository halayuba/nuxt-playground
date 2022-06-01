<template>
  <div class="mt-6">
    <h1 class="text-xl font-semibold bg-blue-50 p-1">{{author.name}}</h1>
    <p class="mt-1 text-sm text-gray-600 font-light">
      {{posts.length}} posts written.
    </p>
    <ol class="mt-2 list-decimal ml-4">
      <li class="p-2 hover:bg-gray-100"
        v-for="post in posts" 
        :key="post.id"
      
      >
        <RouterLink class="text-gray-700"
          :to="`/practice/post/${post.id}`"
        >
          {{ post.title }}
        </RouterLink>
      </li>
    </ol>
  </div>
</template>

<script setup>
  defineProps(['author', 'posts'])
</script>