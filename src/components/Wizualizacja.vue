<template>
  <div class id="wizcon" style="transition:1s;opacity:1;position:relative">
    <div :style="{height:extraheight+'px'}" style="transition:1s"></div>
    <v-stage :config="{width:width,height:heightc,draggable:false}">
      <drzwi :width="width" :height="height"></drzwi>
    </v-stage>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import drzwi from "@/components/Drzwi.vue";
// import oscieznica from '@/components/Oscieznicakonva.vue';
// import skrzydlo from '@/components/Skrzydlo.vue';

export default {
  components: {
    drzwi
  },
  data() {
    return {
      // grubosc:20,
      // gruboscback:10,
      height: 600,
      width: 500,
      back: false,
      extraheight: 0
    };
  },
  watch: {
    "product.wzor": function() {
      this.fadeIn();
    },
    "product.szyba": function() {
      this.fadeIn();
    },
    selectedwidok: function() {
      this.fadeIn();
    }
  },
  methods: {
    fadeIn() {
      let self = this;
      document.getElementById("wizcon").style.transition = "0s";
      document.getElementById("wizcon").style.opacity = 0;
      setTimeout(function() {
        document.getElementById("wizcon").style.transition = "0.3s";
      }, 200);

      setTimeout(function() {
        document.getElementById("wizcon").style.opacity = 1;
      }, 400);
    },
    handleScroll() {
      if (window.innerWidth < 900) {
        return;
      }
      // if (window.scrollY > 100 ){document.getElementById("masthead").style.display="none";}

      if (window.scrollY > 400) {
        this.extraheight = 300;
      } else if (window.scrollY > 8000) {
        this.extraheight = 600;
      } else {
        this.extraheight = 0;
        document.getElementById("masthead").style.display = "block";
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    if (document.getElementById("content")) {
      document.getElementById("content").style.marginTop = "10px";
      document.getElementById("content").style.paddingTop = "10px";
    }
  },
  mounted() {
    // this.fadeIn();
  },
  computed: {
    ...mapState({
      selectedwidok: "selectedwidok",
      product: "product"
    }),
    wysokoscng() {
      let wys = parseInt(this.$store.state.product.wysokoscng);
      if(wys == 100){return 80}
      else if (wys==200){return 110}
      else if (wys==300){return 140}
      else if (wys==400){return 170}
      else if (wys==500){return 200}
      else if (wys==600){return 230}
      else if (wys==700){return 260}
      else if (wys==800){return 290}

      else return wys*0.4
      //return parseInt(this.$store.state.product.wysokoscng);
    },
    heightc() {
      if (this.product.typ == "D1N04") {
        return 600 + this.wysokoscng;
      } else {
        return 600;
      }
    }
  }
};
</script>

<style lang="css" scoped>
</style>
