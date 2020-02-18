<template>
  <div class="" id="wizcon" style="transition:1s;opacity:1;position:relative">
    <div :style="{height:extraheight+'px'}" style="transition:1s">

    </div>
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
      // grubosc:20,
      // gruboscback:10,
      height:600,
      width:500,
      back:false,
      extraheight:0
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
    },
    handleScroll(){
      if(window.innerWidth < 900){
        return 
      }
      // if (window.scrollY > 100 ){document.getElementById("masthead").style.display="none";} 
      

      

      if (window.scrollY > 400 ){this.extraheight = 300;} 
      else if (window.scrollY >8000 ){this.extraheight = 600}else {this.extraheight=0;document.getElementById("masthead").style.display="block"}
    }
  },
  created(){
      window.addEventListener('scroll', this.handleScroll);
    if(document.getElementById('content')){
      document.getElementById('content').style.marginTop = '10px';
      document.getElementById('content').style.paddingTop = '10px';
    }

    

  },
  mounted(){
    // this.fadeIn();

  },
  computed:{
    ...mapState({
      selectedwidok:'selectedwidok',
      product:'product'
    })


  }

}
</script>

<style lang="css" scoped>
</style>
