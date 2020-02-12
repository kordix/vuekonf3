<template>
<div>
     <p  id="seriap" @click="handle('Seria')"><span>Seria:</span> {{activeSeria.bez}} </p>
     <p id="wzorp" @click="handle('Model')"><span>Model:</span> {{activeModel.bez}}</p>
     <p id="kolorp" @click="handle('Kolor')"><span>Kolor:</span> {{activeKolor.bez}}</p>
     <p  id="szybap" @click="handle('Szyba')"><span>Szyba:</span> {{activeSzyba.bez}}</p>
     <p id="kierunekp" @click="handle('Okucia')"><span>Kierunek otw.:</span> {{activeKierunek.bez}}</p>
     <p  id="klamkap" @click="handle('Okucia')"><span>Okucie:</span> {{activeKlamka.bez}}</p>
     <p id="klamkakolorp" @click="handle('Okucia')"><span>Kolor okuć:</span> {{activeKlamkaKolor.bez}}</p>
     <p  id="samozamykaczp" @click="handle('Akcesoria')" v-if="product.samozamykacz != '-'"><span>Samozamykacz:</span> {{activeSamozamykacz.bez}}</p>
</div>
</template>

<script>
import {mapState} from 'vuex';
import {mapGetters} from 'vuex';
import { EventBus } from '@/event-bus.js';


export default {
  data(){
    return {

    }
  },
  methods:{
    handle(arg){
      this.$store.dispatch('setActiveTab',arg);
    },
    reset(elem){
      console.log(elem);
      this.fadeIn(elem+'p');
    },
        fadeIn(elem){
      let self = this;
      if(document.getElementById(elem)== null){
        return
      }

      document.getElementById(elem).style.transition = '0s' ;
      document.getElementById(elem).style.opacity = 0 ;
      setTimeout(function(){
        document.getElementById(elem).style.transition = '0.3s' ;
      },200);

      setTimeout(function(){
        document.getElementById(elem).style.opacity = 1 ;
      },400);
    }
  },
  mounted(){
EventBus.$on('scroller', payload => {
    this.reset(payload);
    });
  },
  computed:{
    ...mapState({
      product:'product'
    }),
    ...mapGetters({
      activeModel:'activeModel',
      activeKolor:'activeKolor',
      activeSzyba:'activeSzyba',
      activeSotw:'activeSotw',
      activeKlamka:'activeKlamka',
      activeKlamkaKolor:'activeKlamkaKolor',
      activeKierunek:'activeKierunek',
      activeSamozamykacz:'activeSamozamykacz',
      activeSeria:'activeSeria'
    })
  }
}


</script>

<style scoped>
p {
  transition:.3s;
  margin-bottom:0px;
  cursor:pointer;
}

p:hover{
  opacity:0.6;
}

p > span{
  font-weight:bold

}


</style>
