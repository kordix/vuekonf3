<template>
<div id="tabsall" :class="{fixed:fixed}" >
<div class="" class="tabscontainer">

<div class="">
  <ul style="display:flex;justify-content:center;align-items:center;">

  <li class="tablineparent" v-for="tab in tabsFilter" @click="handleClick(tab.bez)" :class="{shown:tab.shown==true,active:activeTab==tab.bez,nonactive:activeTab!=tab.bez }">
    <span class="tabline"></span>
    <span class="dotdummy" v-if="activeTab==tab.bez"></span>

    <p class="caption"  :style="{left:'-'+tab.offset+'px'}">{{tab.bez}}</p>
  </li>

</ul>
</div>

<div class="" style="clear:both">

</div>



  <select class="" name="" v-model="activeTab" @change="setActiveTab" style="display:none">
    <option :value="tab.bez" v-for="tab in tabsFilter">{{tab.bez}}</option>

  </select>
</div>
</div>

</template>

<script>
import {mapGetters} from 'vuex';
import {mapState} from 'vuex';
import {mapActions} from 'vuex';
import {EventBus} from '@/event-bus.js';




export default {
  data(){
    return{
      fixed:false
      // tabs:['model','kolor','szyba','okucia']
    }
  },
  watch:{
    activeTab(){
      let self = this;
      this.$store.commit('setActiveTab',self.activeTab);
    },
    "product.wzor":function(val){
      if(this.szybyFilter.length==1 && this.szybyFilter[0].artnr=='00'){
        this.$store.dispatch('manipulateTab',false);
      }else{
        this.$store.dispatch('manipulateTab',true);
      }
    }

  },
  methods:{
    ...mapActions({
      setNextTab:'setNextTab'
    }),
    setActiveTab(){
      let self = this;
      this.$store.commit('setActiveTab',self.activeTab);
    },
    handleClick(bez){
      EventBus.$emit('nav', '');
      this.$store.state.activeTab=bez;
    }
  },
  computed:{
    ...mapState({
      activeTab:'activeTab',
      product:'product'
    }),
    ...mapGetters({
      tabsFilter:'tabsFilter',
      szybyFilter:'szybyFilter'
    }),
    screen(){
      return window.width;

    }
  },
  mounted(){
    let self = this;
    window.addEventListener('scroll',function(){
      // console.log(window.scrollY);
      
      if(window.scrollY > 300){
        self.fixed = false;
      }else if (window.scrollY < 100){
        // console.log('mniej niż 100');
        
        self.fixed = false;
        
      }


    })

  }
}
</script>

<style scoped>
ul{
  list-style: none;
}

.tabscontainer{
  transition:0.3s;

  background: rgb(248, 248, 248);position:relative;
  padding-bottom:10px;
  margin-bottom:12px;
}

.dotdummy::before{
  transition:0.3s;

   content: '';
   position:absolute;
   border-radius: 2em;
   /* width:6px;
   height:6px; */
   top:47px;
   left:6px;
   background:var(--mygreen);
   border: 4px solid var(--mygreen);
   z-index: 2;
}

.tabline{
  transition:0.3s;

  position: absolute;
  display: block;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background: #c2c2c2;
  height: 2px;
  z-index: 1;
  box-shadow: 1px 1px 1px #c6c6c6;
}


.tabline::before{
  transition:color 0.3s;

  content: '';
  display: block;
  position: absolute;
  left: 0px;
  top: -9px;
  background: #fff;
  border: 0.1em solid #c2c2c2;
  width: 20px;
  height: 20px;
  border-radius: 1em;
  z-index: 2;
  cursor: pointer;
   box-shadow: 1px 1px 4px #c6c6c6;
}

.active > .tabline::before{
  transition:color 0.3s;
  font-weight:bold;
  border:2px var(--mygreen) solid !important;
  left:-2px;
}

.active > .tabline{
  transition:0.3s;

  font-weight:bold;
  border:2px var(--mygreen) solid !important;
}

.shown > .tabline::before{
  transition:color 0.3s;
  font-weight:bold;
  border:2px var(--mygreen) solid !important;
  left:-2px;
}

.shown > .tabline{
  transition:0.3s;

  font-weight:bold;
  border:2px var(--mygreen) solid !important;
}

.tablineparent{
  transition:.3s;
}

.tablineparent.nonactive:hover > .tabline{
  transition:0.3s;

  font-weight:bold;
  border:2px var(--mygreenhov) solid !important;
}

.tablineparent.nonactive:hover > .tabline::before{
  transition:0.3s;

  font-weight:bold;
  border:2px var(--mygreenhov) solid !important;
  left:-2px;
}

.tablineparent.nonactive:hover > .caption{
  font-weight:500;
  color:var(--mygreenhov) !important;
  left:-2px;
}



li.active > p{
  color:var(--mygreen) !important;
  font-weight:500 !important;
}


ul:last-child {
/* border:2px red solid !important; */

}

.tablineparent{
  transition:0.3s;
  float:left;
  position:relative;
  width:14%;
  height:100px;
  cursor:pointer;
  left:-30px;
}

ul li:last-child {
width:0px;
}

.caption{
  font-weight:500;
   color:var(--mygray);
  /* transition:0.3s; */
  font-size:14px !important;
  cursor: pointer;
    position: absolute;
    font-weight: 400;
    font-size: 1.2em;
    top: 60px;
    left: -12px;
}

@media(max-width:600px){
  .tablineparent{
    left:-35px;
    width:16%;
    /* font-size:6px !important; */
  }

  .caption{
    font-size:10px !important;
  }

  .widthresp{
    width:17% !important;
    font-size:7px !important;
  }

  .tabscontainer{
    background:white;
  }
}

.fixed{
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    display: block;
    animation-name: fadeInDown;
    animation-duration: 0.25s;
    z-index:1000;
}

.fixedall{
position:fixed;
z-index:1000;

}

.fixedtcontainer{
  position:relative;
  width:1000px;
  max-width:1200px;
  z-index:1000;

}

 @keyframes fadeInDown {
        from {
            opacity: 0;
            transform: translate3d(0, -100%, 0);
        }

        to {
            opacity: 1;
            transform: none;
        }
    }

</style>
