import { ref, watch } from "vue"

export function useImageUpload(){
  const imageFile = $ref("")
  const imageUrl = $ref("")
  const errors = $ref([])

  const handleImageSelected = (e) => {
    if( e.target.files.length === 0 ){
      imageFile = ""
      imageUrl = ""
      errors.push('No file selected!')
      return
    }

    imageFile = e.target.files[0]

    /* == CONFIRM IMAGE == */
    if( ! imageFile.type.match('image.*') ) {
      errors.push("The file you are trying to upload does not seem to be an image.")
      return
    }

    /* == CONFIRM SIZE == */
    if( imageFile.size > 200000 ) {
     errors.push("The file you are trying to upload is too large.")
     return
    }

  }

  watch(imageFile, (imageFile) => {
    if( ! (imageFile instanceof File) ){
      return
    }
    let fileReader = new FileReader()
    fileReader.readAsDataURL(imageFile)

    fileReader.onload = () => {
      imageUrl = fileReader.result
    }
  })

  return{ imageFile, imageUrl, handleImageSelected, errors }
}
