<template>
  <div id="app">
    <tabs></tabs>
    <div class="row">
    <div class="col-md-8">
      <konfigurator></konfigurator>
    </div>
      <div class="col-md-4">
      <!--<p id="dummy" style="height:200px"></p>-->
        <wizualizacja style="z-index:10"></wizualizacja>
        <switcher></switcher>
        <podsumowanie></podsumowanie>       

        <div class="ceny"> 
          <p style="font-size:18px">Cena bazowa: <span style="font-weight:bold">{{parseInt(basicprice)}} zł</span></p>
          <p v-if="priceokucia>0" style="font-size:18px">Cena okuć: <span style="font-weight:bold">{{parseInt(priceokucia)}} zł</span></p>
          <p v-if="samozamykaczCena>0" style="font-size:18px">Samozamykacz: <span style="font-weight:bold">{{parseInt(samozamykaczCena)}} zł</span></p>
          <p v-if="wizjerCena>0" style="font-size:18px">Wizjer: <span style="font-weight:bold">{{parseInt(wizjerCena)}} zł</span></p>
          <p v-if="ezaczepCena>0" style="font-size:18px">Elektrozaczep<span v-if="$store.state.product.seria == 41">(x3)</span>: <span style="font-weight:bold">{{parseInt(ezaczepCena)}} zł</span></p>
          <p v-if="kopniakCena>0" style="font-size:18px">Kopniak: <span style="font-weight:bold">{{parseInt(kopniakCena)}} zł</span></p>
        </div>
      
       

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

      if(this.product.seria=='31' || this.product.seria=='21'){
        this.basicprice = parseInt(this.basicprice)+700;
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
      if(this.product.artnr=='MagnusZ') this.priceokucia=200;
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
}

</style>
