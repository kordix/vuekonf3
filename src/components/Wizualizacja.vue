<template>
  <div class="" id="wizcon" style="transition:1s;opacity:0;position:relative">

  <v-stage :config="{width:width,height:height}">
    <drzwi :width="width" :height="height"></drzwi>

  </v-stage>
</div>


</template>

<script>
import {mapState} from 'vuex';
import {mapGetters} from 'vuex';
import drzwi from '@/components/Drzwi.vue'
// import oscieznica from '@/components/Oscieznicakonva.vue';
// import skrzydlo from '@/components/Skrzydlo.vue';


export default {
  components:{
    drzwi
  },
  data(){
    return{
      grubosc:20,
      gruboscback:10,
      height:600,
      width:300,
      back:false
    }
  },
  watch:{
    "product.wzor":function(){
      this.fadeIn();
    },
    "product.szyba":function(){
      this.fadeIn();
    },
    "selectedwidok":function(){
      this.fadeIn();
    }
  },
  methods:{
    fadeIn(){
      let self = this;
      document.getElementById("wizcon").style.transition = '0s' ;
      document.getElementById("wizcon").style.opacity = 0 ;
      setTimeout(function(){
        document.getElementById("wizcon").style.transition = '0.3s' ;
      },200);

      setTimeout(function(){
        document.getElementById("wizcon").style.opacity = 1 ;
      },400);
    }
  },
  mounted(){
    this.fadeIn();

  },
  computed:{
    ...mapState({
      selectedwidok:'selectedwidok',
      product:'product'
    }),
    gruboscc:function(){
      if(this.selectedwidok=='Z'){
        return 20
      }else {
        return 15
      }
    },
    backbool:function(){
        if(this.selectedwidok=='Z'){
          return false
        }else {
          return true
        }
    },
    flipC:function(){
      if(this.selectedwidok=='Z'){
        return {scaleX:1,x:0,draggable:true}
      }else {
        return {scaleX:-1,x:this.width,draggable:true}
      }
    }

  }

}
</script>

<style lang="css" scoped>
</style>
