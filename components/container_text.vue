<template>
  <div style="display: block">
    <p>
      {{props.item}}
    </p>
  </div>
</template>

<script setup>

  const props = defineProps({
    item:{
      type: String,
      required: true
    }
  })

</script>

<style scoped>

</style>