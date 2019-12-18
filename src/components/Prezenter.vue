<template>
  <div class="">

  <v-stage :config="{width:800,height:600}" @mousedown="handleStageMouseDown">
    <v-layer id="tlo">
      <v-image :config="{image:backgroundimage}" id="tloimage"></v-image>
    </v-layer>
    <drzwi :dragprop="dragbool" :width="width" :height="height" :xprop="activebackground.x" :yprop="activebackground.y" :scalexprop="activebackground.scalex" :scaleyprop="activebackground.scaley"> </drzwi>
  </v-stage>

</div>


</template>

<script>
import {mapState} from 'vuex';
import {mapGetters} from 'vuex';
import drzwi from '@/components/Drzwi.vue';
import {EventBus} from '@/event-bus.js';




export default {
  watch:{
    activebackground:function(){
      console.log('asfd');
      this.loadbackground();
    }
  },
  components:{
    drzwi
  },
  data(){
    return{
      width:300,
      height:600,
      backgroundimage:null,
      scalexbuf:0.4,
      scaleybuf:0.4,
      dragbool:false,
      transformbool:false
    }
  },
  methods:{
    loadbackground(){
      let imgObject = new Image();
      let self = this;
      imgObject.src = this.activebackground.url;
      imgObject.onload = () => {
        self.backgroundimage = imgObject;
      }
    },
    handleStageMouseDown(e){
      if(!this.transformbool){
        return
      }

      console.log(e.target);
      console.log(e.target.getStage());

      if (e.target === e.target.getStage() || e.target.attrs.id=='tloimage') {
        console.log('wyłącz');
        this.updateTransformer('detach');
        return;
      }


       this.updateTransformer('');
     },
   updateTransformer(mode){
     const transformerNode = this.$children[0].$children[1].$refs.transformer.getStage();
     const stage = transformerNode.getStage();
     const selectedNode = stage.findOne('.' + 'D1');

     if(mode=='detach'){
       console.log('detach');
       transformerNode.detach();
       transformerNode.getLayer().batchDraw();
       
       return
     }

      transformerNode.attachTo(selectedNode);
      transformerNode.getLayer().batchDraw();
      console.log(this.$children);


   }
  },
  mounted(){
    this.loadbackground();
    EventBus.$on('loadcustombackground', payload => {
      this.backgroundimage = this.$store.state.custombackgroundimg;
      this.transformbool=true;
      this.dragbool=true;
      this.updateTransformer();

    });
  },
  computed:{
    ...mapState({
      backgrounds:'backgrounds',
      activebackground:'activebackground',
      custombackgroundimg:'custombackgroundimg'
    })
  }

}
</script>

<style lang="css" scoped>
</style>
