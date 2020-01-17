document.getElementById('mybutton').addEventListener('click', function(){
    makePDF();

});

function makePDF(){

let pdf = new jsPDF('p','pt');
pdf.text(200,300,'WIKED Sp. z o.o. Sp. k.');

pdf.setFont("Metropolis","bold");
pdf.text(200,400,'WIKED Sp. z o.o. Sp. k.');
pdf.text(200,810,'84-242 Luzino, ul. Wielki Las 19');
pdf.text(370,800,'tel.(58) 678 01 77');
pdf.text(370,810,'tel.(58) 738 66 61');

// console.log(pdf.getFontList());


pdf.output('save','konfigurator.pdf');
// pdf.output('dataurlnewwindow');


}