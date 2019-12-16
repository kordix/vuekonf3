<template>
  <div id="app">
    <tabs></tabs>
    <div class="row">
    <div class="col-md-8">
      <konfigurator></konfigurator>
    </div>
      <div class="col-md-4">
        <wizualizacja style="z-index:1000"></wizualizacja>
        <switcher></switcher>
        <p>Cena:{{parseInt(basicprice)}} zł</p>
      </div>
  </div>
  </div>
</template>

<script>
import Tabs from '@/components/Tabs.vue';
import Konfigurator from '@/components/Konfigurator.vue';
import Wizualizacja from '@/components/Wizualizacja.vue';
import switcher from '@/components/Switch.vue';
import Prezenter from '@/components/Prezenter.vue';
import {mapState} from 'vuex';
import { mapGetters} from 'vuex';


export default {
  components:{
    Konfigurator,Tabs,Wizualizacja,switcher,Prezenter
  },
  watch:{
    product:{
      deep:true,
      handler:function(){
        this.getBasicPrice()
      }
    }
  },
  mounted(){
    this.getBasicPrice();
  },
  data(){
    return {
      basicprice:0
    }
  },
  methods:{
    getBasicPrice(){
      let column = this.product.seria;
      if (this.product.szyba != '00'){column += 's'}

      this.basicprice =  this.cenytablica.find((el)=>el.model == this.product.wzor)[column];

      if(this.product.inoxstrona == "1" || this.product.inoxstrona == "2" ){
        this.basicprice -= 200;
      }



    }
  },
  computed:{
    ...mapState({
      product:'product',
      cenytablica:'cenytablica',
      product:'product'
    }),
    ...mapGetters({
      cena:'cena'
    })
  }
}

</script>

<style>

</style>
