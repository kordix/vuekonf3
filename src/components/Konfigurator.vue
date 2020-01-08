<template>
<div class="">

  <transition-group name="test" tag="div">
    <div :key="'seria'" id="Seria" class="" v-show="activeTab=='Seria'">
      <p class="scrollerheading">Seria</p>
      <scroller :scrollerdata="seria.dane" :attr="'seria'" :folder="'serie'" :col="'5'"></scroller>
    </div>

  <div id="Model" :key="'a'" class="" v-show="activeTab=='Model'" >
    <p :key="'b'"  class="scrollerheading">Kolekcja</p>
    <scroller :key="'c'"   :attr="'kolekcja'" :noimage="true" :scrollerdata="kolekcja.dane" :col="'5'" ></scroller>
    <p :key="'d'"  class="scrollerheading">Wzór</p>
    <scroller :key="'e'"    :attr="'wzor'" :folder="'wzory'" :scrollerdata="wzorFilter" :col="'4'" :scroll="true"></scroller>
      <transition-group :key="'asdf'" name="test" tag="div">
        <p  :key="'ff'" class="scrollerheading" v-if="showInox">Strona ramki inox</p>
        <scroller :key="'h'"   :attr="'inoxstrona'"  :scrollerdata="inoxstrona.dane" :noimage="true" v-if="showInox"></scroller>
        <p  :key="'ii'" class="scrollerheading" v-if="showInox"> Kolor ramki inox</p>
        <scroller :key="'k'" :attr="'inoxkolor'" :scrollerdata="ramkakolorfilter" :folder="'koloryakc'"  v-if="showInox"></scroller>
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
    <scroller :attr="'szyba'" :folder="'Przeszklenia'" :scrollerdata="szybyFilter" ></scroller>
  </div>
  <div id="Okucia" :key="'p'"  class="" v-show="activeTab=='Okucia'">
    <p class="scrollerheading">Kierunek otwierania:</p>
    <scroller :attr="'kierunek'"  :scrollerdata="kierunek.dane" :folder="'kotw'" :col="'5'" ></scroller>
    <p class="scrollerheading">Sposób otwierania:</p>
    <scroller :attr="'sposobotw'" :scrollerdata="sposobotw.dane" :folder="'sposobyotw'" :col="'5'" ></scroller>
    <p class="scrollerheading">Klamka </p>
    <scroller :attr="'klamka'" :scrollerdata="klamkifilter" :folder="'Klamki'" :col="'5'" :scroll="true"></scroller>
    <p class="scrollerheading">Kolor klamki:</p>
    <scroller :attr="'klamkakolor'" :scrollerdata="klamkakolorfilter" :folder="'koloryakc'" :col="'5'" ></scroller>
  </div>
  <div :key="'akc'" class="" v-show="activeTab=='Akcesoria'">
    <p class="scrollerheading" >Samozamykacz</p>
     <scroller :scrollerdata="samozamykacz.dane" :attr="'samozamykacz'" :folder="'samozamykacz'"></scroller>
     <transition-group :key="'asdff'" name="test" tag="div" >
       <p :key="'a'" class="scrollerheading" v-if="product.samozamykacz != '-'">Kolor samozamykacza</p>
       <scroller :key="'b'" :scrollerdata="samkolorfilter" :folder="'koloryakc'" v-if="product.samozamykacz != '-'" :attr="'samozamykaczKolor'"></scroller>
     </transition-group>

     <p class="scrollerheading " >Wizjer</p>
     <scroller :scrollerdata="wizjer.dane" :attr="'wizjer'" :folder="'wizjer'"></scroller>
     <p class="scrollerheading" :noimage="true" >Elektrozaczep</p>
     <scroller :scrollerdata="elektrozaczep.dane" :attr="'elektrozaczep'" :noimage="true"></scroller>
     <p class="scrollerheading">Kopniak</p>
     <scroller :scrollerdata="kopniak.dane"  :attr="'kopniak'" :folder="'kopniak'" :noimage="true"></scroller>
     <p class="scrollerheading">System automatyki</p>
     <scroller :scrollerdata="automatyka.dane"  :attr="'automatyka'" :folder="'automatyka'"></scroller>
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
   wariant:'wariant'




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
   samkolorfilter:'samkolorfilter',
   cena:'cena'

 })

 },




}
</script>

<style scoped>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active{
  transition: all 1s;
}

.list-leave-active {
  transition: all 0s;
}

.list-enter /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

.list-leave-to{
  opacity: 0;
  transform: translateY(30px);
}

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
