<template>
  <div class="" style="positon:relative" id="prezent">
    <wizualizacja style="position:absolute;z-index:1000;transform:scale(0.15,0.17);transform-origin:0px 0px; left:360px;top:360px" ></wizualizacja>

  <div class="" style="z-index:-1000">
    <div class="" style="width:800px;height:600px;z-index:-1000;background:url('https://assets.archon.pl/images/products/mfe42422780eaf/widok-1-projekt-dom-w-balsamowcach-2-1575514654__289.jpg')"></div>
  </div>

  </div>


</template>

<script>
import Wizualizacja from '@/components/Drzwi.vue';

export default {
  components:{
    Wizualizacja
  },
  data(){
    return {
      backgrounds:[
        {url:'',x:0,y:0,scalex:0.25,scaley:0.25},
        {url:'/images/backgrounds/1.jpg',x:330,y:312,scalex:0.1,scaley:0.1},
        {url:'/images/backgrounds/2.jpg  ',x:159,y:325,scalex:0.1,scaley:0.1},
        {url:'/images/backgrounds/3.jpg  ',x:432,y:215,scalex:0.1,scaley:0.1}
      ],
      activebackground:{},

    }

  },
  mounted(){
    setTimeout(function(){
      html2canvas(document.querySelector("#wiz")).then(canvas => {
        // document.body.appendChild(canvas)

        let url = canvas.toDataURL();

        let imgObj = new Image();
        imgObj.src = url;
        imgObj.setAttribute('id','test');
        document.getElementById("prezent").appendChild(imgObj);
    });
  },5000)


  }

}
</script>

<style>
</style>
