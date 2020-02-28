<template>
    <v-layer :config="{scaleX:scalexprop,scaleY:scaleyprop,x:xprop,y:yprop}">
      <v-group id="all" :config="{x:grpx,scaleX:grpsx,name:'D1',draggable:dragprop }" ref="mygroup">
        <v-group :config="{x:0,y:0,height:wysokoscng}" v-if="drawng">
          <v-rect :config="{height:wysokoscng,width:szerokoscng}"></v-rect>
          <naswietle :grubosc="20" :height="wysokoscng" :width="szerokoscng" :back="backbool"></naswietle>
        </v-group>  
        <v-group :config="{x:0,y:ynb1}" v-if="drawnb1">
          <v-rect :config="{height:wysokoscdrzwi,fill:'blue',width:szerokoscnb1}"></v-rect>
          <naswietle :grubosc="20" :height="wysokoscdrzwi" :width="szerokoscnb1" :back="backbool"></naswietle>
        </v-group>  
        <v-group id="drzwi"  :config="{x:xdrzwi,y:ydrzwi}">
          <oscieznica :grubosc="gruboscc" :height="wysokoscdrzwi" :width="szerokoscdrzwi" :back="backbool"></oscieznica>
          <skrzydlo :left="gruboscc" :top="gruboscc" :height="wysokoscdrzwi-gruboscc" :width="szerokoscdrzwi-2*gruboscc"  :back="backbool" ></skrzydlo>
        </v-group>
        <v-group :config="{x:szerokoscdrzwi,y:ynb2,x:xnb2 }" v-if="drawnb2">
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
      // szerokoscnb1:200,
      szerokoscnb2:100,
      // wysokoscng:150,
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
     this.handleMirror();
   },
   "product.kierunek":function(){
     this.handleMirror();
   },
   "product.typ":function(){
    this.handleZestaw();
    },
    "product.wysokoscng":function(){
    this.handleZestaw();
    },
    "product.szerokoscnb1":function(){
    this.handleZestaw();
    }



  },
  methods:{
    handleMirror(){
      if((this.product.kierunek == 'Lz' || this.product.kierunek == 'Pw') && this.selectedwidokc=='Z'){
       this.grpsx = 1;this.grpx=0;
     };
     if((this.product.kierunek == 'Lw' || this.product.kierunek == 'Pz') && this.selectedwidokc=='Z'){
       this.grpsx = -1;this.grpx=this.szerokoscall;
     };
     if((this.product.kierunek == 'Lz' || this.product.kierunek == 'Pw') && this.selectedwidokc=='W'){
       this.grpsx = -1;this.grpx=this.szerokoscall;
     };
     if((this.product.kierunek == 'Lw' || this.product.kierunek == 'Pz') && this.selectedwidokc=='W'){
       this.grpsx = 1;this.grpx=0;
     };
    },
    
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
    handleZestaw:function(){
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
        this.szerokoscall=this.szerokoscdrzwi+this.szerokoscnb1+this.szerokoscnb2;
        this.xdrzwi=this.szerokoscnb1;this.ydrzwi=0;this.ynb1=0;this.ynb2=0;this.drawnb1=true;this.drawng=false;this.drawnb2=true;
        this.szerokoscng=this.szerokoscdrzwi+this.szerokoscnb1+this.szerokoscnb2;
         this.xnb2=this.szerokoscnb1+this.szerokoscdrzwi;
      }
      if(this.product.typ == 'D1N04'){ //nb górne
        this.szerokoscall=this.szerokoscdrzwi;
        this.drawnb1=false;this.drawnb2=false;
        this.xdrzwi=0;this.ydrzwi=this.wysokoscng;this.drawng=true;this.szerokoscng=this.szerokoscdrzwi;
      }
        if(this.product.typ == 'D1N05'){ //nb górne i boczne lewe
        this.szerokoscall=this.szerokoscdrzwi+this.szerokoscnb1+this.szerokoscnb2;
        this.xdrzwi=this.szerokoscnb1;this.xnb2=this.szerokoscnb1+this.szerokoscdrzwi;this.ydrzwi=this.wysokoscng;this.ynb1=this.wysokoscng;this.ynb2=this.wysokoscng;this.drawnb1=true;this.drawng=true;this.drawnb2=false;
        this.szerokoscng=this.szerokoscdrzwi+this.szerokoscnb1;
      }

       if(this.product.typ == 'D1N06'){ //nb górne i boczne prawe
        this.szerokoscall=this.szerokoscdrzwi+this.szerokoscnb2;
        this.xdrzwi=0;this.xnb2=this.szerokoscdrzwi;this.ydrzwi=this.wysokoscng;this.ynb1=this.wysokoscng;this.ynb2=this.wysokoscng;this.drawnb1=false;this.drawng=true;this.drawnb2=true;
        this.szerokoscng=this.szerokoscdrzwi+this.szerokoscnb2;
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
      // wysokoscng:'product.wysokoscng'
    }),
    szerokoscnb1(){
      let wys = parseInt(this.$store.state.product.szerokoscnb1);
      return wys *0.4;
    },
    wysokoscng(){
      let wys = parseInt(this.$store.state.product.wysokoscng);
      if(wys == 100){return 80}
      else if (wys==200){return 110}
      else if (wys==300){return 140}
      else if (wys==400){return 170}
      else if (wys==500){return 200}
      else if (wys==600){return 230}
      else if (wys==700){return 260}
      else if (wys==800){return 290}

      else return wys*0.4
      //return parseInt(this.$store.state.product.wysokoscng);
    },
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
