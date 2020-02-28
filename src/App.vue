<template>
  <div id="app">
    <tabs></tabs>
        <div class="ceny" style="display:flex;flex-wrap:wrap"> 
          <p style="font-size:18px;cursor:default" :class="{sumborder:priceAll != basicPrice}" >Suma:  <b> {{priceAll}} zł</b></p>
          <p style="font-size:14px" v-if="priceAll != basicPrice">Cena bazowa: <span style="font-weight:bold">{{parseInt(basicPrice)}} zł</span></p>
          <p v-if="cenaOkucia>0" style="font-size:14px">Cena okuć: <span style="font-weight:bold">{{parseInt(cenaOkucia)}} zł</span></p>
          <p v-if="samozamykaczCena>0" style="font-size:14px">Samozamykacz: <span style="font-weight:bold">{{parseInt(samozamykaczCena)}} zł</span></p>
          <!-- <p v-if="wizjerCena>0" style="font-size:14px">Wizjer: <span style="font-weight:bold">{{parseInt(wizjerCena)}} zł</span></p> -->
          <p v-if="ezaczepCena>0" style="font-size:14px">Elektrozaczep<span v-if="$store.state.product.seria == 41">(x3)</span>: <span style="font-weight:bold">{{parseInt(ezaczepCena)}} zł</span></p>
          <p v-if="kopniakCena>0" style="font-size:14px">Kopniak: <span style="font-weight:bold">{{parseInt(kopniakCena)}} zł</span></p>
          <p v-if="product.wariant == 'M' && mixkolorCena > 0 " style="font-size:14px">Mixkolor: <b>{{mixkolorCena}} zł </b></p>
          <p v-if="product.wariant == 'B' && bikolorCena > 0" style="font-size:14px">Bikolor: <span style="font-weight:bold">{{bikolorCena}} zł</span></p> 
          <p v-if="product.automatyka == 'B'" style="font-size:14px">System biometryczny:  <span style="font-weight:bold">3300 zł</span> </p>
          <p v-if="product.automatyka == 'K'" style="font-size:14px">System kodowy:  <span style="font-weight:bold">3050 zł</span> </p>
          <p v-if="product.automatyka == 'Z'" style="font-size:14px">System zbliżeniowy:  <span style="font-weight:bold">3050 zł</span> </p>
          <p v-if="CenaNaswietlaG>0" style="font-size:14px" >Naświetle górne: <span style="font-weight:bold">{{CenaNaswietlaG}} zł</span> </p>
          <p v-if="CenaNaswietlaNB1>0" style="font-size:14px" >Naświetle boczne: <span style="font-weight:bold">{{CenaNaswietlaNB1}} zł</span> </p>
        </div>
    <div class="row" style="display:flex;flex-wrap:wrap">
      <div class="col-md-8">
        <konfigurator></konfigurator>
      </div>
      <div class="col-md-4">
      <!--<p id="dummy" style="height:200px"></p>-->
    
        <wizualizacja style="z-index:10"></wizualizacja>
        <switcher></switcher>
        <podsumowanie></podsumowanie>
         <div class="ceny" style=""> 
           <!-- <p>{{$store.getters.kopniakCena2}}</p> -->
          <p style="font-size:18px;cursor:default" :class="{sumborder2:priceAll != basicPrice }" >Suma:  <b> {{priceAll}} zł</b></p>
          <p style="font-size:14px" v-if="priceAll != basicPrice">Cena bazowa: <span style="font-weight:bold">{{parseInt(basicPrice)}} zł</span></p>
          <p v-if="cenaOkucia>0" style="font-size:14px">Cena okuć: <span style="font-weight:bold">{{parseInt(cenaOkucia)}} zł</span></p>
          <p v-if="samozamykaczCena>0" style="font-size:14px">Samozamykacz: <span style="font-weight:bold">{{parseInt(samozamykaczCena)}} zł</span></p>
          <!-- <p v-if="wizjerCena>0" style="font-size:14px">Wizjer: <span style="font-weight:bold">{{parseInt(wizjerCena)}} zł</span></p> -->
          <p v-if="ezaczepCena>0" style="font-size:14px">Elektrozaczep<span v-if="$store.state.product.seria == 41">(x3)</span>: <span style="font-weight:bold">{{parseInt(ezaczepCena)}} zł</span></p>
          <p v-if="kopniakCena>0" style="font-size:14px">Kopniak: <span style="font-weight:bold">{{parseInt(kopniakCena)}} zł</span></p>
          <p v-if="product.wariant == 'M' && mixkolorCena > 0 " style="font-size:14px">Mixkolor: <b>{{mixkolorCena}} zł </b></p>
          <p v-if="product.wariant == 'B' && bikolorCena > 0" style="font-size:14px">Bikolor: <span style="font-weight:bold">{{bikolorCena}} zł</span></p> 
          <p v-if="product.automatyka == 'B'" style="font-size:14px">System biometryczny:  <span style="font-weight:bold">3300 zł</span> </p>
          <p v-if="product.automatyka == 'K'" style="font-size:14px">System kodowy:  <span style="font-weight:bold">3050 zł</span> </p>
          <p v-if="product.automatyka == 'Z'" style="font-size:14px">System zbliżeniowy:  <span style="font-weight:bold">3050 zł</span> </p>
          <p v-if="CenaNaswietlaG>0" style="font-size:14px" >Naświetle górne: <span style="font-weight:bold">{{CenaNaswietlaG}} zł</span> </p>
          <p v-if="CenaNaswietlaNB1>0" style="font-size:14px" >Naświetle boczne: <span style="font-weight:bold">{{CenaNaswietlaNB1}} zł</span> </p>

        </div>       
      </div>
  </div>
  <modal></modal>
  </div>
</template>

<script>
import Tabs from '@/components/Tabs.vue';
import Konfigurator from '@/components/Konfigurator.vue';
import Wizualizacja from '@/components/Wizualizacja.vue';
import switcher from '@/components/Switch.vue';
import Prezenter from '@/components/Prezenter.vue';
import Podsumowanie from '@/components/Podsumowanie.vue';
import Modal from '@/components/Modal.vue';

import {mapState} from 'vuex';
import { mapGetters} from 'vuex';


export default {
  components:{
    Konfigurator,Tabs,Wizualizacja,switcher,Prezenter,Podsumowanie,Modal
  },
  watch:{
    product:{
      deep:true,
      handler:function(val){
        // this.getBasicPrice();
        // this.getCenaOkucia();
        if(this.$store.state.product.wariant=='S'){
          this.$store.state.product.kolor2 = this.$store.state.product.kolor;
        }
      }
    },
  },
  mounted(){
    // this.getBasicPrice();
    // this.getCenaPochwyt();


  },
  data(){
    return {
      // basicprice:0,
      // priceokucia:0
    }
  },
  methods:{
 
  },
  computed:{
    test(){
      return this.$store.state.ceny.count
    },
    ...mapState({
      product:'product',
      cenytablica:'cenytablica',
      cenyPochwytTablica:'cenyPochwytTablica',
      mixkolorlista:'mixkolorlista',
      product:'product'
  
    }),
    ...mapGetters({
      samozamykaczCena:'SamozamykaczCena',
      //wizjerCena:'wizjerCena',
      ezaczepCena:'EzaczepCena',
      kopniakCena:'KopniakCena',
      activeKlamka:'activeKlamka',
      cenaKlamka:'CenaKlamka',
      priceAll:'PriceAll',
      basicPrice:'BasicPrice',
      cenaOkucia:'CenaOkucia',
      bikolorCena:'BikolorCena',
      mixkolorCena:'MixkolorCena',
      CenaNaswietlaG:'CenaNaswietlaG',
      CenaNaswietlaNB1:'CenaNaswietlaNB1',
      wysokosc:'wysokosc'
    }),
    seriac(){
      if(this.product.seria=='21') return '20'
      if(this.product.seria=='31') return '30'
      return this.product.seria
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

.sumborder2{
border-bottom:1px var(--mygray) solid;width:120px
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
