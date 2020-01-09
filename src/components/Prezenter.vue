<template>
  <div class="">

  <v-stage ref="stage" :config="{width:650,height:550,draggable:true}" @mousedown="handleStageMouseDown" @wheel="zoom">
    <v-layer id="tlo">
      <v-image :config="{image:backgroundimage}" id="tloimage"></v-image>
    </v-layer>
    <drzwi :turnable="false" :dragprop="dragbool" :width="width" :height="height" :xprop="activebackground.x" :yprop="activebackground.y" :scalexprop="activebackground.scalex" :scaleyprop="activebackground.scaley"> </drzwi>
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
      transformbool:false,
      zoombool:true
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

      if (e.target === e.target.getStage() || e.target.attrs.id=='tloimage') {
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
       transformerNode.detach();
       transformerNode.getLayer().batchDraw();

       return
     }

      transformerNode.attachTo(selectedNode);
      transformerNode.getLayer().batchDraw();


   },
   zoom:function(e){
    if(this.zoombool==true){
    let scaleBy=1.1;
    let stage = this.$refs.stage.getStage();
    e.evt.preventDefault();
    var oldScale = stage.scaleX();
    var mousePointTo = {
        x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
        y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale
    };
    var newScale = e.evt.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;
    stage.scale({
        x: newScale,
        y: newScale
    });

    var newPos = {
        x:-(mousePointTo.x - stage.getPointerPosition().x / newScale) * newScale,
        y:-(mousePointTo.y - stage.getPointerPosition().y / newScale) * newScale
    };
    stage.position(newPos);
    stage.batchDraw();

    }
  },
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
