<template>
  <v-group :config="{x:left,y:top}">
      <v-image id="okleina" :config="{width:width,height:height,image:okleinaimage}"></v-image>
      <v-image id="mixokleina" v-if="mixbool" :config="{width:mixcCorrectWidth,height:height,x:mixcCorrectX,image:okleinaimage2,crop:{width:mixc.cropwidth,height:1000}}"></v-image>
      <v-image id="tloczenie" :config="{width:width,height:height,image:tloczenieimage}"></v-image>
      <v-image id="szyba" :config="{width:width,height:height,image:szybaimage}"></v-image>
      <v-image id="klamka" :config="{width:width,height:height,image:klamkaimage}"></v-image>
      <v-rect :config="{width:width,height:left-12,fill:'#999999',y:height-left+12}" ></v-rect>
  </v-group>
</template>

<script>
import {mapState} from 'vuex';
import {mapGetters} from 'vuex';

export default {
  props:['left','top','width','height','back'],
  data(){
    return{
      okleinaimage:null,
      okleinaimage2:null,
      klamkaimage:null,
      szybaimage:null,
      tloczenieimage:null,
      tloczenieimage2:null,
      mixdanetab:
        [
        {model:'F1A',dane:{x:182,width:78,correctx:5,cropwidth:100, correctwidth:5}},
        {model:'F1B',dane:{x:160,width:48,correctx:5,cropwidth:100,correctwidth:0}},
        {model:'F1C',dane:{x:105,width:45,correctx:5,cropwidth:100,correctwidth:0}},
        {model:'F1D',dane:{x:52,width:48,correctx:5,cropwidth:100,correctwidth:0}},
        {model:'F2A',dane:{x:182,width:78,correctx:5,cropwidth:200,correctwidth:4}},
        {model:'F2B',dane:{x:182,width:78,correctx:5,cropwidth:200,correctwidth:4}},
        {model:'F4A',dane:{x:121,width:18,correctx:5,cropwidth:20,correctwidth:0}},
        {model:'F4B',dane:{x:178,width:18,correctx:5,cropwidth:20,correctwidth:0}},
        {model:'F4C',dane:{x:52,width:18,correctx:2,cropwidth:20,correctwidth:0}},
        {model:'F4D',dane:{x:178,width:18,correctx:5,cropwidth:20,correctwidth:0}},
        {model:'F4E',dane:{x:178,width:18,correctx:5,cropwidth:20,correctwidth:0}},
        {model:'F6A',dane:{x:110,width:40,correctx:5,cropwidth:100,correctwidth:0}},
        {model:'F6B',dane:{x:165,width:42,correctx:7,cropwidth:100,correctwidth:0}},
        {model:'F6C',dane:{x:52,width:40,correctx:5,cropwidth:100,correctwidth:0}},
        {model:'F6D',dane:{x:165,width:42,correctx:7,cropwidth:100,correctwidth:0}},
        {model:'F6E',dane:{x:165,width:42,correctx:7,cropwidth:100,correctwidth:0}}
      ]
    }
  },
  watch:{
    "product.kolor":function(){
      this.drawOkleina();
    },
    "product.kolor2":function(){
      this.drawMix();
      this.drawOkleina();

    },

    "product.klamka":function(){
      this.drawKlamka();
    },
    "product.szyba":function(){
      this.drawSzyba();
      this.drawTloczenie();
    },
    "product.wzor":function(){
      this.drawTloczenie();
      this.drawSzyba();
    },
    "product.inoxkolor":function(){
      this.drawTloczenie()
    },
    "product.klamkakolor":function(){
      this.drawKlamka();
    },
    "product.inoxstrona":function(){
      this.drawTloczenie();
      this.drawSzyba();
    },
    selectedwidok:function(){
      this.drawTloczenie();
      this.drawOkleina();
    }
  },
  methods:{
    drawOkleina:function(){
      const imageObj = new Image();
      imageObj.src = `/images/okleiny/${this.kolorc}.jpg`;
      imageObj.onload = () => {
        this.okleinaimage = imageObj;
      };
    },
    drawMix:function(){
      const imageObj = new Image();
      imageObj.src = `/images/okleiny/${this.product.kolor2}.jpg`;
      imageObj.onload = () => {
        this.okleinaimage2 = imageObj;
      };
    },
    drawKlamka(){
      const imageObj = new Image();
      imageObj.src = '/images/klamki/'+this.product.klamka+'_'+this.product.klamkakolor+'.png';
      imageObj.onload = () => {
        this.klamkaimage = imageObj;
      };
    },
    drawSzyba(){
      this.szybaimage = null;
      const imageObj = new Image();
      imageObj.src = '/images/szyby/'+this.odpszyb+'_'+this.szybac+'.png';
      imageObj.onload = () => {
        this.szybaimage = imageObj;
      };
    },
    drawTloczenie:function(){
      this.tloczenieimage = null;
      const imageObj = new Image();

      let file = this.product.wzor;

       if (this.product.inoxkolor=='10304'){
       file = this.product.wzor+'_black';
       }

       if(typeof(this.tloczeniepcv) !='undefined'){
       if (this.tloczeniepcv==true){
       file = this.product.wzor+'_00';
       }
     }


       if(this.inoxpelne==true){
         file = this.product.wzor+'_PELNE';
       }

       console.log(file);

      imageObj.src = '/images/tloczenia/'+file+'.png';
      imageObj.onload = () => {
        this.tloczenieimage = imageObj;
      };
    }

  },
  computed:{
    ...mapState({
      product:'product',
      selectedwidok:'selectedwidok',
      activeSotw:'activeSotw',
      mixkolorlista:'mixkolorlista'
    }),
    ...mapGetters({
      odpszyb:'odpszyb',
      inoxpelne:'inoxpelne',
      activeModel:'activeModel',
      kolorc:'kolorc'
    }),
    mixc(){
     return (this.mixdanetab.find((el)=>el.model == this.product.wzor)) ? this.mixdanetab.find((el)=>el.model == this.product.wzor).dane : {}
    },
    mixcCorrectX(){
      return this.back == true ? this.mixc.x + this.mixc.correctx : this.mixc.x
    },
    mixcCorrectWidth(){
      return this.back == true ? this.mixc.width + this.mixc.correctwidth : this.mixc.width
    },
    mixbool(){
      if(this.product.wzor){
      return (this.mixkolorlista.indexOf(this.product.wzor)>= 0 && this.product.wariant == 'M') ? true : false;
      }else{return false}
    },
    szybac(){
       if(typeof(this.product.szyba) !='undefined'){
         if (this.product.szyba == '19') {
           return this.product.szyba.replace('19','06')
         }else {
           return this.product.szyba
         }
       }
     },
     klamkac(){
      if(this.selectedwidok=='W' && this.activesotw.artnr =='KG'){
        return this.product.klamka.artnr.slice(0,-1)
      } else if (this.selectedwidok=='W' && this.activesotw.artnr =='KP' && this.activeklamka.artnr){
        return "SlimSolo"
      }else{
        return this.activeklamka.artnr
      }
    },
    tloczeniepcv(){
       return (this.activeModel.typ=='PCV' && this.product.szyba=='00') ? true : false ;
    },

  },
  created() {
    this.drawOkleina();
    this.drawKlamka();
    this.drawSzyba();
    this.drawMix();
    this.drawTloczenie();
  }


}
</script>

<style lang="css" scoped>
</style>
