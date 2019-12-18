<template>
  <div class="customselect" style="" @click="showoptions = !showoptions" @mouseleave="showoptions = false" v-cloak>
      <span class="desc"><span> wybierz gotowe tło </span></span>
      <div class="rightdiv" style="">
          <i class="arrow down"></i>
      </div>
      <p style="clear:both;padding:0px;margin:0px;"></p>
      <div class="options" v-if="showoptions">
          <div class="myoption" v-for="(elem,index) in backgrounds" @click="setActiveBackground(elem)">Tło {{index+1}} <img :src="elem.url" style=""></div>

      </div>

  </div>
</template>

<script>
import {mapState} from 'vuex';


export default {
  data(){
    return{
      showoptions:false
    }
  },
  methods:{
    setActiveBackground(elem){
      this.$store.commit('setActiveBackground',elem);
      // this.$store.state.activebackground = elem;
    }
  },
  computed:{
    ...mapState({
      backgrounds:'backgrounds'
    })
  }
}


</script>

<style scoped>
.arrow {
    border: solid #c6c6c6;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 4px;
}

.down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
}

.customselect {
  display:inline-block;
  margin-right:1em;
  top:8px;
  margin-top:5px;
    box-sizing: content-box;
    color: #c6c6c6;
    position: relative;
    width: 200px;
    height: 30px;
    border: 1px #c6c6c6 solid;
    z-index: 800;
}

div {
    box-sizing: content-box;
    line-height: 1;

}

.customselect:hover {
    border: 1px #444 solid;
    color: #444;
}

.customselect:hover .rightdiv {
    background: #c6c6c6;
}


.customselect:hover .arrow {
    border: solid black;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 4px;
}

.options {
  position:absolute;
    border: 1px solid rgba(0, 0, 0, .15);
    border-radius: .25rem;

}

.rightdiv {
    width: 15px;
    background: #f1f1f1;
    height: 26px;
    padding-left: 5px;
    padding-top: 4px;
    border-left: 1px #c6c6c6 solid;
    float: right
}

.myoption {
  background:white;
    height: 50px;
    width:195px;
}

.myoption:hover {
    background: #c6c6c6
}

.desc {
    position: absolute;
    top: 5px;
    left: 3px;
    margin: 0px;
    padding: 0px;
}

.customselect img {
    width: 60px;
    max-height: 100%;
    display: inline-block;
    height: 40px;
    margin-left: 50px
}
</style>
