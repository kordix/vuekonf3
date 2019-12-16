<template >
<div class="" class="tabscontainer">

<div class="">
  <ul style="display:flex;justify-content:center;align-items:center;">

  <li class="tablineparent" v-for="tab in tabsFilter" @click="activeTab=tab.bez" :class="{active:activeTab==tab.bez}">
    <span class="tabline"></span>
    <span class="dotdummy" v-if="activeTab==tab.bez"></span>

    <p class="caption" :style="{left:'-'+tab.offset+'px',color:activeTab==tab.bez ? '#8fcc25' : '#c2c2c2'  }">{{tab.bez}}</p>
  </li>

</ul>
</div>

<div class="" style="clear:both">

</div>



  <select class="" name="" v-model="activeTab" @change="setActiveTab" style="display:none">
    <option :value="tab.bez" v-for="tab in tabsFilter">{{tab.bez}}</option>

  </select>
</div>

</template>

<script>
import {mapGetters} from 'vuex';
import {mapState} from 'vuex';


export default {
  data(){
    return{
      tabs:['model','kolor','szyba','okucia'],
      activeTab:'Model'
    }
  },
  watch:{
    activeTab(){
      let self = this;
      this.$store.commit('setActiveTab',self.activeTab);
    }
  },
  methods:{
    setActiveTab(){
      let self = this;
      this.$store.commit('setActiveTab',self.activeTab);
    }
  },
  computed:{
    ...mapGetters({
      tabsFilter:'tabsFilter'
    })
  }
}
</script>

<style scoped>
ul{
  list-style: none;
}

.tabscontainer{
  background: rgb(248, 248, 248);position:relative;
  padding-bottom:10px;
  margin-bottom:12px;
}

.dotdummy::before{
   content: '';
   position:absolute;
   transition: 0.5s;
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
  transition: 0.5s;
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
  transition: 0.5s;
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
  font-weight:bold;
  border:2px var(--mygreen) solid !important;
  left:-2px;

}

.active > .tabline{
  font-weight:bold;
  border:2px var(--mygreen) solid !important;
}

li.active > p{
  font-weight:500 !important;
}


ul:last-child {
/* border:2px red solid !important; */

}

.tablineparent{
  float:left;
  position:relative;
  width:20%;
  height:100px;
}

ul li:last-child {
width:0px;
}

.caption{
  font-size:14px !important;
  cursor: pointer;
    position: absolute;
    font-weight: 400;
    font-size: 1.2em;
    top: 60px;
    left: -12px;
}


</style>
