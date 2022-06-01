<template>
  <div>
    {{ title }}

    <!-- NAV LINKS -->
    <div class=""
      :class="{'flex justify-around space-x-12': mutliCols}"
    >
      <div class=""
        v-for="col in columns"
        :key="col"
      >
        <FooterLinks :col="col" />

      </div>

    </div> <!-- NAV LINKS -->

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import navbarmenuitems from '@/assets/data/navbarmenuitems'
import FooterLinks from './FooterLinks.vue'

  const title = ref('Test')

  /* == NUMBER OF NAV LINK ITEMS PER COLUMN == */
  const itemsPerCol = 3

  /* == MAX NUMBER OF NAV LINK ITEMS ALLOWED IN THE FOOTER == */
  const maxItems = 9

  /* == NUMBER OF NAV LINK COLUMNS IN THE FOOTER == */
  const columns = ref(0)

  /* == THE REMAINDER OF NAV LINK ITEMS IN THE LAST COLUMN == */
  const itemsInLastCol = ref(0)

  /* == IS MULTI COLUMN OF NAV LINKS EXPECTED? == */
  const mutliCols = ref(false)

  /* == DEFINE A NEW REACTIVE ARRAY TO HOLD THE NAV LINKS == */
  // const colNavMenuItems = ref([])

  // const createNewVar = () => {
  //   for (let i = 0; i < navbarmenuitems.length; i++){
  //     colNavMenuItems.value.push(navbarmenuitems[i])
  //   }
  // }

/*
  const footerLinks = (col) => {

    if( col === 1 ) {
      let i = 0
      colNavMenuItems.value = []
      for(i; i < itemsPerCol; i++){
        console.log('TEST i', i)
        colNavMenuItems.value.push(navbarmenuitems[i])
      }
    } else {
      let i = itemsPerCol
      colNavMenuItems.value = []
      for(i; i < navbarmenuitems.length; i++){
        console.log('RESULT i', i)
        colNavMenuItems.value.push(navbarmenuitems[i])
      }
    }

    return colNavMenuItems.value
  }
*/

  /* == THE ASSUMPTION IS LINKS CAN FIT IN ONE, TWO, OR THREE COLUMNS - NO OTHER OPTION IS ENTERTAINED (OR UPDATE CODE) == */
  /* == FIND HOW MANY COLUMNS AND HOW MANY ITEMS IN THE LAST COLUMN == */
  const numOfCols = () => {
    /* == THE ASSUMPTION IS LINKS CAN NOT BE MORE THAN 9 ITEMS (OR UPDATE CODE) == */
    if(navbarmenuitems.length > maxItems){
      columns.value = 3 //== JUST CONSIDER THE FIRST 3 COLUMNS
      mutliCols.value = true
    }
    /* == MORE LINKS TO FIT IN ONE COLUMN == */
    else if(navbarmenuitems.length > itemsPerCol){
      if((navbarmenuitems.length / itemsPerCol) < 2){
        itemsInLastCol.value = navbarmenuitems.length % itemsPerCol
        columns.value = 2
        mutliCols.value = true
      } else if((navbarmenuitems.length / itemsPerCol) == 2){
        itemsInLastCol.value = itemsPerCol
        columns.value = 2
        mutliCols.value = true
      } else {
        itemsInLastCol.value = navbarmenuitems.length % itemsPerCol
        columns.value = 3
        mutliCols.value = true
      }
    }
    /* == LINKS CAN FIT IN ONE COLUMN ONLY == */
    else {
      mutliCols.value = false
      columns.value = 1
      itemsInLastCol.value = navbarmenuitems.length % itemsPerCol
    }
  }

  onMounted(() => {
    numOfCols()
    // createNewVar()
    // console.log('TEST columns:', columns.value) //== 2
  })

</script>
