<template>
  <div style="display: block">
    <p>
      {{props.item.part_one}}
    </p>
    <p>
      {{props.item.part_two}}
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