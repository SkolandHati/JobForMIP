<template>
  <div class="page" style="background-color: gainsboro;">

    <header  class="head">
      <div class="head-container" style="display: flex">
        <h1 class="name">Invictus</h1>
        <h3 class="author">By William Ernest Henley</h3>
      </div>
    </header>

    <main>
      <section class="container" v-if="textInvictus.invictus">

        <div style="display: flex;">

          <div v-for="(item, index) in textInvictus.invictus"
               :key="index" style="display: flex; margin-right: 50px">
            <buttons :item="item" @isSwitches="toggles"></buttons>
          </div>

          <div style="display: grid; width: 250px; gap: 30px">
            <div v-for="(item, index) in textInvictus.invictus"
                 :key="index">
              <container_text
                  v-if="item.show"
                  :item="item.text">
              </container_text>
            </div>
          </div>


        </div>

      </section>
    </main>

  </div>
</template>

<script setup>

  import buttons from "~/components/buttons.vue"
  import container_text from "~/components/container_text.vue"
  import {useStore} from "~/store/store.js";

  let textInvictus = useStore()

  function toggles(id) {
    let copyItem =  textInvictus.invictus.find(item => item.id === id)
    copyItem.show = !copyItem.show
  }

</script>

<style scoped lang="scss">



</style>