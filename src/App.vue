<template>
  <div id="app">
    <tabs></tabs>
        <div class="ceny" style="display:flex"> 
          <p style="font-size:18px;cursor:default" :class="{sumborder:priceAll != basicprice }" >Suma:  <b> {{priceAll}} zł</b></p>
          <p style="font-size:14px" v-if="priceAll != basicprice">Cena bazowa: <span style="font-weight:bold">{{parseInt(basicprice)}} zł</span></p>
          <p v-if="priceokucia>0" style="font-size:14px">Cena okuć: <span style="font-weight:bold">{{parseInt(priceokucia)}} zł</span></p>
          <p v-if="samozamykaczCena>0" style="font-size:14px">Samozamykacz: <span style="font-weight:bold">{{parseInt(samozamykaczCena)}} zł</span></p>
          <!-- <p v-if="wizjerCena>0" style="font-size:14px">Wizjer: <span style="font-weight:bold">{{parseInt(wizjerCena)}} zł</span></p> -->
          <p v-if="ezaczepCena>0" style="font-size:14px">Elektrozaczep<span v-if="$store.state.product.seria == 41">(x3)</span>: <span style="font-weight:bold">{{parseInt(ezaczepCena)}} zł</span></p>
          <p v-if="kopniakCena>0" style="font-size:14px">Kopniak: <span style="font-weight:bold">{{parseInt(kopniakCena)}} zł</span></p>
          <p v-if="product.wariant == 'M' && mixkolorCena > 0 " style="font-size:14px">Mixkolor: <b>{{mixkolorCena}} zł </b></p>
          <p v-if="product.wariant == 'B' && bikolorCena > 0" style="font-size:14px">Bikolor: <span style="font-weight:bold">{{bikolorCena}} zł</span></p> 
          <p v-if="product.automatyka == 'B'" style="font-size:14px">System biometryczny:  <span style="font-weight:bold">3300 zł</span> </p>
          <p v-if="product.automatyka == 'K'" style="font-size:14px">System kodowy:  <span style="font-weight:bold">3050 zł</span> </p>
          <p v-if="product.automatyka == 'Z'" style="font-size:14px">System zbliżeniowy:  <span style="font-weight:bold">3050 zł</span> </p>
        </div>
    <div class="row">
    <div class="col-md-8">
      <konfigurator></konfigurator>
    </div>
      <div class="col-md-4">
      <!--<p id="dummy" style="height:200px"></p>-->
    
        <wizualizacja style="z-index:10"></wizualizacja>
        <switcher></switcher>
        <podsumowanie></podsumowanie>       
      </div>
  </div>
  </div>
</template>

<script>
import Tabs from '@/components/Tabs.vue';
import Konfigurator from '@/components/Konfigurator.vue';
import Wizualizacja from '@/components/Wizualizacja.vue';
import switcher from '@/components/Switch.vue';
import Prezenter from '@/components/Prezenter.vue';
import Podsumowanie from '@/components/Podsumowanie.vue';

import {mapState} from 'vuex';
import { mapGetters} from 'vuex';


export default {
  components:{
    Konfigurator,Tabs,Wizualizacja,switcher,Prezenter,Podsumowanie
  },
  watch:{
    product:{
      deep:true,
      handler:function(val){
        this.getBasicPrice();
        this.getCenaOkucia();
        if(this.$store.state.product.wariant=='S'){
          this.$store.state.product.kolor2 = this.$store.state.product.kolor;
        }
      }
    },
  },
  mounted(){
    this.getBasicPrice();
    this.getCenaPochwyt();

  },
  data(){
    return {
      basicprice:0,
      priceokucia:0
    }
  },
  methods:{
    getBasicPrice(){
      let column = this.seriac;
      if (this.product.szyba != '00'){column += 's'}

      this.basicprice =  this.cenytablica.find((el)=>el.model == this.product.wzor)[column];

      if(this.product.inoxstrona == "1" || this.product.inoxstrona == "2" ){
        this.basicprice -= 200;
      }

      if(this.product.seria=='21'){
        this.basicprice = parseInt(this.basicprice)+680;
      }

        if(this.product.seria=='31'){
        this.basicprice = parseInt(this.basicprice)+750;
      }

    },
    getCenaOkucia(){
      this.product.sposobotw=='KK' ||  this.product.sposobotw=='KG' ? this.getCenaKlamka() : this.getCenaPochwyt();
    },
    getCenaKlamka(){
      let model = this.product.klamka+'_'+this.product.klamkakolor;
      let column = this.seriac;
      let Manitoba_10304 = {"20":70,"30":60,"41":70};
      let Magnus_10304 = {"20":40,"30":60,"41":70};
      let PrestigeZ = {"20":200,"30":180,"41":200};
      let Prestige = {"20":160,"30":140,"41":160};
      let PrestigeZ_10304 = {"20":300,"30":280,"41":300};
      let MagnusZ = {"20":200,"30":180,"41":200};
      let PrestigeZG = {"20":255,"30":9999,"41":9999};
      // let MagnusG = {"20":,"30":,"41":};
      // let ManitobaG = {"20":,"30":,"41":};
      this.priceokucia=0;
      if(model == 'Manitoba_10304') this.priceokucia = Manitoba_10304[column];
      if(model == 'Magnus_10304') this.priceokucia = 70;
      if(this.product.klamka == 'PrestigeZ') this.priceokucia = 200;
      if(this.product.klamka == 'Prestige') this.priceokucia = 160;
      if(model == 'PrestigeZ_10304') this.priceokucia=300;
      if(this.product.klamka=='MagnusZ') this.priceokucia=200;
      if(this.product.klamka=='PrestigeZG') this.priceokucia=255;
      if(this.product.klamka=='MagnusG') this.priceokucia=70;
      if(this.product.klamka=='ManitobaG') this.priceokucia=70;


    },
    getCenaPochwyt(){
      if(this.product.sposobotw=='KK') return;
      if(this.activeKlamka.typ =='KK') return;
      let kolorlocal = '';
      if(this.product.klamkakolor=='10301') kolorlocal = 'INOX';
      if(this.product.klamkakolor=='10304') kolorlocal = 'BLACK';

      let model = this.product.klamka+'_'+kolorlocal;
      let column = this.product.sposobotw;

      this.priceokucia =  this.cenyPochwytTablica.find((el)=>el.model == model)[column];

    }

  },
  computed:{
    ...mapState({
      product:'product',
      cenytablica:'cenytablica',
      cenyPochwytTablica:'cenyPochwytTablica',
      mixkolorlista:'mixkolorlista',
      product:'product'
    }),
    ...mapGetters({
      samozamykaczCena:'samozamykaczCena',
      wizjerCena:'wizjerCena',
      ezaczepCena:'ezaczepCena',
      kopniakCena:'kopniakCena',
      activeKlamka:'activeKlamka'
    }),
    seriac(){
      if(this.product.seria=='21') return '20'
      if(this.product.seria=='31') return '30'
      return this.product.seria
    },
    bikolorCena(){
      if(this.product.wariant != 'B'){
        return 0
      }

      if(this.product.kolor == this.product.kolor2){
        return 0
      }
      
      if (this.seriac=='20'){
         return 280 
      }else{
        return 380    
      }
    },
    mixkolorCena(){
      if(this.product.wariant != 'M'){
        return 0
      }

      if(this.product.wariant == 'M'){
        return 200
      }
    },
    cenaAutomatyka(){
      if(this.product.automatyka=='B'){return 3300}
      else if(this.product.automatyka=='K'){return 3050} 
      else if(this.product.automatyka=='Z'){return 3050} 
      else return 0


    },
    priceAll(){
      return parseInt(this.basicprice) + parseInt(this.ezaczepCena) + parseInt(this.priceokucia) + parseInt(this.samozamykaczCena)+parseInt(this.kopniakCena)+parseInt(this.bikolorCena)+parseInt(this.mixkolorCena)+parseInt(this.cenaAutomatyka) ;

    }
  }
}

</script>

<style>
:root {
  --mygreen: #8fcc25;
  --mygreenhov: rgb(0,200,50);
  --mygray:#c2c2c2;
}

.ceny > p {
  margin-bottom:0px;
  cursor:pointer;
  margin-right:5px;
}

.sumborder{
border-right:1px var(--mygray) solid;width:120px
}

.page-id-1277 .minimized{
  display:none !important
}

.page-id-1277 .container{
  max-width: 1140px;
}

@media (max-width:600px){
  .tabscontainer{
    background:white !important;
  }
}


</style>
