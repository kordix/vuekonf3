<template>
    <v-layer :config="{scaleX:scalexprop,scaleY:scaleyprop,x:xprop,y:yprop}">
      <v-group id="all" :config="{x:grpx,scaleX:grpsx,name:'D1',draggable:dragprop }" ref="mygroup">
        <v-group id="drzwi"  >
          <oscieznica :grubosc="gruboscc" :height="wysokoscdrzwi" :width="szerokoscdrzwi" :back="backbool"></oscieznica>
          <skrzydlo :left="gruboscc" :top="gruboscc" :height="wysokoscdrzwi-gruboscc" :width="szerokoscdrzwi-2*gruboscc"  :back="backbool" ></skrzydlo>
        </v-group>
        <v-group :config="{x:szerokoscdrzwi,y:ynb2}" v-if="drawnb2">
          <v-rect :config="{height:wysokoscdrzwi,fill:'blue',width:szerokoscnb2}"></v-rect>
          <naswietle :grubosc="20" :height="wysokoscdrzwi" :width="szerokoscnb2" :back="backbool"></naswietle>
        </v-group>
      </v-group>
      <v-transformer ref="transformer" />

    </v-layer>
</template>

<script>
import {mapState} from 'vuex';
import {mapGetters} from 'vuex';
import oscieznica from '@/components/Oscieznicakonva.vue';
import naswietle from '@/components/Naswietle.vue';

import skrzydlo from '@/components/Skrzydlo.vue';
import { EventBus } from '@/event-bus.js';



export default {
  components:{
    oscieznica,skrzydlo,naswietle
  },
  props:{
    // width:Number,
    // height:Number,
    scalexprop:{type:Number,default:1},
    scaleyprop:{type:Number,default:1},
    xprop:{type:Number,default:0},
    yprop:{type:Number,default:0},
    dragprop:{type:Boolean,default:false},
    turnable:{type:Boolean,default:true}
  },
  data(){
    return{
      grpx:0,grpsx:1,
      height:600,
      width:300,
      back:false,
      xdata:0,
      exportImageObj:null,
      drawnaswietle:true,
      szerokoscdrzwi:300,
      szerokoscall:300,
      wysokoscdrzwi:600,
      szerokoscnb1:200,
      szerokoscnb2:200,
      wysokoscng:500,
      szerokoscng:100,
      xdrzwi:0,ydrzwi:0,
      xnb1:0,ynb1:0,
      xnb2:0,ynb2:0,
      xng:0,yng:0,
      drawnb2:false,drawnb1:false,drawng:false
    }
  },
  watch:{
    "product.wzor":function(){
      this.fadeIn();
    },
    "product.szyba":function(){
      this.fadeIn();
    },
    selectedwidok:function(){
     if((this.product.kierunek == 'Lz' || this.product.kierunek == 'Pw') && this.selectedwidok=='Z'){
       this.grpsx = 1;this.grpx=0;
     };
     if((this.product.kierunek == 'Lw' || this.product.kierunek == 'Pz') && this.selectedwidok=='Z'){
       this.grpsx = -1;this.grpx=this.szerokoscall;
     };
     if((this.product.kierunek == 'Lz' || this.product.kierunek == 'Pw') && this.selectedwidok=='W'){
       this.grpsx = -1;this.grpx=this.szerokoscall;
     };
     if((this.product.kierunek == 'Lw' || this.product.kierunek == 'Pz') && this.selectedwidok=='W'){
       this.grpsx = 1;this.grpx=0;
     };
   },
   "product.typ":function(){
    this.handleZestaw();
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
    },
    handleZestaw(){
      this.drawnb1=false;this.drawnb2=false;this.drawng=false;this.ynb1=0;this.ynb2=0;this.ydrzwi=0;
      if(this.product.typ == 'D1'){ //drzwi
        this.xdrzwi=0;this.drawnb1=false;this.drawnb2=false;this.szerokoscall=this.szerokoscdrzwi;
      }
      if(this.product.typ == 'D1N01'){ //nb po lewej
        this.szerokoscall=this.szerokoscdrzwi+this.szerokoscnb1;
        this.xdrzwi=this.szerokoscnb1;this.drawnb1=true;
      }
      if(this.product.typ == 'D1N02'){ //nb po prawej
        this.szerokoscall=this.szerokoscdrzwi+this.szerokoscnb2;
        this.xdrzwi=0;this.xnb2=this.szerokoscdrzwi;this.drawnb2=true;
      }
      if(this.product.typ == 'D1N03'){ //oba nb
        this.xdrzwi=this.szerokoscnb1;
        this.xnb2=this.szerokoscnb1+this.szerokoscdrzwi;
        this.drawnb2=true;this.drawnb1=true;
      }
      if(this.product.typ == 'D1N04'){ //nb górne
        this.szerokoscall=this.szerokoscdrzwi;
        this.drawnb1=false;this.drawnb2=false;
        this.xdrzwi=0;this.ydrzwi=this.wysokoscng;this.drawng=true;this.szerokoscng=this.szerokoscdrzwi;
      }
      if(this.product.typ == 'D1N07'){ //wszystkie
        this.szerokoscall=this.szerokoscdrzwi+this.szerokoscnb1+this.szerokoscnb2;
        this.xdrzwi=this.szerokoscnb1;this.xnb2=this.szerokoscnb1+this.szerokoscdrzwi;this.ydrzwi=this.wysokoscng;this.ynb1=this.wysokoscng;this.ynb2=this.wysokoscng;this.drawnb1=true;this.drawng=true;this.drawnb2=true;
        this.szerokoscng=this.szerokoscdrzwi+this.szerokoscnb1+this.szerokoscnb2;
      }
    }
  },
  mounted(){
    this.fadeIn();
    this.handleZestaw();
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
