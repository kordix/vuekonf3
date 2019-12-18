<template>
  <div class="" style="display:inline-block">
    <input type="file" id="file" ref="myFiles" class="" @change="loadcustombackground" style="display:none">
    <label for="file" class="btn btn-primary" style="margin-right:1em">Wgraj zdjęcie swojego domu</label>
  </div>

</template>

<script>
import {EventBus} from '@/event-bus.js';


export default {
  data(){
    return {

    }
  },
  methods:{
    loadcustombackground(){
      this.files = this.$refs.myFiles.files;
      let self = this;
      if (FileReader && this.files && this.files.length) {
       var fr = new FileReader();
       fr.readAsDataURL(this.files[0]);

       fr.onload = function () {
           let ImageObj = new Image();
           ImageObj.src = fr.result;
                 ImageObj.onload = function(){
                   self.$store.state.custombackgroundimg=ImageObj;
                   EventBus.$emit('loadcustombackground', '');

                 // document.getElementById('output').append(ImageObj);

               }
           }
       }

      console.log('załadowano obrazek');
    }
  }

}
</script>

<style lang="css" scoped>
</style>
