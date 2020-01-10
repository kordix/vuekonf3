<template>
    <v-layer :config="{scaleX:scalexprop,scaleY:scaleyprop,x:xprop,y:yprop}">
      <v-group :config="{x:flipCx,scaleX:flipCscale,name:'D1',draggable:dragprop }" ref="mygroup">
      <oscieznica :grubosc="gruboscc" :height="height" :width="width" :back="backbool"></oscieznica>
      <skrzydlo :left="gruboscc" :top="gruboscc" :height="height-gruboscc" :width="width-2*gruboscc"  :back="backbool" ></skrzydlo>
      </v-group>
      <v-transformer ref="transformer" />

    </v-layer>
</template>

<script>
import {mapState} from 'vuex';
import {mapGetters} from 'vuex';
import oscieznica from '@/components/Oscieznicakonva.vue';
import skrzydlo from '@/components/Skrzydlo.vue';
import { EventBus } from '@/event-bus.js';



export default {
  components:{
    oscieznica,skrzydlo
  },
  props:{
    width:Number,
    height:Number,
    scalexprop:{type:Number,default:1},
    scaleyprop:{type:Number,default:1},
    xprop:{type:Number,default:0},
    yprop:{type:Number,default:0},
    dragprop:{type:Boolean,default:false},
    turnable:{type:Boolean,default:true}
  },
  data(){
    return{
      // height:600,
      // width:300,
      back:false,
      xdata:0,
      exportImageObj:null
    }
  },
  watch:{
    "product.wzor":function(){
      this.fadeIn();
    },
    "product.szyba":function(){
      this.fadeIn();
    }
  },
  methods:{
    handleExports(){
      let self = this;
      self.$store.state.selectedwidok='Z';
      setTimeout(function(){
        self.exportImage();
      },1000);
      setTimeout(function(){
        self.$store.state.selectedwidok='W';
      },2000);
      setTimeout(function(){
        self.exportImageInner();
      },3000);
    },

        exportImage(){
      let self = this;
      var imageObj = new Image();
      this.$refs.mygroup._konvaNode.toImage({callback:function(img){
        self.$store.state.exportImageObj = img;
      }} );
      // document.getElementById("output").appendChild(imageObj);
    },
    exportImageInner(){
      let self = this;
      var imageObj = new Image();
        self.$refs.mygroup._konvaNode.toImage({callback:function(img){
          self.$store.state.exportImageObjInner = img;
        }} );

      // document.getElementById("output").appendChild(imageObj);
    },

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
    EventBus.$on('exportImages', payload => {
      this.handleExports();
    // this.exportImage();
    // this.exportImageInner();

    });


  },
  computed:{
    ...mapState({
      selectedwidok:'selectedwidok',
      product:'product'
    }),
    gruboscc:function(){
      if(this.backbool==true){
        return 15
      }else{
        return 20
      }
    },
    backbool:function(){
        if(this.selectedwidokc=='Z' && this.product.kierunek=='Lz'){return true}
        else if(this.selectedwidokc=='Z' && this.product.kierunek=='Lw'){return false}
        else if(this.selectedwidokc=='Z' && this.product.kierunek=='Pz'){return true}
        else if(this.selectedwidokc=='Z' && this.product.kierunek=='Pw'){return false}
        else if(this.selectedwidokc=='W' && this.product.kierunek=='Lz'){return false}
        else if(this.selectedwidokc=='W' && this.product.kierunek=='Lw'){return true}
        else if(this.selectedwidokc=='W' && this.product.kierunek=='Pz'){return false}
        else if(this.selectedwidokc=='W' && this.product.kierunek=='Pw'){return true}
    },
    flipCx:function(){
      if(this.flipCscale===1){
        return 0
      }else {
        return this.width
      }
    },
    flipCscale:function(){
      if(this.selectedwidokc=='Z' && this.product.kierunek=='Lw'){return -1}
      else if(this.selectedwidokc=='Z' && this.product.kierunek=='Lz'){return 1}
      else if(this.selectedwidokc=='Z' && this.product.kierunek=='Pz'){return -1}
      else if(this.selectedwidokc=='Z' && this.product.kierunek=='Pw'){return 1}
      else if(this.selectedwidokc=='W' && this.product.kierunek=='Lz'){return -1}
      else if(this.selectedwidokc=='W' && this.product.kierunek=='Lw'){return 1}
      else if(this.selectedwidokc=='W' && this.product.kierunek=='Pz'){return 1}
      else if(this.selectedwidokc=='W' && this.product.kierunek=='Pw'){return -1}
    },
    selectedwidokc:function(){
      if(this.turnable==false){
        return 'Z'
      }else{
        return this.selectedwidok
      }
    }

  }

}
</script>

<style lang="css" scoped>
</style>
