<template>
  <div class="checkbox">
      <input type="checkbox"
             value="one"
             id="one"
             v-model="props.item.show"
             @click="isTabClick(props.item.id)"
             checked>
    <span></span>
    <label for="one"></label>
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

  .checkbox {

    input[type=checkbox] {
      position: absolute;
      z-index: -1;
      opacity: 0;
      display: block;
      width: 0;
      height: 0;

    }

    span{

      &::before{
        cursor: pointer;
        display: inline-block;
        content: "";
        width: 25px;
        height: 25px;
        border: 2px solid black;
      }

    }

    input[type=checkbox]:checked +span::before{
      background-color: black;
    }

  }



</style>