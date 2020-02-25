<template>
  <v-group>
   
    <v-image id="okleina" :config="{image:okleinaimage,width:width,height:height }"></v-image>
    <v-image id="lewe" :config="{image:nl,y:grubosc,width:grubosc,height:height-2*grubosc,crop:{width:110,height:280,x:0,y:0}}"></v-image>
    <v-image id="prawe" :config="{image:nl,x:width,height:height-2*grubosc,y:grubosc,width:grubosc,scaleX:-1,crop:{width:110,height:280,x:0,y:0}}"></v-image>
    <v-image id="gora" :config="{image:nt,x:grubosc,height:grubosc,width:width-2*grubosc,crop:{width:272,height:110,x:0,y:0}}"></v-image>
    <v-image id="dol" :config="{image:nt,x:grubosc,height:grubosc,scaleY:-1,y:height,width:width-2*grubosc,crop:{width:272,height:110,x:0,y:0}}"></v-image>
    <v-image id="lewegora" :config="{image:nlt,width:grubosc,height:grubosc}"></v-image>
    <v-image id="lewedol" :config="{image:nlt,scaleY:-1,y:height, width:grubosc,height:grubosc}"></v-image>
    <v-image id="prawegora" :config="{image:nlt,x:width,height:grubosc,width:grubosc,scaleX:-1,crop:{width:101,height:101,x:0,y:0}}"></v-image>
    <v-image id="prawedol" :config="{image:nlt,x:width,height:grubosc,width:grubosc,scaleX:-1,scaleY:-1,y:height,crop:{width:101,height:101,x:0,y:0}}"></v-image>
    <v-rect id="szyba" :config="{x:grubosc,y:grubosc,width:width-2*grubosc,height:height-2*grubosc,fill:'#cceeff'}"></v-rect>
     <!-- <v-rect v-for="elem in paski" :config="{x:grubosc,y:elem,height:5,width:width-2*grubosc,fill:'#000099',opacity:0.3}"></v-rect> -->



  </v-group>
</template>

<script>
import {mapState} from 'vuex';
import {mapGetters} from 'vuex';



export default {
  props:['width','height','grubosc'],
  watch:{

  },
  data(){
    return {
    paski:[100,200]  ,
    nl:null,
    nlt:null,
    nt:null,
    okleinaimage:null
    }
  },
  watch:{
    "product.kolor":function(){
      this.drawOkleina();
    },
    "product.kolor2":function(){
      this.drawOkleina();
    },
    selectedwidok:function(){
      this.drawOkleina();
    }

  },
  methods:{
    drawOscieznicaParts:function(){
     let self=this;
     let nlt = new Image();
     let nl = new Image();
     let nt = new Image();
     let b='';

     nlt.src = `/images/naswietle/${b}nlt.png`;
     nl.src = `/images/naswietle/${b}nl.png`;
     nt.src = `/images/naswietle/${b}nt.png`;

     nlt.onload=function(){
       self.nlt = nlt;
       self.nl = nl;
       self.nt = nt;
       console.log(nt.width);
       if(nt.width == 0 || nl.width == 0 || nlt.width == 0 ){
         self.drawOscieznicaParts()
       }
     }

   },
   drawOkleina:function(){
     const okleinaObj = new Image();
     okleinaObj.src = `/images/okleiny/${this.kolorc}.jpg`;
     okleinaObj.onload = () => {
       this.okleinaimage = okleinaObj;
     };
   }
 },
 created(){
   this.drawOscieznicaParts();
   this.drawOkleina();
 },
 computed:{
   ...mapState({
     product:'product',
     selectedwidok:'selectedwidok'
   }),
   ...mapGetters({
     kolorc:'kolorc'
   })
 }


}
</script>

<style lang="css" scoped>
</style>
