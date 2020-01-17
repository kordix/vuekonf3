<template>
<button type="button" class="btn btn-primary" style="background-color:#8fcc25" @click="handlePDF">Zapisz pdf</button>
</template>

<script>
import {mapState} from 'vuex';
import {mapGetters} from 'vuex';
import {EventBus} from '@/event-bus.js';
// import * as jsPDF from 'jspdf';
// import * as metropolisnormal from '@/Metropolis-normal.js';




export default {
data(){
  return {

  }
},
mounted(){
  let self = this;
  let logo = new Image();
        logo.src='/images/logo.png';
        logo.onload = function(){
          self.$store.state.logoobject = logo ;
          // pdf.output('save','konfiguracja');

        }
},
computed:{
  ...mapGetters({
    activeModel:'activeModel',
    activeSzyba:'activeSzyba',
    activeSotw:'activeSotw',
    activeKlamka:'activeKlamka',
    activeKlamkaKolor:'activeKlamkaKolor',
    activeKierunek:'activeKierunek',
  }),
  ...mapState({
    exportImageObj:'exportImageObj',
    exportImageObjInner:'exportImageObjInner',
    logoobject:'logoobject'


  })
},
methods:{
  handlePDF(){
    let self = this;
    EventBus.$emit('exportImages', '');
    setTimeout(function(){
      self.makePDF();
    },5000);
  },
  test(){
  },
  makePDF(){
    let self = this;
    let pdf = new jsPDF('p','pt');
    let data =new Date();
    let data2 = data.toLocaleDateString("pl",{hour:'numeric',minute:'numeric'});
    console.log(pdf.getFontList());
    pdf.setFont("Metropolis","normal");
    pdf.setFontSize(9);
    pdf.text(200,800,'WIKED Sp. z o.o. Sp. k.');
    pdf.text(200,810,'84-242 Luzino, ul. Wielki Las 19');
    pdf.text(370,800,'tel.(58) 678 01 77');
    pdf.text(370,810,'tel.(58) 738 66 61');
    pdf.setFillColor(143, 204, 37);
    pdf.rect(399,95,151,20,'F');
    pdf.rect(399,425,151,20,'F');
    pdf.setFont("Metropolis","bold");
    pdf.setFontSize(11);
    pdf.setTextColor(250,250,250);
    pdf.text(420,108,'Widok z zewnątrz');
    pdf.text(420,439,'Widok z wewnątrz');
    pdf.setTextColor(0,0,0);
    pdf.setFontSize(10);
    pdf.setFont("helvetica","normal");
    pdf.text(470,90, data2);
    pdf.setFont("Metropolis","normal");
    pdf.setFontSize(12);
    pdf.text(150,130, self.activeModel.bez);
    pdf.text(150,150, self.activeSzyba.bez);
    pdf.text(150,170, self.activeKierunek.bez);
    pdf.text(150,190, self.activeSotw.bez);
    pdf.text(150,210, self.activeKlamka.bez);
    pdf.text(150,230, self.activeKlamkaKolor.bez);
    pdf.setFont("Metropolis","bold");
    pdf.setFontSize(14);
    pdf.text(30,100, 'Wybrane cechy produktu');
    pdf.setFontSize(16);
    pdf.text(425,50, 'WIZUALIZACJA');
    pdf.text(352,70, 'DRZWI ZEWNĘTRZNYCH');
    pdf.setFontSize(12);
     pdf.setTextColor(143, 204, 37);
     pdf.text(30,130,`Wzór `);
     pdf.text(30,150,`Szyba `);
     pdf.text(30,170,`Kierunek otwierania `);
     pdf.text(30,190,`Sposób otwierania `);
     pdf.text(30,210,`Klamka / pochwyt `);
     pdf.text(30,230,`Kolor okuć `);
     pdf.setFillColor(143,204,37);
     pdf.setDrawColor(143,204,37);
     pdf.setLineWidth(2);

     pdf.line(30,107,50,107);
     pdf.line(170,790,170,810);
     pdf.line(350,790,350,810);


       let imgsrc = self.exportImageObj;
       let imgsrcinner = self.exportImageObjInner;

       let imagewidth = self.exportImageObj.width;
       let imageheight = self.exportImageObj.height;
       let targetwidth = 150;
       let targetheight = targetwidth * (imageheight/imagewidth);

       pdf.setFillColor(143,204,37);
       pdf.setDrawColor(143,204,37);
       pdf.setLineWidth(2);

       pdf.addImage(self.logoobject, 'PNG', 30, 30, 150, 50);
       pdf.addImage(self.logoobject, 'PNG', 30, 790, 100, 33);

       pdf.addImage(imgsrc, 'JPEG', 400, 120, 150, targetheight);
       pdf.addImage(imgsrcinner, 'JPEG', 400, 450, 150, targetheight);
       pdf.output('save','konfigurator.pdf');

      //  pdf.output('dataurlnewwindow');


  },


}

}
</script>

<style>
</style>
