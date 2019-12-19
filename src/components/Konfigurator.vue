<template>
<div class="">

  <transition-group name="list" tag="div">
    <div id="Seria" class="" v-show="activeTab=='Seria'">
      <scroller></scroller>
    </div>

  <div id="Model" :key="'a'" class="" v-show="activeTab=='Model'" >
    <p :key="'b'"  class="scrollerheading">Kolekcja</p>
    <scroller :key="'c'"   :attr="'kolekcja'" :noimage="true" :scrollerdata="kolekcja.dane" :col="'5'" ></scroller>
    <p :key="'d'"  class="scrollerheading">Wzór</p>
    <scroller :key="'e'"    :attr="'wzor'" :folder="'wzory'" :scrollerdata="wzorFilter" :scroll="true"></scroller>
    <div :key="'f'"  class="" v-if="showInox">
      <p  class="scrollerheading">Strona ramki inox</p>
      <scroller :key="'h'"   :attr="'inoxstrona'"  :scrollerdata="inoxstrona.dane" :noimage="true" ></scroller>
    </div>
    <div :key="'i'"  class="" v-if="showInox">
      <p  class="scrollerheading">Kolor ramki inox</p>
      <scroller :key="'k'" :attr="'inoxkolor'" :scrollerdata="ramkakolorfilter" :folder="'koloryakc'" ></scroller>
    </div>
  </div>
  <div id="Kolor" :key="'l'" class="" v-if="activeTab=='Kolor'">
    <p class="scrollerheading">Kolor:</p>
    <scroller :attr="'kolor'" :folder="'okleiny'" :scrollerdata="kolorFilter" :col="'5'" ></scroller>
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
    <scroller :attr="'klamka'" :scrollerdata="klamkifilter" :folder="'Klamki'" :col="'5'" ></scroller>
    <p class="scrollerheading">Kolor klamki:</p>
    <scroller :attr="'klamkakolor'" :scrollerdata="klamkakolorfilter" :folder="'koloryakc'" :col="'5'" ></scroller>
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


.scrollerheading{
  font-weight:bold;
}

</style>
