<template>
    <v-layer :config="{scaleX:scalexprop,scaleY:scaleyprop,x:xprop,y:yprop}">
      <v-group :config="{x:flipCx,scaleX:flipCscale,name:'D1',draggable:dragprop }" ref="mygroup">
      <oscieznica :grubosc="gruboscc" :height="height" :width="width" :back="backbool"></oscieznica>
      <skrzydlo :left="gruboscc" :top="gruboscc" :height="height-gruboscc" :width="width-2*gruboscc"  ></skrzydlo>
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
    dragprop:{type:Boolean,default:false}
  },
  data(){
    return{
      grubosc:20,
      gruboscback:10,
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
      console.log('exportuje na event');
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
    flipCx:function(){
      if(this.selectedwidok=='Z'){
        return 0
      }else {
        return this.width
      }
    },
    flipCscale:function(){
      if(this.selectedwidok=='Z'){
        return 1
      }else {
        return -1
      }
    }

  }

}
</script>

<style lang="css" scoped>
</style>
