<template>
  <div>

    <div class="max-w-xl mx-auto">

      <h1 class="mt-6 text-center text-indigo-500 text-2xl font-semibold">{{ title }}</h1>

        <!-- PROFILE AVATAR -->
        <div class="py-6 flex justify-between items-center border-b border-gray-300">
          <p class="font-semibold text-xl">Edit Profile</p>
          <div class="flex">

            <!-- RESET -->
            <button type="button" class="btn_cancel"
              @click='reset'
            >Reset</button>

            <!-- SAVE -->
            <button class="btn_wide ml-4"
              @click="submit"
            >
              Save profile
            </button>
          </div>
        </div>

        <form class="mt-12 flex flex-col justify-center items-center"
          @submit.prevent="submit"
        >
          <div class="flex flex-col justify-center items-center">

            <!-- INPUT COMPONENT -->
            <div class="flex flex-col justify-center items-center">

              <div class="w-24 h-24 rounded-full relative inline-block overflow-hidden">

                <input type="file" class="hidden" accept="image/*"
                  ref="file"
                  @change="handleImageSelected"
                />

                <img class="w-full h-full object-cover" alt="Avatar"
                  :src="imageSrc"
                />

                <div class="absolute top-0 w-full h-full bg-black bg-opacity-25 flex justify-center items-center">
                  <button type="button" class="w-12 h-12 fill-current text-white inline-block p-1 rounded-full hover:bg-white hover:bg-opacity-25 focus:outline-none cursor-pointer"
                    @click="browse"
                  >
                    <icon name="camera" />
                  </button>
                  <button type="button" class="w-12 h-12 fill-current text-white inline-block p-1 rounded-full hover:bg-white hover:bg-opacity-25 focus:outline-none"
                    v-if="imageUrl"
                    @click="remove"
                  >
                    <icon name="cancel" />
                  </button>
                </div>
              </div>

            </div>

            <div class="mt-4">
              <button class="btn_cancel">Save</button>
            </div>
          </div>
        </form>

    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from "vue"
  // import vm from '@/main'
  import { useImageUpload } from '@/composables/useImageUpload.js'
  import icon from '@/components/misc/icons/Icons.vue'

    let { imageUrl, imageFile, handleImageSelected, errors } = useImageUpload()

    const title = $ref('Image Upload')
    const defaultImage = $ref('/assets/img/avatar_no_one.png')

    const imageSrc = computed(() => {
      return imageFile ||= defaultImage
    })

    const submit = () => {
      let data = new FormData()
      data.append('image', imageFile.value)

/*
      axios.post(baseUrl.uploadImageApiUrl, data)
        .then(response => {
          msg.value = response.data.message
          bg.value = "success"
          images.value = response.data.images
          imageUrl.value = ""
          imageFile.value = ""
        })
        .catch(error => {
          flashErrors(error.response.data.errors)
          msg.value = error.response.data.message
          bg.value = "success"
        })

*/
    }

    const browse = () => {
      this.$refs.file.click()
    }

    const remove = () => {
      emit('input', null)
    }

    const errorsExist = () => {
      if( errors ) {
        // vm.$toast.error(errors)
      }
    }

    errorsExist()

/*
    function flashErrors(errors) {
      for( const [key, value] of Object.entries(errors)) {
        for(let item in value) {
          if( value[item] ) this.errors.push(value[item])
        }
      }
    }
*/

/*
    function reset(){
      avatar.value = ""
    }
*/

</script>
