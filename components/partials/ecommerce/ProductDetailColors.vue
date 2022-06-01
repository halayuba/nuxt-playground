<template>
  <fieldset>
    <legend class="mb-1 text-sm font-medium">Color</legend>

    <div class="flow-root">
      <div class="flex flex-wrap -m-0.5">
        <label for="color_tt" class="cursor-pointer p-0.5">
          <input type="radio" name="color" id="color_tt" class="sr-only peer" />

          <span class="inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
            Texas Tea
          </span>
        </label>

        <label for="color_fr" class="cursor-pointer p-0.5">
          <input type="radio" name="color" id="color_fr" class="sr-only peer" />

          <span class="inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
            Fiesta Red
          </span>
        </label>

        <label for="color_cb" class="cursor-pointer p-0.5">
          <input type="radio" name="color" id="color_cb" class="sr-only peer" />

          <span class="inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
            Cobalt Blue
          </span>
        </label>
      </div>
    </div>
  </fieldset>
</template>

<script setup>
import { ref } from "vue"

  const title = ref('TEST')
</script>
