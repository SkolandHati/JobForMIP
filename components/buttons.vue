<template>
  <div class="checkbox">
      <input type="checkbox"
             value="one"
             :id="props.item.id"
             v-model="props.item.show"
             @click="isTabClick(props.item.id)"
             checked>
      <label :for="props.item.id"></label>
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

  .checkbox{

    input[type=checkbox] {
      position: absolute;
      z-index: -1;
      width: 0;
      height: 0;
      opacity: 0;

      &:checked + label {
        background-color: #000000;
      }
    }

    input[type=checkbox] + label{
      display: inline-flex;
      align-items: center;
      user-select: none;
      color: #1B1B1B;
    }

    input + label::before{
      cursor: pointer;
      content: '';
      display: inline-block;
      width: 24px;
      height: 24px;
      flex-shrink: 0;
      flex-grow: 0;
      border: 2px solid #000000;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 50% 50%;
    }
  }

</style>