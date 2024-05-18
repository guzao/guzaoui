<script setup lang="ts">
const tClick = (e: MouseEvent) => {
  console.log(e, '延时')
}

const click = (e: MouseEvent) => {
  console.log(e , '立即执行')
}

</script>

<template>
  <gz-button @click="tClick" :useThrottle="true"> 延时 </gz-button>
  <gz-button @click="click" type="info"> 立即执行 </gz-button>
  <gz-button type="primary"> button </gz-button>
  <gz-button type="success"> button </gz-button>
  <gz-button type="warning"> button </gz-button>
</template>

<style scoped></style>
