<template>
<div class="">
  <div class="" v-show="activeTab=='Model'">
    <p class="scrollerheading">Kolekcja</p>
    <scroller   :attr="'kolekcja'" :noimage="true" :scrollerdata="kolekcja.dane" :col="'5'" ></scroller>
    <p class="scrollerheading">Wzór</p>
    <scroller   :attr="'wzor'" :folder="'wzory'" :scrollerdata="wzorFilter" :scroll="true"></scroller>
    <div class="" v-if="showInox">
      <p class="scrollerheading">Strona ramki inox</p>
      <scroller  :attr="'inoxstrona'"  :scrollerdata="inoxstrona.dane" :noimage="true" ></scroller>
    </div>
    <div class="" v-if="showInox">
      <p class="scrollerheading">Kolor ramki inox</p>
      <scroller :attr="'inoxkolor'" :scrollerdata="ramkakolorfilter" :folder="'koloryakc'" ></scroller>
    </div>
  </div>
  <div class="" v-show="activeTab=='Kolor'">
    <p class="scrollerheading">Kolor:</p>
    <scroller  :attr="'kolor'" :folder="'okleiny'" :scrollerdata="kolorFilter" :col="'5'" ></scroller>
  </div>
  <div class="" v-show="activeTab=='Szyba'">
    <p class="scrollerheading">Przeszklenie:</p>
    <scroller :attr="'szyba'" :folder="'Przeszklenia'" :scrollerdata="szybyFilter" ></scroller>
  </div>
  <div class="" v-show="activeTab=='Okucia'">
    <p class="scrollerheading">Kierunek otwierania:</p>
    <scroller :attr="'kierunek'"  :scrollerdata="kierunek.dane" :folder="'kotw'" :col="'5'" ></scroller>
    <p class="scrollerheading">Sposób otwierania:</p>
    <scroller :attr="'sposobotw'" :scrollerdata="sposobotw.dane" :folder="'sposobyotw'" :col="'5'" ></scroller>
    <p class="scrollerheading">Klamka </p>
    <scroller :attr="'klamka'" :scrollerdata="klamkifilter" :folder="'Klamki'" :col="'5'" ></scroller>
    <p class="scrollerheading">Kolor klamki:</p>
    <scroller :attr="'klamkakolor'" :scrollerdata="klamkakolorfilter" :folder="'koloryakc'" :col="'5'" ></scroller>
  </div>
  <div class="" v-show="activeTab=='Podsumowanie'">

    <!-- <prezenter></prezenter> -->

 </div>




  <!-- <scroller :key="'wkl'" :scrollerdata="wkladka.dane" :folder="'wkladka'"></scroller> -->
  <!-- <scroller :key="'aut'" :scrollerdata="automatyka.dane" :folder="'automatyka'"></scroller> -->
  <!-- <scroller :key="'sam'" :scrollerdata="samozamykaczfilter" :folder="'samozamykacz'" ></scroller> -->
  <!-- <scroller :key="'samkolor'" :scrollerdata="samkolorfilter" :folder="'koloryakc'" v-if="activesam.artnr && activesam.artnr != '-'"></scroller> -->
  <!-- <scroller :key="'wiz'" :scrollerdata="wizjerfilter" :folder="'wizjer'" ></scroller> -->
  <!-- <scroller :key="'kop'" :scrollerdata="kopniak.dane" :folder="'kopniak'" :noimage="true" ></scroller> -->
  <!-- <scroller :key="'ele'" :scrollerdata="elektrozaczep.dane" :folder="'elektrozaczep'" :noimage="true" ></scroller> -->



  <!-- {{wzor.dane}} -->

  <!-- <scroller :key="'model'" :scrollerdata="wzorFilter2" :folder="wzor.folder" v-show="activetab.bez=='Model'"  @clear="myset('wariant','S')"></scroller> -->
</div>
</template>

<script>
import Scroller from '@/components/Scroller.vue';
import Prezenter from '@/components/Prezenter.vue';


import { mapState } from 'vuex';
import { mapGetters} from 'vuex';


export default {
  components:{Scroller,Prezenter},
  watch:{
    "product.wzor":function(){
      this.$store.state.product.szyba = this.szybyFilter[0].artnr;
    },
    "product.klamka":function(){
      this.$store.state.product.klamkakolor = this.klamkakolorfilter[0].artnr;
    },
    "product.inoxstrona":function(newval,val){
      console.log(val);
      console.log(newval);
      if(newval == '0' || newval==''){
        console.log('dziala');
        return
      }else {
        this.$store.state.product.szyba = '00';
        console.log(this.$store.state.product.szyba);
      }
    }
  },
  data(){
    return {

    }
  },
  mounted(){

  },
  computed: {...mapState({
    product:'product',
   wzor: 'wzor',
   kolor:'kolor',
   szyba:'szyba',
   activeTab:'activeTab',
   kolekcja:'kolekcja',
   kierunek:'kierunek',
   sposobotw:'sposobotw',
   klamka:'klamka',
   klamkakolor:'klamkakolor',
   inoxkolor:'inoxkolor',
   inoxstrona:'inoxstrona'

 }),
 ...mapGetters({
   kolorFilter:'kolorFilter',
   szybyFilter:'szybyFilter',
   klamkifilter:'klamkifilter',
   wzorFilter:'wzorFilter',
   activeSotw:'activeSotw',
   activeKlamka:'activeKlamka',
   showInox:'showInox',
   ramkakolorfilter:'ramkakolorfilter',
   klamkakolorfilter:'klamkakolorfilter',
   cena:'cena'

 })

 },




}
</script>

<style scoped>
.scrollerheading{
  font-weight:bold;
}

</style>
