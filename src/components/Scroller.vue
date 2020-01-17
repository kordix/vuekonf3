<template>
    <div class="">
<!-- :style="{maxHeight:height+'px'}" -->
    <div class="myrow scroller" :class="{scroll:scroll}" >
      <!-- :class="{active:item.artnr==activeItem}" -->
      <div v-for="item in scrollerdata" class="scroller-item mycolumn col-4"  :class="{active:item.artnr==activeItem,col5k:col=='5',col4k:col=='4'}"  @click="handleitemclick(item.artnr)">
        <div class="" style="margin:15px 15px 5px 15px">
          <img v-if="noimage" style="display:none">
          <img v-else-if="folder=='Przeszklenia' && item.artnr=='00'" class="img-fluid"  :src="'/images/konfigurator/Przeszklenia/pusty.png' ">
          <img v-else-if="folder=='Przeszklenia' && item.artnr=='19'" class="img-fluid"  :src="`/images/konfigurator/Przeszklenia/${odpszybkonf}_06.${ext}` ">
          <img v-else-if="folder=='Przeszklenia'" class="img-fluid"  :src="`/images/konfigurator/Przeszklenia/${odpszybkonf}_${item.artnr}.${ext}` ">
         <img v-else class="img-fluid" :src="`/images/konfigurator/${folder}/${item.artnr}.${ext}` ">
         <label class="caption" style="cursor:pointer" :class="{captionnoimg:noimage}">{{item.bez}}</label></b>
         </div>
      </div>
     </div>
      <select class="" name="" v-model="thevalue" style="display:none">
        <option v-for="item in scrollerdata" :value="item.artnr">{{item.bez}}</option>
      </select>
    </div>
</template>

<script>
    import { EventBus } from '@/event-bus.js';


    export default {
      props:{attr:String,scroll:{type:Boolean,default:true},scrollerdata:Array,folder:String,odpszyb:String,noimage:Boolean,scroll:{type:Boolean,default:false},
      col:{type:String,default:'col-3'},height:{type:String,default:"400"},ext:{type:String,default:'jpg'}  },
        data(){
          return{
            thevalue:null
          }
        },
        mounted(){

        },
        methods:{
          handleitemclick:function(val){
            EventBus.$emit('scroller', this.attr);
            let self = this;
            this.thevalue = val;
            let payload = {'attr': this.attr, 'val': this.thevalue};
            this.$store.dispatch('setProductAttribute',payload);
          }
      },
      computed:{
        activeItem(){
          return this.$store.state.product[this.attr];
        },
        odpszybkonf()
        {
          return this.$store.getters.odpszybkonf;
        }
    }}
</script>

<style lang="css" scoped>
.scroller{
padding:10px 20px 20px 2px;
cursor:pointer;
/* max-height: 600px; */
max-width:800px;
}

.scroll{
  overflow-y:auto;
  max-height:400px;
}

.myrow{
  display:flex;
  flex-wrap: wrap;
}

.grid{
  display:grid;
}

.scroller-item{
  width:190px;
  height:auto;
  transition: box-shadow 0.6s, border 0.2s;
}


.scroller-item:hover{
  box-shadow: #999 0px 0px 2px;
}


.active{
    border:2px #8ac148 solid;
}

.caption{
  font-size:.9em;
  margin-bottom:0px;
  text-align:center;
  display:block;
}

.captionnoimg{
  margin-bottom:13px;
}

.col5k{
flex: 0 0 20% !important;
max-width: 20% !important;
}

.col4k{
flex: 0 0 25% !important;
max-width: 25% !important;
}

.col2k{
flex: 0 0 50% !important;
max-width: 50% !important;
}

@media(max-width: 768px){
  .mycolumn{
    flex:30% !important;
    max-width:30% !important;
  }
}

.captionnoimg{
  margin-bottom:13px;
}


</style>
