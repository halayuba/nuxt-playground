<template>
  <fieldset class="mt-4">
    <legend class="mb-1 text-sm font-medium">Size</legend>

    <div class="flow-root">
      <div class="flex flex-wrap -m-0.5">
        <label for="size_xs" class="cursor-pointer p-0.5">
          <input type="radio" name="size" id="size_xs" class="sr-only peer" />

          <span class="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
            XS
          </span>
        </label>

        <label for="size_s" class="cursor-pointer p-0.5">
          <input type="radio" name="size" id="size_s" class="sr-only peer" />

          <span class="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
            S
          </span>
        </label>

        <label for="size_m" class="cursor-pointer p-0.5">
          <input type="radio" name="size" id="size_m" class="sr-only peer" />

          <span class="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
            M
          </span>
        </label>

        <label for="size_l" class="cursor-pointer p-0.5">
          <input type="radio" name="size" id="size_l" class="sr-only peer" />

          <span class="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
            L
          </span>
        </label>

        <label for="size_xl" class="cursor-pointer p-0.5">
          <input type="radio" name="size" id="size_xl" class="sr-only peer" />

          <span class="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
            XL
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
