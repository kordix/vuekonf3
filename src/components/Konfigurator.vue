<template>
<div class="">

  <transition-group name="test" tag="div">
    <div :key="'seria'" id="Seria" class="" v-show="activeTab=='Seria'">
      <p class="scrollerheading">Seria</p>
      <scroller :scrollerdata="seria.dane" :attr="'seria'" :folder="'serie'" :col="'5'"></scroller>
     
        <p class="scrollerheading">Typ</p>
        <scroller :scrollerdata="typ.dane" :attr="'typ'" :folder="'Einheiten'" :col="'5'" :ext="'png'"></scroller>
      <div v-if="product.typ.indexOf('N')>0">  
        <p class="scrollerheading">Kod rozmiaru</p>
        <scroller :scrollerdata="kodyrozmiaru.dane" :attr="'kodrozmiaru'" :folder="'kodyrozmiaru'" :col="'5'" :ext="'png'"></scroller>
        <p class="scrollerheading">Wysokość naświetla</p>
        <scroller :scrollerdata="wysokosci.dane" :attr="'wysokoscng'" :noimage="true" :col="'5'"></scroller>
      </div>
      <!-- {{szerokosc}}x{{wysokosc}} -->


    </div>

  <div id="Model" :key="'a'" class="" v-show="activeTab=='Model'" >
    <p :key="'b'"  class="scrollerheading">Kolekcja</p>
    <scroller :key="'c'"   :attr="'kolekcja'" :noimage="true" :scrollerdata="kolekcja.dane" :col="'5'" ></scroller>
    <p :key="'d'"  class="scrollerheading">Wzór</p>
    <scroller :key="'e'"    :attr="'wzor'" :folder="'wzory'" :scrollerdata="wzorFilter" :col="'4'" :scroll="true"></scroller>
      <transition-group :key="'asdf'" name="test" tag="div">
        <p  :key="'ff'" class="scrollerheading" v-show="showInox">Strona ramki inox</p>
        <scroller :key="'h'"   :attr="'inoxstrona'"  :scrollerdata="inoxstrona.dane" :noimage="true" v-show="showInox"></scroller>
        <p  :key="'ii'" class="scrollerheading" v-show="showInox"> Kolor ramki inox</p>
        <scroller :key="'k'" :attr="'inoxkolor'" :scrollerdata="ramkakolorfilter" :folder="'koloryakc'"  v-show="showInox"></scroller>
      </transition-group name="test" tag="div">

  </div>
  <div id="Kolor" :key="'l'" class="" v-if="activeTab=='Kolor'">
    <p class="scrollerheading">Wariant koloru:</p>
    <scroller :attr="'wariant'" :noimage="true" :scrollerdata="wariantFilter"></scroller>
    <p  class="scrollerheading" v-if="product.wariant == 'B'">Kolor zewnątrz</p>
      <p class="scrollerheading"  v-if="product.wariant == 'M'">Kolor główny</p>
      <p class="scrollerheading" v-if="product.wariant == 'S'">Kolor zewnętrzny/wewnętrzny</p>
    <scroller :attr="'kolor'" :folder="'okleiny'" :scrollerdata="kolorFilter" :col="'5'" ></scroller>

    <transition-group :key="'asdf'" name="test" tag="div">
      <p :key="'1'" style="font-weight:bold" v-if="product.wariant == 'B'">Kolor wewnątrz</p>
      <p :key="'2'" style="font-weight:bold" v-if="product.wariant == 'M'">Kolor dodatkowy</p>
      <scroller :key="'3'" :attr="'kolor2'" :folder="'okleiny'" :scrollerdata="kolorFilter" :col="'5'" v-if="product.wariant == 'B' || product.wariant=='M'" ></scroller>
    </transition-group name="test" tag="div">

  </div>

  <div id="Szyba" :key="'o'" class="" v-show="activeTab=='Szyba'">
    <p class="scrollerheading">Przeszklenie:</p>
    <scroller :attr="'szyba'" :folder="'Przeszklenia'" :scrollerdata="szybyFilter" :col="'4'"></scroller>
  </div>
  <div id="Okucia" :key="'p'"  class="" v-show="activeTab=='Okucia'">
    <p class="scrollerheading">Kierunek otwierania:</p>
    <scroller :attr="'kierunek'"  :scrollerdata="kierunek.dane" :folder="'kotw'" :col="'5'" ></scroller>
    <p class="scrollerheading">Sposób otwierania:</p>
    <scroller :attr="'sposobotw'" :scrollerdata="sposobotw.dane" :folder="'sposobyotw'" :col="'5'" ></scroller>
    <p class="scrollerheading"><span v-if="product.sposobotw=='KP' || product.sposobotw=='PP' ">Pochwyt</span><span v-else>Klamka</span> </p>
    <scroller :attr="'klamka'" :scrollerdata="klamkifilter" :folder="'Klamki'" :col="'5'" :scroll="true" :addmargins="false"></scroller>
    <p class="scrollerheading">Kolor klamki:</p>
    <scroller :attr="'klamkakolor'" :scrollerdata="klamkakolorfilter" :folder="'koloryakc'" :col="'5'" ></scroller>
  </div>
  <div :key="'akc'" class="" v-show="activeTab=='Akcesoria'">
    <p class="scrollerheading" >Samozamykacz</p>
     <scroller :scrollerdata="samozamykaczFilter" :attr="'samozamykacz'" :folder="'samozamykacz'" :col="'4'"></scroller>
     <transition-group :key="'asdff'" name="test" tag="div" >
       <p :key="'a'" class="scrollerheading" v-if="product.samozamykacz != '-'">Kolor samozamykacza</p>
       <scroller :key="'b'" :scrollerdata="samkolorfilter" :folder="'koloryakc'" v-if="product.samozamykacz != '-'" :attr="'samozamykaczKolor'" :col="'4'"></scroller>
     </transition-group>

     <!-- <p class="scrollerheading " >Wizjer</p> -->
     <!-- <scroller :scrollerdata="wizjer.dane" :attr="'wizjer'" :folder="'wizjer'" :col="'4'"></scroller> -->
     <p class="scrollerheading" :noimage="true" >Elektrozaczep</p>
     <scroller :scrollerdata="elektrozaczep.dane" :attr="'elektrozaczep'" :noimage="true" :col="'4'"></scroller>
     <p class="scrollerheading">Kopniak</p>
     <scroller :scrollerdata="kopniak.dane"  :attr="'kopniak'" :folder="'kopniak'" :noimage="true" :col="'4'"></scroller>
     <p class="scrollerheading" v-if="$store.state.product.seria=='41'">System automatyki</p>
     <scroller :scrollerdata="automatyka.dane"  :attr="'automatyka'" :folder="'automatyka'" :col="'4'" v-if="$store.state.product.seria=='41'"></scroller>
  </div>


  <div id="Podsumowanie" :key="'r'" class="" v-show="activeTab=='Podsumowanie'">
    <div style="margin-bottom:10px">
      <customimagebutton></customimagebutton>
      <myselect style="margin-right:1em"></myselect>
      <pdfbutton style="margin-right:1em"></pdfbutton>
    </div>


    <prezenter></prezenter>
  </div>

</transition-group>


<navbuttons></navbuttons>


</div>
</template>

<script>
import Scroller from '@/components/Scroller.vue';
import Prezenter from '@/components/Prezenter.vue';
import Myselect from '@/components/Myselect.vue';
import Navbuttons from '@/components/Navbuttons.vue';
import Pdfbutton from '@/components/Pdfbutton.vue';
import Customimagebutton from '@/components/customimagebutton.vue';




import { mapState } from 'vuex';
import { mapGetters} from 'vuex';


export default {
  components:{Scroller,Prezenter,Myselect,Navbuttons,Pdfbutton,Customimagebutton},
  watch:{
    "product.wzor":function(){
      this.$store.state.product.szyba = this.szybyFilter[0].artnr;
      this.$store.state.product.wariant='S';
      if(this.$store.getters.activeModel.typ=='INOX'){
        this.$store.state.product.inoxstrona = this.$store.state.inoxstrona.dane[0].artnr;
        this.$store.state.product.inoxkolor = this.$store.getters.ramkakolorfilter[0].artnr;
      }
    },
    "product.samozamykacz":function(val){
      this.$store.state.product.samozamykaczKolor = this.samkolorfilter[0].artnr;
      console.log(val);
      if(val=='-'){
        this.$store.state.product.samozamykaczKolor = '';
      }
    },
    "product.klamka":function(){
      this.$store.state.product.klamkakolor = this.klamkakolorfilter[0].artnr;
    },
    "product.inoxstrona":function(newval,val){

      if(newval == '0' || newval==''){
        return
      }else {
        this.$store.state.product.szyba = '00';
      }
    }
  },
  data(){
    return {
      elems:[1,2,3,4]
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
   inoxstrona:'inoxstrona',
   seria:'seria',
   samozamykacz:'samozamykacz',
   wizjer:'wizjer',
   kopniak:'kopniak',
   elektrozaczep:'elektrozaczep',
   automatyka:'automatyka',
   wariant:'wariant',
   typ:'typ',
   kodyrozmiaru:'kodyrozmiaru',
   wysokosci:'wysokosci'
 }),
 ...mapGetters({
   wariantFilter:'wariantFilter',
   kolorFilter:'kolorFilter',
   szybyFilter:'szybyFilter',
   klamkifilter:'klamkifilter',
   wzorFilter:'wzorFilter',
   activeSotw:'activeSotw',
   activeKlamka:'activeKlamka',
   showInox:'showInox',
   ramkakolorfilter:'ramkakolorfilter',
   klamkakolorfilter:'klamkakolorfilter',
   samozamykaczFilter:'samozamykaczFilter',
   samkolorfilter:'samkolorfilter',
   cena:'cena',
   szerokosc:'szerokosc',
   wysokosc:'wysokosc'

 })

 },




}
</script>

<style scoped>
.test-enter  {
  opacity: 0;
  transition:1s;
}

.test-enter-to{
  opacity:1;
  transition:1s;
}

.test-leave-to{
  opacity:0;
  transition:0s;
}



.scrollerheading{
  font-weight:bold;
}

</style>
