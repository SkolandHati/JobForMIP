<template>
  <div class="checkbox">
    <input type="checkbox"
           id="one"
           value="one"
           v-model="props.item.show"
           @click="isTabClick(props.item.id)"
           checked>
  </div>
</template>

<script setup>

const props = defineProps({
  item:{
    type: Object,
    required: true
  }
})

const emits = defineEmits(['isSwitches'])

function isTabClick(id){
  emits('isSwitches', id)
}

</script>

<style scoped>

</style>