<template>
  <div v-for="(item, index) in props.item"
       :key="index">
    <p>
      {{item}}
    </p>
  </div>
</template>

<script setup>

  const props = defineProps({
    item:{
      type: Object,
      required: true
    }
  })

</script>

<style scoped lang="scss">

  p{
    text-align-last: center;
  }

</style>