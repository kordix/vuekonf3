<template>
<transition name="fade" tag="div">
  <div class="" style="display:flex;margin-top:10px" v-if="show" @event="">
    <button type="button" name="button" class="btn btn-secondary" style="margin-right:auto;background-color:#c6c6c6" v-if="activeTab!='Model'" @click="next">Cofnij</button>
    <button type="button" name="button" class="btn btn-primary" style="margin-left:auto;background-color:#8fcc25" @click="prev" v-if="activeTab!='Podsumowanie'">Dalej</button>
  </div>
</transition>
</template>

<script>
import {mapState} from 'vuex';

import { EventBus } from '@/event-bus.js';

export default {
  data(){
    return{
      show:true
    }
  },
  methods:{
    next(){
      this.$store.dispatch('setPrevTab');
      this.showIn();

    },
    prev(){
      this.$store.dispatch('setNextTab');
      this.showIn();
    },
    showIn(){
      this.show = false;
      let self = this;
      setTimeout(function(){
        self.show = true;
      },1200);
    }
  },
  mounted(){
    EventBus.$on('nav', payload => {
    this.showIn();
    });
  },
  computed:{
    ...mapState({
      activeTab:'activeTab'
    })
  }
}
</script>

<style scoped>
.fade-leave-active{
  opacity:0;
}


.fade-enter-active{
  opacity:1;
  transition: opacity .6s;
}

.fade-enter{
  opacity: 0;
}

.fade-leave-to {
  opacity:0;
}


</style>
