<template>
  <div>
    <div class="mt-2">
      <h1 class="text-xl font-semibold bg-blue-50 p-1">{{ post.title }}</h1>
      <div class="mt-1 flex justify-between"
        v-if="author"
      >
        <p>
          Written by: 
          <RouterLink 
            :to="`/practice/author/${author.username}`"
          >
            {{ author.name }}
          </RouterLink>
        </p>
        <span class="underline cursor-pointer"
          @click="toggleShowComments"
        >Comments: 
          {{ getPostComments.length }}
        </span>
      </div>

      <p>{{ post.body }}</p>
    </div>
    <hr>
    <div class=""
      v-if="showFlag"
    >
      <h3>Comments:</h3>
      <Comment 
        :comments="getPostComments"
      />
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useCommentStore } from '@/store/comments'
  import Comment from './Comment.vue'

  defineProps(['post', 'author'])

  const showFlag = ref(false)
  const toggleShowComments = () => {
    showFlag.value = !showFlag.value
  }

  const { getPostComments } = storeToRefs(useCommentStore())

  const { fetchComments } = useCommentStore()
  fetchComments()
</script>