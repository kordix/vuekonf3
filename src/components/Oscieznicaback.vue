<template>
  <div class="" id="oscfront" style="position:absolute;" :style="{left:'-'+grubosc+'px',top:'-'+grubosc+'px'}">
    <div id="lewegora" style="position:absolute;background-size:contain" v-bind:style="{ backgroundImage: 'url(images/naswietle/bnlt.png',width:grubosc+'px',height:grubosc+'px'}"></div>
    <div id="lewe" style="position:absolute;background-size:CONTAIN"  v-bind:style="{ backgroundImage: 'url(images/naswietle/bnl.png',top:grubosc+'px',width:grubosc+'px',height:height+'px' }"></div>
    <div id="gora" style="position:absolute;background-size:contain"  v-bind:style="{ backgroundImage: 'url(/images/naswietle/bnt.png',height:grubosc+'px',left:grubosc+'px',width:width+'px'  }"></div>
    <div id="prawegora" style="position:absolute;transform: scaleX(-1);background-size:contain" v-bind:style="{ backgroundImage: 'url(images/naswietle/bnlt.png',height:grubosc+'px',width:grubosc+'px',left:width+grubosc+'px' }"></div>
    <div id="prawe" style="position:absolute;transform: scaleX(-1);background-size:contain" v-bind:style="{ backgroundImage: 'url(images/naswietle/bnl.png',left:width+grubosc+'px',top:grubosc+'px',width:grubosc+'px',height:height+'px' }"></div>
    <div id="okleinaosc" style="position:absolute;z-index:-6000" v-bind:style="{ backgroundImage: 'url(images/okleiny/'+okleina+'.jpg',height:height+grubosc+'px',width:width+2*grubosc+'px' }"> </div>
  </div>
</template>

<script>
export default {
  props:['okleina','width','height','grubosc'],
  data(){
    return {

    }
  }

}
</script>

<style lang="css" scoped>
</style>
