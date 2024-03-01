<template>
  <div class="page">

    <header  class="head">
      <div class="head-container">
        <h1 class="name">Invictus</h1>
<!--        <h3 class="author">By William Ernest Henley</h3>-->
      </div>
    </header>

    <main>
      <section class="container" v-if="textInvictus.invictus">

        <div class="content">

          <div class="content__checkbox">
            <div class="checkbox" v-for="(item, index) in textInvictus.invictus"
                 :key="index">
              <buttons :item="item" @isSwitches="toggles"></buttons>
            </div>
          </div>

          <div class="content__text">
            <div class="text" v-for="(item, index) in textInvictus.invictus"
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

  @import "assets/saas/mixin";

 .page{
   display: grid;
   grid-template-rows: 1fr;
   padding: 0 250px 0 250px;
   gap: 20px;

   .head, .content{
     display: flex;
   }

   .head{
     justify-content: center;

     &-container{
       position: relative;
       display: flex;
       gap: 25px;

       .name{
         position: relative;

         &::after{
           position: absolute;
           content: "By William Ernest Henley";
           width: max-content;
           margin-left: 50px;
           font-size: 22px;
           top: 20px;
         }
       }

     }
   }

   .content{
     @include grid(12, minmax(60px, 80px));
     grid-column: 1/-1;
     justify-content: center;

     &__checkbox{
       align-items: flex-start;
       display: flex;
       grid-column: 1/5;

       .checkbox{
         width: 100%;
         display: flex;
       }
     }

     &__text{
       grid-column: 5/10;
       display: grid;
       gap: 30px;
     }
   }

    @include mobile{
      padding: 0 15px 0 15px;

      .content{
        display: block;
      }
    }
 }

</style>