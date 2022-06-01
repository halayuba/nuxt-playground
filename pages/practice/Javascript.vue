<template>
  <div>
    <!-- SPLIT -->
    <PageHeader class="mt-8">JS: Split</PageHeader>
    <div class="mt-2 bg-red-50 p-2">
      {{ split }} - {{ init }}
    </div>

    <!-- REPLACE -->
    <PageHeader class="mt-4">JS: Replace</PageHeader>
    <div class="mt-2 bg-red-50 p-2">
      {{ replace }}
    </div>

    <!-- REDUCE -->
    <PageHeader class="mt-4">JS: Reduce ex1</PageHeader>
    <div class="mt-2 bg-red-50 p-2">
      {{ reduceText }}
    </div>

    <PageHeader class="mt-4">JS: Reduce ex2</PageHeader>
    <div class="mt-2 bg-red-50 p-2">
      {{ reduceAge }}
    </div>

    <PageHeader class="mt-4">JS: Reduce ex3</PageHeader>
    <div class="mt-2 bg-red-50 p-2">
      {{ reduceInitials }}
    </div>

    <PageHeader class="mt-4">JS: Logical Assignment</PageHeader>
    <div class="mt-2 bg-red-50 p-2">
      {{ a }} - {{ b }} - {{ c }}
    </div>

    <PageHeader class="mt-4">JS: Array Functions: Every - Find</PageHeader>
    <div class="mt-2 bg-red-50 p-2">
      {{ isAboveAveragePerformingClass }} - {{ isHighPerformingClass }} - {{ resultFind.name }} - {{ resultIncludes }}
    </div>

  </div>
</template>

<script setup>
import { ref } from "vue"

  const name = "Hala Yuba"
  const split = name.split(" ")
  const init = `${split[0][0]}${split[1][0]}`

  const text = "3 is less than 4 but greater than 2"

  const replace = text.replace(/\d/g, number => {
    return number % 2 === 0 ? '@' : number
  })

  const numbers = [3, 24, 8, 3]

  const reduceText = numbers.reduce((p, c) => {
    return p + c
  }, 0)

  const people = [
    { name: "Hala Yuba", age: 22, job: "Mechanic" },
    { name: "Shako Mako", age: 55, job: "Chef" },
    { name: "Taybe Mansoor", age: 40, job: "Teacher" }
  ]

  const reduceAge = people.reduce((p, c) => {
    if(c.age > p) return c.age

    return p
  }, 0)

  const reduceInitials = people.reduce((p, c, i, a) => {
    let split = c.name.split(" ")
    let init = `${split[0][0]}${split[1][0]}`

    if( i === a.length - 1) init += '.'
    else init += ', '

    return p + init

  }, "")

  let a = 10 //== truthy vs [0, null, '', undefined] none truthy
  a &&= 20 //== if(a) { a = 20 } //== A TRUE 20 OTHERWISE 10

  let b = 10
  b ||= 20 //== 10 //== B TRUE 10 OTHERWISE 20

  let c = undefined //== null
  c ??= 20 //== 20


  const classGrades = [87, 92, 82, 59, 67, 80]
  const isHighPerformingClass = classGrades.every(grade => grade >= 80)
  const isAboveAveragePerformingClass = classGrades.some(grade => grade >= 80)

  const resultFind = people.find(x => x.job === 'Chef')

  const resultIncludes = classGrades.includes(67)

</script>
