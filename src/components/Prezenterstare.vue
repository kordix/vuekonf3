<template>
  <!-- <div class="" style="positon:relative" id="prezent"> -->
    <v-stage >
      <drzwi :width="100" :height="200"></drzwi>
    </v-stage>


  <!-- <div class="" style="z-index:-1000">
    <div class="" style="width:800px;height:600px;z-index:-1000;background:url('https://assets.archon.pl/images/products/mfe42422780eaf/widok-1-projekt-dom-w-balsamowcach-2-1575514654__289.jpg')"></div>
  </div> -->

  </div>


</template>

<script>
import drzwi from '@/components/Drzwi.vue';

export default {
  components:{
    drzwi
  },
  data(){
    return {
      backgrounds:[
        {url:'',x:0,y:0,scalex:0.25,scaley:0.25},
        {url:'/images/backgrounds/1.jpg',x:330,y:312,scalex:0.1,scaley:0.1},
        {url:'/images/backgrounds/2.jpg  ',x:159,y:325,scalex:0.1,scaley:0.1},
        {url:'/images/backgrounds/3.jpg  ',x:432,y:215,scalex:0.1,scaley:0.1}
      ],
      activebackground:{},

    }

  },
  mounted(){

  }

}
</script>

<style>
</style>
