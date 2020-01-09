/*
spis treści
seriatablica
sposobotwtablica
szybatablica
kolortablica
klamkatablica
wzorytablica
ral
tloczenialista
inoxlista
mixkolorlista
mixdane
przypisaniaszyb
wzorydoklamki
wzorydodostawki
koloryklamek
koloryramek


*/

let seriatablica = [
  {artnr:'41',bez:'PRESTIGE TERMO'},
  {artnr:'30',bez:'OPTIMUM'},
  {artnr:'31',bez:'OPTIMUM TERMO'},
  {artnr:'20',bez:'PREMIUM'},
  {artnr:'21',bez:'PREMIUM TERMO'},
  {artnr:'10',bez:'NORMAL'},
]


let klamkatablica = [
  {"artnr":"Magnus","bez":"Klamka Magnus","typ":"KK"},
  {"artnr":"MagnusZ","bez":"Klamka Magnus z zabezpieczeniem","typ":"KK"},
  {"artnr":"Manitoba","bez":"Klamka Manitoba","typ":"KK"},
  {"artnr":"Prestige","bez":"Klamka Prestige bez zabezpieczenia","typ":"KK"},
  {"artnr":"PrestigeZ","bez":"Klamka Prestige z zabezpieczeniem","typ":"KK"},
  {"artnr":"Prime","bez":"Klamka Prime","typ":"KK"},
  {"artnr":"SlimSolo","bez":"Klamka SlimSolo do pochwytu jednostronnego","typ":"KKP"},
  {"artnr":"SlimSoloZ","bez":"Klamka SlimSolo z zab. do pochwytu jednostronnego","typ":"KKP"},
  {"artnr":"Tahoma","bez":"Klamka Tahoma","typ":"KK"},
  // {"artnr":"MagnusG","bez":"Klamko-Gałka Magnus","typ":"KG"},
  {artnr:"P050pME",bez:"Pochwyt 50 cm poziomy Modern Elegance",typ:"PP"},
  {artnr:"P050pMEx",bez:"Pochwyt 50 cm poziomy Modern Elegance z przyciskiem",typ:"PP"},
  {artnr:"P050pMS",bez:"Pochwyt 50 cm poziomy Modern Simple",typ:"PP"},
  {artnr:"P050pMSx",bez:"Pochwyt 50 cm poziomy Modern Simple z przyciskiem",typ:"PP"},
  {artnr:"P050pME",bez:"Pochwyt 50 cm poziomy Modern Elegance",typ:"KP"},
  {artnr:"P050pMEx",bez:"Pochwyt 50 cm poziomy Modern Elegance z przyciskiem",typ:"KP"},
  {artnr:"P050pMS",bez:"Pochwyt 50 cm poziomy Modern Simple",typ:"KP"},
  {artnr:"P050pMSx",bez:"Pochwyt 50 cm poziomy Modern Simple z przyciskiem",typ:"KP"},
   {artnr:"P150p90s",bez:"Pochwyt 150 cm prostokątny BETA 90 st. z czytnikiem",typ:"KP"},
  {"artnr":"ManitobaG","bez":"Klamko-Gałka Manitoba","typ":"KG"},
  {"artnr":"PrestigeZG","bez":"Klamko-Gałka Prestige z zabezpieczeniem","typ":"KG"},
  {"artnr":"P120o45","bez":"Pochwyt 120 cm okrągły ALFA 45 st.","typ":"PP"},
  {"artnr":"P120o90","bez":"Pochwyt 120 cm okrągły ALFA 90 st.","typ":"PP"},
  {"artnr":"P120t","bez":"Pochwyt 120 cm okrągły TORO","typ":"PP"},
  {"artnr":"P120p45","bez":"Pochwyt 120 cm prostokątny BETA 45 st.","typ":"PP"},
  {"artnr":"P120p90","bez":"Pochwyt 120 cm prostokątny BETA 90 st.","typ":"PP"},
  {"artnr":"P150o45x","bez":"Pochwyt 150 ALFA 45 st. z przyciskiem","typ":"PP"},
  {"artnr":"P150o90x","bez":"Pochwyt 150 ALFA 90 st. z przyciskiem","typ":"PP"},
  {"artnr":"P150p45x","bez":"Pochwyt 150 BETA 45 st z przyciskiem","typ":"PP"},
  {"artnr":"P150p90x","bez":"Pochwyt 150 BETA 90 st z przyciskiem","typ":"PP"},
  {"artnr":"P150o45","bez":"Pochwyt 150 cm okrągły ALFA 45 st.","typ":"PP"},
  {"artnr":"P150o90","bez":"Pochwyt 150 cm okrągły ALFA 90 st.","typ":"PP"},
  {"artnr":"P150p45","bez":"Pochwyt 150 cm prostokątny BETA 45 st","typ":"PP"},
  {"artnr":"P150p90","bez":"Pochwyt 150 cm prostokątny BETA 90 st","typ":"PP"},
  {"artnr":"P150oL3","bez":"Pochwyt 150 cm w łuku okrągły GAMMA","typ":"PP"},
  {"artnr":"P150oL2","bez":"Pochwyt 150 cm w łuku okrągły OMEGA","typ":"PP"},
  {"artnr":"P150oL4","bez":"Pochwyt 150 cm w łuku okrągły OMEGA 2","typ":"PP"},
  {"artnr":"P150oL6","bez":"Pochwyt 150 cm w łuku okrągły OMEGA 4","typ":"PP"},
  {"artnr":"P150oL1","bez":"Pochwyt 150 cm w łuku okrągły SIGMA","typ":"PP"},
  {"artnr":"P180t","bez":"Pochwyt 180 cm okrągły TORO","typ":"PP"},
  {"artnr":"P060o45","bez":"Pochwyt 60 cm okrągły ALFA 45 st.","typ":"PP"},
  {"artnr":"P060o90","bez":"Pochwyt 60 cm okrągły ALFA 90 st.","typ":"PP"},
  {"artnr":"P060oL3","bez":"Pochwyt 60 cm w łuku okrągły GAMMA","typ":"PP"},
  {"artnr":"P090oL1","bez":"Pochwyt 90 cm w łuku okrągły SIGMA","typ":"PP"},
  {"artnr":"Pock180","bez":"Pochwyt wpuszczany poziomy Pocket szer. 180","typ":"PP"},
  {"artnr":"Pock20","bez":"Pochwyt wpuszczany poziomy Pocket szer. 20","typ":"PP"},
  {"artnr":"Pock45","bez":"Pochwyt wpuszczany poziomy Pocket szer. 45","typ":"PP"},
  {"artnr":"P120o45","bez":"Pochwyt 120 cm okrągły ALFA 45 st.","typ":"KP"},
  {"artnr":"P120o90","bez":"Pochwyt 120 cm okrągły ALFA 90 st.","typ":"KP"},
  {"artnr":"P120t","bez":"Pochwyt 120 cm okrągły TORO","typ":"KP"},
  {"artnr":"P120p45","bez":"Pochwyt 120 cm prostokątny BETA 45 st.","typ":"KP"},
  {"artnr":"P120p90","bez":"Pochwyt 120 cm prostokątny BETA 90 st.","typ":"KP"},
  {"artnr":"P150o45x","bez":"Pochwyt 150 ALFA 45 st. z przyciskiem","typ":"KP"},
  {"artnr":"P150o90x","bez":"Pochwyt 150 ALFA 90 st. z przyciskiem","typ":"KP"},
  {"artnr":"P150p45x","bez":"Pochwyt 150 BETA 45 st z przyciskiem","typ":"KP"},
  {"artnr":"P150p90x","bez":"Pochwyt 150 BETA 90 st z przyciskiem","typ":"KP"},
  {"artnr":"P150o45","bez":"Pochwyt 150 cm okrągły ALFA 45 st.","typ":"KP"},
  {"artnr":"P150o90","bez":"Pochwyt 150 cm okrągły ALFA 90 st.","typ":"KP"},
  {"artnr":"P150p45","bez":"Pochwyt 150 cm prostokątny BETA 45 st","typ":"KP"},
  {"artnr":"P150p90","bez":"Pochwyt 150 cm prostokątny BETA 90 st","typ":"KP"},
  {"artnr":"P150oL3","bez":"Pochwyt 150 cm w łuku okrągły GAMMA","typ":"KP"},
  {"artnr":"P150oL2","bez":"Pochwyt 150 cm w łuku okrągły OMEGA","typ":"KP"},
  {"artnr":"P150oL4","bez":"Pochwyt 150 cm w łuku okrągły OMEGA 2","typ":"KP"},
  {"artnr":"P150oL6","bez":"Pochwyt 150 cm w łuku okrągły OMEGA 4","typ":"KP"},
  {"artnr":"P150oL1","bez":"Pochwyt 150 cm w łuku okrągły SIGMA","typ":"KP"},
  {"artnr":"P180t","bez":"Pochwyt 180 cm okrągły TORO","typ":"KP"},
  {"artnr":"P060o45","bez":"Pochwyt 60 cm okrągły ALFA 45 st.","typ":"KP"},
  {"artnr":"P060o90","bez":"Pochwyt 60 cm okrągły ALFA 90 st.","typ":"KP"},
  {"artnr":"P060oL3","bez":"Pochwyt 60 cm w łuku okrągły GAMMA","typ":"KP"},
  {"artnr":"P090oL1","bez":"Pochwyt 90 cm w łuku okrągły SIGMA","typ":"KP"},
  {"artnr":"Pock180","bez":"Pochwyt wpuszczany poziomy Pocket szer. 180","typ":"KP"},
  {"artnr":"Pock20","bez":"Pochwyt wpuszczany poziomy Pocket szer. 20","typ":"KP"},
  {"artnr":"Pock45","bez":"Pochwyt wpuszczany poziomy Pocket szer. 45","typ":"KP"}
]
let wzorytablica = [
  {"artnr":"GD01A","bez":"GD01A","typ":"GD","odpszyb":"GD01A","odpszybkonf":"GD01A"},
  {"artnr":"GD01B","bez":"GD01B","typ":"GD","odpszyb":"GD01B","odpszybkonf":"GD01B"},
  {"artnr":"GD01C","bez":"GD01C","typ":"GD","odpszyb":"GD01C","odpszybkonf":"GD01C"},
  {"artnr":"GD02A","bez":"GD02A","typ":"GD","odpszyb":"GD02A","odpszybkonf":"GD02A"},
  {"artnr":"GD02B","bez":"GD02B","typ":"GD","odpszyb":"GD02B","odpszybkonf":"GD02B"},
  {"artnr":"GD03A","bez":"GD03A","typ":"GD","odpszyb":"GD03A","odpszybkonf":"GD03A"},
  {"artnr":"FI01A","bez":"FI01A","typ":"FI","odpszyb":"FI01A","odpszybkonf":"FI01A"},
  {"artnr":"FI01B","bez":"FI01B","typ":"FI","odpszyb":"FI01B","odpszybkonf":"FI01B"},
  {"artnr":"FI01C","bez":"FI01C","typ":"FI","odpszyb":"FI01C","odpszybkonf":"FI01C"},
  {"artnr":"FI01D","bez":"FI01D","typ":"FI","odpszyb":"FI01D","odpszybkonf":"FI01D"},
  {"artnr":"FI02A","bez":"FI02A","typ":"FI","odpszyb":"FI02A","odpszybkonf":"FI02A"},
  {"artnr":"FI02B","bez":"FI02B","typ":"FI","odpszyb":"FI02B","odpszybkonf":"FI02B"},
  {"artnr":"FI03A","bez":"FI03A","typ":"FI","odpszyb":"FI03A","odpszybkonf":"FI03A"},
  {"artnr":"FI04A","bez":"FI04A","typ":"FI","odpszyb":"25","odpszybkonf":"FI04"},
  {"artnr":"FI04B","bez":"FI04B","typ":"FI","odpszyb":"25A","odpszybkonf":"FI04"},
  {"artnr":"FI04C","bez":"FI04C","typ":"FI","odpszyb":"25B","odpszybkonf":"FI04"},
  {"artnr":"FI04D","bez":"FI04D","typ":"FI","odpszyb":"25A","odpszybkonf":"FI04"},
  {"artnr":"FI04E","bez":"FI04E","typ":"FI","odpszyb":"25A","odpszybkonf":"FI04"},
  {"artnr":"FI05A","bez":"FI05A","typ":"FI","odpszyb":"FI05A","odpszybkonf":"FI05"},
  {"artnr":"FI05B","bez":"FI05B","typ":"FI","odpszyb":"FI05B","odpszybkonf":"FI05"},
  {"artnr":"FI05C","bez":"FI05C","typ":"FI","odpszyb":"FI05C","odpszybkonf":"FI05"},
  {"artnr":"FI05D","bez":"FI05D","typ":"FI","odpszyb":"FI05D","odpszybkonf":"FI05"},
  {"artnr":"FI05E","bez":"FI05E","typ":"FI","odpszyb":"FI05E","odpszybkonf":"FI05"},
  {"artnr":"FI06A","bez":"FI06A","typ":"FI","odpszyb":"12","odpszybkonf":"FI06"},
  {"artnr":"FI06B","bez":"FI06B","typ":"FI","odpszyb":"FI06B","odpszybkonf":"FI06"},
  {"artnr":"FI06C","bez":"FI06C","typ":"FI","odpszyb":"FI06C","odpszybkonf":"FI06"},
  {"artnr":"FI06D","bez":"FI06D","typ":"FI","odpszyb":"FI06B","odpszybkonf":"FI06"},
  {"artnr":"FI06E","bez":"FI06E","typ":"FI","odpszyb":"FI06B","odpszybkonf":"FI06"},
  {"artnr":"FI07A","bez":"FI07A","typ":"FI","odpszyb":"FI07A","odpszybkonf":"FI07"},
  {"artnr":"FI07B","bez":"FI07B","typ":"FI","odpszyb":"FI07B","odpszybkonf":"FI07"},
  {"artnr":"FI07C","bez":"FI07C","typ":"FI","odpszyb":"FI07C","odpszybkonf":"FI07"},
  {"artnr":"FI07D","bez":"FI07D","typ":"FI","odpszyb":"FI07D","odpszybkonf":"FI07"},
  {"artnr":"FI07E","bez":"FI07E","typ":"FI","odpszyb":"FI07D","odpszybkonf":"FI07"},
  {"artnr":"FI08A","bez":"FI08A","typ":"FI","odpszyb":"FI08A","odpszybkonf":"FI08A"},
  {"artnr":"FI09A","bez":"FI09A","typ":"FI","odpszyb":"FI09A","odpszybkonf":"FI09"},
  {"artnr":"FI09B","bez":"FI09B","typ":"FI","odpszyb":"FI09B","odpszybkonf":"FI09"},
  {"artnr":"FI09C","bez":"FI09C","typ":"FI","odpszyb":"FI09C","odpszybkonf":"FI09"},
  {"artnr":"FI10A","bez":"FI10A","typ":"FI","odpszyb":"FI10A","odpszybkonf":"FI10A"},
  {"artnr":"42","bez":"42","typ":"PCV","odpszyb":"42","odpszybkonf":"42"	},
  {"artnr":"41B","bez":"41B","typ":"INOX","odpszyb":"41B","odpszybkonf":"41B"	},
  {"artnr":"41A","bez":"41A","typ":"INOX","odpszyb":"41A","odpszybkonf":"41A"	},
  {"artnr":"41","bez":"41","typ":"INOX","odpszyb":"41","odpszybkonf":"41"	},
  {"artnr":"40A","bez":"40A","typ":"INOX","odpszyb":"40A","odpszybkonf":"40A"	},
  {"artnr":"40","bez":"40","typ":"INOX","odpszyb":"40","odpszybkonf":"40"	},
  {"artnr":"39B","bez":"39B","typ":"INOX","odpszyb":"39","odpszybkonf":"39"	},
  {"artnr":"39A","bez":"39A","typ":"INOX","odpszyb":"39","odpszybkonf":"39"	},
  {"artnr":"39","bez":"39","typ":"INOX","odpszyb":"39","odpszybkonf":"39"	},
  {"artnr":"38A","bez":"38A","typ":"INOX","odpszyb":"38","odpszybkonf":"38"	},
  {"artnr":"38","bez":"38","typ":"INOX","odpszyb":"38","odpszybkonf":"38"	},
  {"artnr":"37A","bez":"37A","typ":"INOX","odpszyb":"37","odpszybkonf":"37"	},
  {"artnr":"37","bez":"37","typ":"INOX","odpszyb":"37","odpszybkonf":"37"	},
  {"artnr":"36","bez":"36","typ":"INOX","odpszyb":"36","odpszybkonf":"36"	},
  {"artnr":"35","bez":"35","typ":"INOX","odpszyb":"35","odpszybkonf":"35"	},
  {"artnr":"34B","bez":"34B","typ":"PCV","odpszyb":"34B","odpszybkonf":"33"	},
  {"artnr":"34A","bez":"34A","typ":"PCV","odpszyb":"34A","odpszybkonf":"33"	},
  {"artnr":"34","bez":"34","typ":"PCV","odpszyb":"34","odpszybkonf":"33"	},
  {"artnr":"33A","bez":"33A","typ":"PCV","odpszyb":"33A","odpszybkonf":"33"	},
  {"artnr":"33","bez":"33","typ":"PCV","odpszyb":"33","odpszybkonf":"33"	},
  {"artnr":"32B","bez":"32B","typ":"INOX","odpszyb":"32B","odpszybkonf":"32B"	},
  {"artnr":"32A","bez":"32A","typ":"INOX","odpszyb":"32A","odpszybkonf":"32A"	},
  {"artnr":"32","bez":"32","typ":"INOX","odpszyb":"32","odpszybkonf":"32"	},
  {"artnr":"31A","bez":"31A","typ":"INOX","odpszyb":"31","odpszybkonf":"31"	},
  {"artnr":"31","bez":"31","typ":"INOX","odpszyb":"31","odpszybkonf":"31"	},
  {"artnr":"30","bez":"30","typ":"INOX","odpszyb":"30","odpszybkonf":"30"	},
  {"artnr":"29A","bez":"29A","typ":"PCV","odpszyb":"29","odpszybkonf":"29"	},
  {"artnr":"29","bez":"29","typ":"PCV","odpszyb":"29","odpszybkonf":"29"	},
  {"artnr":"28","bez":"28","typ":"PCV","odpszyb":"28","odpszybkonf":"28"	},
  {"artnr":"27","bez":"27","typ":"PCV","odpszyb":"27","odpszybkonf":"27"	},
  {"artnr":"26H","bez":"26H","typ":"INOX","odpszyb":"26","odpszybkonf":"26"	},
  {"artnr":"26G","bez":"26G","typ":"INOX","odpszyb":"26","odpszybkonf":"26"	},
  {"artnr":"26F","bez":"26F","typ":"INOX","odpszyb":"26","odpszybkonf":"26"	},
  {"artnr":"26E","bez":"26E","typ":"INOX","odpszyb":"26","odpszybkonf":"26"	},
  {"artnr":"26D","bez":"26D","typ":"INOX","odpszyb":"26","odpszybkonf":"26"	},
  {"artnr":"26C","bez":"26C","typ":"INOX","odpszyb":"26","odpszybkonf":"26"	},
  {"artnr":"26B","bez":"26B","typ":"INOX","odpszyb":"25B","odpszybkonf":"26"	},
  {"artnr":"26A","bez":"26A","typ":"INOX","odpszyb":"25","odpszybkonf":"26"	},
  {"artnr":"26","bez":"26","typ":"INOX","odpszyb":"26","odpszybkonf":"26"	},
  {"artnr":"25C","bez":"25C","typ":"INOX","odpszyb":"25A","odpszybkonf":"25"},
  {"artnr":"25B","bez":"25B","typ":"INOX","odpszyb":"25B","odpszybkonf":"25"},
  {"artnr":"25A","bez":"25A","typ":"INOX","odpszyb":"25A","odpszybkonf":"25"},
  {"artnr":"25","bez":"25","typ":"INOX","odpszyb":"25","odpszybkonf":"25"	},
  {"artnr":"24","bez":"24","typ":"INOX","odpszyb":"24","odpszybkonf":"24"	},
  {"artnr":"23A","bez":"23A","typ":"INOX","odpszyb":"23","odpszybkonf":"23"	},
  {"artnr":"23","bez":"23","typ":"INOX","odpszyb":"23","odpszybkonf":"23"	},
  {"artnr":"22B","bez":"22B","typ":"INOX","odpszyb":"22B","odpszybkonf":"22"	},
  {"artnr":"22A","bez":"22A","typ":"INOX","odpszyb":"22","odpszybkonf":"22"	},
  {"artnr":"22","bez":"22","typ":"INOX","odpszyb":"22","odpszybkonf":"22"	},
  {"artnr":"21A","bez":"21A","typ":"INOX","odpszyb":"21","odpszybkonf":"21"	},
  {"artnr":"21","bez":"21","typ":"INOX","odpszyb":"21","odpszybkonf":"21"	},
  {"artnr":"20","bez":"20","typ":"INOX","odpszyb":"20","odpszybkonf":"20"	},
  {"artnr":"19","bez":"19","typ":"INOX","odpszyb":"19","odpszybkonf":"19"	},
  {"artnr":"18","bez":"18","typ":"PCV","odpszyb":"18","odpszybkonf":"18"	},
  {"artnr":"17","bez":"17","typ":"PCV","odpszyb":"17","odpszybkonf":"17"	},
  {"artnr":"16","bez":"16","typ":"PCV","odpszyb":"16","odpszybkonf":"16"	},
  {"artnr":"15","bez":"15","typ":"PCV","odpszyb":"15","odpszybkonf":"15"	},
  {"artnr":"14","bez":"14","typ":"PCV","odpszyb":"14","odpszybkonf":"14"	},
  {"artnr":"13","bez":"13","typ":"PCV","odpszyb":"13","odpszybkonf":"13"	},
  {"artnr":"12C","bez":"12C","typ":"INOX","odpszyb":"12","odpszybkonf":"12"	},
  {"artnr":"12B","bez":"12B","typ":"INOX","odpszyb":"12","odpszybkonf":"12"	},
  {"artnr":"12A","bez":"12A","typ":"INOX","odpszyb":"12","odpszybkonf":"12"	},
  {"artnr":"12","bez":"12","typ":"INOX","odpszyb":"12","odpszybkonf":"12"	},
  {"artnr":"11","bez":"11","typ":"PCV","odpszyb":"11","odpszybkonf":"11"	},
  {"artnr":"10","bez":"10","typ":"PCV","odpszyb":"10","odpszybkonf":"10"	},
  {"artnr":"9B","bez":"9B","typ":"PCV","odpszyb":"9B","odpszybkonf":"9B"	},
  {"artnr":"9A","bez":"09A","typ":"PCV","odpszyb":"9A","odpszybkonf":"9A"	},
  {"artnr":"9","bez":"09","typ":"PCV","odpszyb":"9","odpszybkonf":"9"	},
  {"artnr":"8","bez":"08","typ":"PCV","odpszyb":"8","odpszybkonf":"8"	},
  {"artnr":"7","bez":"07","typ":"PCV","odpszyb":"7","odpszybkonf":"7"	},
  {"artnr":"6","bez":"06","typ":"PCV","odpszyb":"6","odpszybkonf":"6"},
  {"artnr":"5","bez":"05","typ":"PCV","odpszyb":"5","odpszybkonf":"5"},
  {"artnr":"4","bez":"04","typ":"PCV","odpszyb":"4","odpszybkonf":"4"},
  {"artnr":"3","bez":"03","typ":"PCV","odpszyb":"2","odpszybkonf":"2"},
  {"artnr":"2","bez":"02","typ":"PCV","odpszyb":"2","odpszybkonf":"2"},
  {"artnr":"1","bez":"01","typ":"FULL","odpszyb":"1","odpszybkonf":"1"}

]

const tloczenialista = ['02','03','04','06','07','08','09','10','11','13','14'];
const inoxlista = ['12','12A','12B','12C','19','20','21','22','22A','22B','23','23','24','25','25A','25B','26','26A','26B','29','30','31','31A','32',
'32A','32B','35','36','37','37A','38','38A','39','39A','39B','40','40A','41','41A','41B','P04','P05','P06','P07','P08','X01','X02','X03','X04','X05','X06',
'M01','M02','M03','M04','21A','23A','23A','26H','25C','FI01A','G1A','G1B','G1C','G2A','G2B','G3A','F1B','FI01C','FI02A','FI02B','FI03A','FI03B','F4A','FI04B','F4C','FI04D','FI04E','F5A','FI05B','F5C','FI05D','FI05E','F6A','F6B','F6C','F6D','F6E','F7A','F7B','F7C','F7D','F7E','F8A','FI09A','F9B','FI10A','F1D','FI09C'];


wszystkiewzory=['7','8','9','9A','9B','10','11','12','12A','12B','12C','13','14','15','16','17','18','19','20','21','21A','22','22A','22B','23','23A','24','25','25A','25B','25C','26','26A','26B','26C','26D','26E','26F','26G','26H','27','28','29','29A','30','31','31A','32','32A','32B','33','33A','34','34A','34B','35','36','37','37A','38','38A','39','39A','39B','40','40A','41','41A','41B','42','FI10A','FI01A','FI01B','FI01C','FI01D','FI02A','FI02B','FI03A','FI04A','FI04B','FI04C','FI04D','FI04E','FI05A','FI05B','FI05C','FI05D','FI05E','FI06A','FI06B','FI06C','FI06D','FI06E','FI07A','FI07B','FI07C','FI07D','FI07E','FI08A','FI09A','FI09B','FI09C','GD01A','GD01B','GD01C','GD02A','GD02B','GD03A','1','2','3','4','5','6']

let wszystkiebezF9C=['7','8','9','9A','9B','10','11','12','12A','12B','12C','13','14','15','16','17','18','19','20','21','21A','22','22A','22B','23','23A','24','25','25A','25B','25C','26','26A','26B','26C','26D','26E','26F','26G','26H','27','28','29','29A','30','31','31A','32','32A','32B','33','33A','34','34A','34B','35','36','37','37A','38','38A','39','39A','39B','40','40A','41','41A','41B','42','FI10A','FI01A','FI01B','FI01C','FI01D','FI02A','FI02B','FI03A','FI04A','FI04B','FI04C','FI04D','FI04E','FI05A','FI05B','FI05C','FI05D','FI05E','FI06A','FI06B','FI06C','FI06D','FI06E','FI07A','FI07B','FI07C','FI07D','FI07E','FI08A','FI09A','FI09B','GD01A','GD01B','GD01C','GD02A','GD02B','GD03A','1','2','3','4','5','6']
wszystkiebez35=['7','8','9','9A','9B','10','11','12','12A','12B','12C','13','14','15','16','17','18','19','20','21','21A','22','22A','22B','23','23A','24','25','25A','25B','25C','26','26A','26B','26C','26D','26E','26F','26G','26H','27','28','29','29A','30','31','31A','32','32A','32B','33','33A','34','34A','34B','36','37','37A','38','38A','39','39A','39B','40','40A','41','41A','41B','42','FI10A','FI01A','FI01B','FI01C','FI01D','FI02A','FI02B','FI03A','FI04A','FI04B','FI04C','FI04D','FI04E','FI05A','FI05B','FI05C','FI05D','FI05E','FI06A','FI06B','FI06C','FI06D','FI06E','FI07A','FI07B','FI07C','FI07D','FI07E','FI08A','FI09A','FI09B','GD01A','GD01B','GD01C','GD02A','GD02B','GD03A','1','2','3','4','5','6']

wzorydoklamki={};
wzorydoklamki['P050pME']=['1','12','12A','12B','12C','13','19','26C','26D','26F','26G','27','35','39','39A','39B','40','41','41A','G3A','FI01A','FI01C','FI02A','FI02B','FI03A','FI03B','FI04B','FI04D','FI04E','FI05B','FI05D','FI05E','FI09A','FI09C','FI10A'];
wzorydoklamki['P050pMEx']=['1','12','12A','12B','12C','13','19','26C','26D','27','35','40','41','41A','G3A','FI01A','FI01C','FI02A','FI02B','FI03A','FI03B','FI09A','FI09C']
wzorydoklamki['P050pMS']=['1','12','12A','12B','12C','13','19','26C','26D','26F','26G','27','35','39','39A','39B','40','41','41A','G3A','FI01A','FI01C','FI02A','FI02B','FI03A','FI03B','FI04B','FI04D','FI04E','FI05B','FI05D','FI05E','FI09A','FI09C','FI10A'];
wzorydoklamki['P050pMSx']=['1','12','12A','12B','12C','13','19','26C','26D','27','35','40','41','41A','G3A','FI01A','FI01C','FI02A','FI02B','FI03A','FI03B','FI09A','FI09C']

wzorydoklamki['Lambda']=Array.from(wszystkiewzory);
wzorydoklamki['Magnus']=Array.from(wszystkiewzory);
wzorydoklamki['MagnusG']=Array.from(wszystkiewzory);
wzorydoklamki['MagnusZ']=Array.from(wszystkiewzory);
wzorydoklamki['Manitoba']=Array.from(wszystkiewzory);
wzorydoklamki['ManitobaG']=Array.from(wszystkiewzory);
wzorydoklamki['ManitobaG']=Array.from(wszystkiewzory);
wzorydoklamki['ManitobaR']=Array.from(wszystkiewzory);
wzorydoklamki['P150p90s']=Array.from(wszystkiewzory);
wzorydoklamki['P060o90']=['1','12','12A','12B','12C','19','21','21A','22','22A','22B','23','23A','24','25','25B','26A','26B','26C','26D','26E','26G','29','29A','30','31','31A','32','32B','35','37','37A','38','38A','39','39A','39B','40','40A','41','41A','41B','42','G1A','G1C','G2A','FI01A','FI01C','F1D','FI02A','FI02B','FI03A','FI03B','F4A','F4C','F5A','F5C','F6A','F6C','F7A','F7C','F8A'];
wzorydoklamki['P060o45']=Array.from(wszystkiebez35);
wzorydoklamki['P060oL3']=['1','31','31A'];
wzorydoklamki['P090oL1']=['1','21','21A','23','23A']
wzorydoklamki['P120o45']=Array.from(wszystkiebez35);
wzorydoklamki['P120o90']=['1','12','12A','12B','12C','19','21','21A','22','22A','22B','23','23A','24','25','25B','26A','26B','26C','26D','26E','26G','29','29A','30','31','31A','32','32B','37','37A','38','38A','39','39A','39B','40','40A','41','41A','41B','42','G1A','G1C','G2A','FI01A','FI01C','F1D','FI02A','FI02B','FI03A','FI03B','F4A','F4C','F5A','F5C','F6A','F6C','F7A','F7C','F8A'];
wzorydoklamki['P120p45']=Array.from(wszystkiebez35);
wzorydoklamki['P120p90']=['1','12','12A','12B','12C','19','21','21A','22','22A','22B','23','23A','24','25','25B','26A','26B','26C','26D','26E','26G','29','29A','30','31','31A','32','32B','37','37A','38','38A','39','39A','39B','40','40A','41','41A','41B','42','G1A','G1C','G2A','FI01A','FI01C','F1D','FI02A','FI02B','FI03A','FI03B','F4A','F4C','F5A','F5C','F6A','F6C','F7A','F7C','F8A']
wzorydoklamki['P120t']=['1','12','12A','12B','12C','19','21','21A','22','22A','22B','23','23A','24','25','25B','26A','26B','26C','26D','26E','26G','29','30','31','31A','32','32B','37','37A','38','38A','39','39A','39B','40','40A','41','41A','41B','42','G1A','G1C','G2A','FI01A','FI01C','F1D','FI02A','FI02B','FI03A','FI03B','F4A','F4C','F5A','F5C','F6A','F6C','F7A','F7C','F8A'];
wzorydoklamki['P150o45']=Array.from(wszystkiebezF9C);
wzorydoklamki['P150o45x']=Array.from(wszystkiebezF9C);
wzorydoklamki['P150o90']=['01','12','12A','12B','12C','19','21','21A','22','22A','22B','23','23A','24','25','25B','26A','26B','26C','26D','26E','26G','29','29A','30','31','31A','32','32B','35','37','37A','38','38A','39','39A','39B','40','40A','41','41A','41B','42','G1A','G1C','G2A','FI01A','FI01C','F1D','FI02A','FI02B','FI03A','FI03B','F4A','F4C','F5A','F5C','F6A','F6C','F7A','F7C','F8A']
wzorydoklamki['P150o90x']=['1','12','12A','12B','12C','19','21','21A','22','22A','22B','23','23A','24','25','25B','26A','26B','26C','26D','26E','26G','29','29A','30','31','31A','32','32B','35','37','37A','38','38A','39','39A','39B','40','40A','41','41A','41B','42','G1A','G1C','G2A','FI01A','FI01C','F1D','FI02A','FI02B','FI03A','FI03B','F4A','F4C','F5A','F5C','F6A','F6C','F7A','F7C','F8A']
wzorydoklamki['P150oL1']=['1','21','21A','23','23A']
wzorydoklamki['P150oL2']=['1','26G','38','38A','40','40A',]
wzorydoklamki['P150oL3']=['1','31','31A']
wzorydoklamki['P150oL4']=['36'];
wzorydoklamki['P150oL6']=['26F'];
wzorydoklamki['P150p45']=Array.from(wszystkiebezF9C);
wzorydoklamki['P150p45x']=Array.from(wszystkiebezF9C);
wzorydoklamki['P150p90']=['1','12','12A','12B','12C','19','21','21A','22','22A','22B','23','23A','24','25','25B','26A','26B','26C','26D','26E','26G','29','29A','30','31','31A','32','32B','35','37','37A','38','38A','39','39A','39B','40','40A','41','41A','41B','42','G1A','G1C','G2A','FI01A','FI01C','F1D','FI02A','FI02B','FI03A','FI03B','F4A','F4C','F5A','F5C','F6A','F6C','F7A','F7C','F8A']
wzorydoklamki['P150p90x']=['1','12','12A','12B','12C','19','21','21A','22','22A','22B','23','23A','24','25','25B','26A','26B','26C','26D','26E','26G','29','30','31','31A','32','32B','37','37A','38','38A','39','39A','39B','40','40A','41','41A','41B','42','G1A','G1C','G2A','FI01A','FI01C','F1D','FI02A','FI02B','FI03A','FI03B','F4A','F4C','F5A','F5C','F6A','F6C','F7A','F7C','F8A'];
wzorydoklamki['P180t']=['1','12','12A','12B','12C','19','21','21A','22','22A','22B','23','23A','24','25','25B','26A','26B','26C','26D','26E','26G','29','30','31','31A','32','32B','37','37A','38','38A','39','39A','39B','40','40A','41','41A','41B','42','G1A','G1C','G2A','FI01A','FI01C','F1D','FI02A','FI02B','FI03A','FI03B','F4A','F4C','F5A','F5C','F6A','F6C','F7A','F7C','F8A']
wzorydoklamki['Pock180']=['1','12','12A','25','25B','26A','26B','30','32','32B','FI01A','FI01C','F1D','FI02A','FI02B','F4A','F4C','F5A','F5C','F6A','F6C','F7A','F7C','F8A']
wzorydoklamki['Pock20']=['1','12','12A','25','25B','26A','26B','30','32','32B','FI01A','FI01C','F1D','FI02A','FI02B','F4A','F4C','F5A','F5C','F6A','F6C','F7A','F7C','F8A']
wzorydoklamki['Pock45']=['1','12','12A','25','25B','26A','26B','30','32','32B','FI01A','FI01C','F1D','FI02A','FI02B','F4A','F4C','F5A','F5C','F6A','F6C','F7A','F7C','F8A']
wzorydoklamki['Prestige']=Array.from(wszystkiewzory);
wzorydoklamki['PrestigeG']=Array.from(wszystkiewzory);
wzorydoklamki['PrestigeZG']=Array.from(wszystkiewzory);
wzorydoklamki['PrestigeR']=Array.from(wszystkiewzory);
wzorydoklamki['PrestigeRZ']=Array.from(wszystkiewzory);
wzorydoklamki['PrestigeZ']=Array.from(wszystkiewzory);
wzorydoklamki['Prime']=Array.from(wszystkiewzory);
wzorydoklamki['PrimeR']=Array.from(wszystkiewzory);
wzorydoklamki['SlimSolo']=Array.from(wszystkiewzory);
wzorydoklamki['SlimSoloX']=Array.from(wszystkiewzory);
wzorydoklamki['SlimSoloXZ']=Array.from(wszystkiewzory);
wzorydoklamki['SlimSoloZ']=Array.from(wszystkiewzory);
wzorydoklamki['Tahoma']=Array.from(wszystkiewzory);
wzorydoklamki['TahomaR']=Array.from(wszystkiewzory);

zablokowane={};
zablokowane['P060o45']=['FI09C','35']
zablokowane['P120o45']=['FI09C','35']
zablokowane['P120p45']=['FI09C','35']
zablokowane['P150o45']=['FI09C']
zablokowane['P150P45']=['FI09C']
zablokowane['P150o45x']=['FI09C']
zablokowane['P150P45x']=['FI09C']

wzorydodostawki={};
wzorydodostawki['P01']=['34','34A','34B','27','09','09A','09B','07','05','04','03','02','1'];
wzorydodostawki['P02']=['42','34','34A','34B','33','33A','29A','28','27','18','17','16','15','14','13','11','10','09','09A','09B','08','07','06','05','04','03','02','1'];
wzorydodostawki['P03']=['34','34A','34B','27','09','09A','09B','07','05','04','03','02','1'];
wzorydodostawki['P04']=['29','1'];
wzorydodostawki['P05']=['41','41A','41B','40','40A','39','39A','39B','36','35','32','32A','32B','31','31A','29','26G','26F','26E','26D','26C','24','23','23A','22','22A','22B','21A','21','20','19','12C','12','12A','12B','1'];
wzorydodostawki['P06']=['41','41A','41B','40','40A','39','39A','39B','35','32','32A','32B','31','31A','26H','26G','26F','26E','26D','26C','26','26A','26B','25','25A','25B','25C','24','23','23A','22','22A','22B','21A','21','20','19','1'];
wzorydodostawki['P07']=['41','41A','41B','40','40A','39','39A','39B','35','32','32A','32B','31','31A','26H','26G','26F','26E','26D','26C','26','26A','26B','25','25A','25B','25C','24','23','23A','22','22A','22B','21A','21','20','19','1'];
wzorydodostawki['P08']=['41','41A','41B','40','40A','39','39A','39B','38','38A','37','37A','36','35','32','32A','32B','31','31A','30','26G','26F','26E','26D','26C','24','23','23A','22','22A','22B','21A','21','20','19','12C','12','12A','12B','1'];
wzorydodostawki['T01']=['13'];
wzorydodostawki['T02']=['14','08','03'];
wzorydodostawki['T03']=['41','41A','41B','40','40A','39','39A','39B','26H','26G','26F','26D','26C','26','26A','26B'];
wzorydodostawki['T04']=['34','34A','34B','10','09','09A','09B','05','04','02'];
wzorydodostawki['T05']=['34','34A','34B','33','33A','28','27','18','17','16','15','14','13','11','10','09','09A','09B','08','05','04','03','02'];
wzorydodostawki['T06']=['31A','22','22A','22B','31','31A'];
wzorydodostawki['T07']=['38','38A','37','37A'];
wzorydodostawki['T08']=['12C','42'];
wzorydodostawki['X01']=['29','1'];
wzorydodostawki['X02']=['36','35','32','32A','32B','31','31A','29','26G','26F','26E','26D','26C','24','23','23A','22','22A','22B','21A','21','20','19','12C','12','12A','12B','1'];
wzorydodostawki['X03']=['41','41A','41B','40','40A','39','39A','39B','35','32','32A','32B','31','31A','26G','26F','26E','26D','26C','26','26A','26B','26H','25','25A','25B','25C','24','23','23A','22','22A','22B','21A','21','20','19','1'];
wzorydodostawki['X04']=['41','41A','41B','40','40A','39','39A','39B','38','38A','37','37A','36','35','32','32A','32B','31','31A','30','26G','26F','26E','26D','26C','26','26A','26B','26H','25','25A','25B','25C','24','23','23A','22','22A','22B','21A','21','20','19','1'];
wzorydodostawki['X05']=['41','41A','41B','40','40A','39','39A','39B','38','38A','37','37A','36','35','32','32A','32B','31','31A','30','26G','26F','26E','26D','26C','24','23','23A','22','22A','22B','21A','21','20','19','1'];
wzorydodostawki['X06']=['41','41A','41B','40','40A','39','39A','39B','35','32','32A','32B','31','31A','26H','26G','26F','26E','26D','26C','26','26A','26B','25','25A','25B','25C','24','23','23A','22','22A','22B','21A','21','20','19','1'];
wzorydodostawki['M01']=['12C','1'];
wzorydodostawki['M02']=['31A','22','22A','22B','31','31A','1'];
wzorydodostawki['M03']=['41','41A','41B','40','40A','39','39A','39B','26H','26G','26F','26D','26C','26','26A','26B','1'];
wzorydodostawki['M04']=['38','38A','37','37A','1'];
wzorydodostawki['A01']=['13','1'];
wzorydodostawki['B01']=['03','1'];
wzorydodostawki['B02']=['08','1'];
wzorydodostawki['B03']=['14','1'];
wzorydodostawki['C01']=['1','25C','26','26C','26D','26F','26G','26H'];
wzorydodostawki['C02']=['1','39','39A'];
wzorydodostawki['C03']=['1','40','40A','41','41A','41B'];
wzorydodostawki['D01']=['1','02','05'];
wzorydodostawki['D02']=['04','1'];
wzorydodostawki['D03']=['09','09A','09B','1'];
wzorydodostawki['D04']=['10','1'];
wzorydodostawki['D05']=['11','1'];
wzorydodostawki['D06']=['34','34A','34B','1'];
wzorydodostawki['E01']=['1','02','05'];
wzorydodostawki['E02']=['03','1'];
wzorydodostawki['E03']=['04','1'];
wzorydodostawki['E04']=['08','1'];
wzorydodostawki['E05']=['09','09A','09B','1'];
wzorydodostawki['E06']=['10','1'];
wzorydodostawki['E07']=['11','1'];
wzorydodostawki['E08']=['12C','1'];
wzorydodostawki['E09']=['13','1'];
wzorydodostawki['E10']=['14','1'];
wzorydodostawki['E11']=['15','1'];
wzorydodostawki['E12']=['16','1'];
wzorydodostawki['E13']=['17','1'];
wzorydodostawki['E14']=['18','1'];
wzorydodostawki['E15']=['27','1'];
wzorydodostawki['E16']=['28','1'];
wzorydodostawki['E17']=['33','33A','1'];
wzorydodostawki['E18']=['34','34A','34B','1'];
wzorydodostawki['F01']=['31A','1'];
wzorydodostawki['F02']=['22B','1'];
wzorydodostawki['G01']=['37','1'];
wzorydodostawki['G02']=['38','1'];
wzorydodostawki['H01']=['12C','42','1'];
wzorydodostawki['P00']=Array.from(wszystkiewzory);

koloryklamek={};
koloryklamek['P150p90s']=['10301']
koloryklamek['P050pME']=['10301']
koloryklamek['P050pMEx']=['10301']
koloryklamek['P050pMS']=['10301']
koloryklamek['P050pMSx']=['10301']
koloryklamek['Manitoba']=['10301','10302','10303','10304']
koloryklamek['ManitobaG']=['10301','10302','10303']
koloryklamek['Prestige']=['10301','10302','10303']
koloryklamek['Magnus']=['10301','10302','10303','10304']
koloryklamek['MagnusG']=['10301']
koloryklamek['Lambda']=['10302','10303']
koloryklamek['Tahoma']=['10301','10302']
koloryklamek['Prime']=['10301','10302']
koloryklamek['SlimSolo']=['10301','10304']
koloryklamek['PrestigeZ']=['10301','10302','10303','10304']
koloryklamek['MagnusZ']=['10301','10302']
koloryklamek['P150oL1']=['10301']
koloryklamek['P150oL2']=['10301']
koloryklamek['P090oL1']=['10301']
koloryklamek['P120t']=['10301','']
koloryklamek['P180t']=['10301']
koloryklamek['P120o45']=['10301','10304']
koloryklamek['P120o90']=['10301','10304']
koloryklamek['P120p45']=['10301','10304']
koloryklamek['P120p90']=['10301','10304']
koloryklamek['P150o45']=['10301','10304']
koloryklamek['P150o90']=['10301','10304']
koloryklamek['P150oL3']=['10301']
koloryklamek['P060oL3']=['10301','10304']
koloryklamek['P150o45x']=['10301','10304']
koloryklamek['P150o90x']=['10301','10304']
koloryklamek['P060o90']=['10301']
koloryklamek['P060o45']=['10301']
koloryklamek['P150p45']=['10301','10304']
koloryklamek['P150p90']=['10301','10304']
koloryklamek['P150p45x']=['10301','10304']
koloryklamek['P150p90x']=['10301','10304']
koloryklamek['-']=['10302','10303']
koloryklamek['PrestigeG']=['10301','10302']
koloryklamek['PrestigeZG']=['10301','10302']
koloryklamek['SlimSoloZ']=['10301','10304']
koloryklamek['PrestigeR']=['10302','10303']
koloryklamek['PrestigeRZ']=['10302','10303']
koloryklamek['LambdaR']=['10302','10303']
koloryklamek['MagnusR']=['10301','10302','10303','10304']
koloryklamek['ManitobaR']=['10301','10302','10303','10304']
koloryklamek['PrimeR']=['10301','10302']
koloryklamek['SlimSoloR']=['10301','10304']
koloryklamek['SlimSoloRZ']=['10301','10304']
koloryklamek['TahomaR']=['10301','10302']
koloryklamek['SlimSoloX']=['10301','10304']
koloryklamek['SlimSoloXZ']=['10301','10304']
koloryklamek['MagnusRZ']=['10301','10302','10303','10304']
koloryklamek['P150oL4']=['10301']
koloryklamek['Pock20']=['10301']
koloryklamek['Pock45']=['10301']
koloryklamek['Pock180']=['10301']
koloryklamek['P150oL6']=['10301']

koloryramek={};
koloryramek['10']=['10305']
koloryramek['11']=['10305']
koloryramek['12']=['10301','10304']
koloryramek['12A']=['10301']
koloryramek['12B']=['10301']
koloryramek['12C']=['10301','10304']
koloryramek['13']=['0']
koloryramek['14']=['0']
koloryramek['15']=['10305']
koloryramek['16']=['10305']
koloryramek['18']=['10305']
koloryramek['19']=['10301']
koloryramek['20']=['10301']
koloryramek['21']=['10301','10304']
koloryramek['22']=['10301']
koloryramek['22A']=['10301']
koloryramek['22B']=['10301']
koloryramek['23']=['10301']
koloryramek['24']=['10301']
koloryramek['25']=['10301','10304']
koloryramek['25A']=['10301','10304']
koloryramek['25B']=['10301','10304']
koloryramek['26']=['10301','10304']
koloryramek['26A']=['10301','10304']
koloryramek['26B']=['10301','10304']
koloryramek['26C']=['0']
koloryramek['26D']=['0']
koloryramek['26E']=['0']
koloryramek['26F']=['0']
koloryramek['26G']=['0']
koloryramek['27']=['0']
koloryramek['28']=['0']
koloryramek['29']=['10301','10304']
koloryramek['30']=['10301','10304']
koloryramek['31']=['10301','10304']
koloryramek['31A']=['10301','10304']
koloryramek['32']=['10301']
koloryramek['32A']=['10301']
koloryramek['32B']=['10301']
koloryramek['33']=['10305']
koloryramek['33A']=['10305']
koloryramek['34']=['10305']
koloryramek['34A']=['10305']
koloryramek['34B']=['10305']
koloryramek['35']=['10301']
koloryramek['36']=['10301','10304']
koloryramek['37']=['10301','10304']
koloryramek['37A']=['10301','10304']
koloryramek['38']=['10301','10304']
koloryramek['38A']=['10301','10304']
koloryramek['39']=['10301','10304']
koloryramek['39A']=['10301','10304']
koloryramek['39B']=['10301','10304']
koloryramek['04']=['10305']
koloryramek['05']=['10305']
koloryramek['06']=['10305']
koloryramek['03']=['10305']
koloryramek['02']=['10305']
koloryramek['1']=['0']
koloryramek['07']=['10305']
koloryramek['08']=['10305']
koloryramek['09']=['10305']
koloryramek['09A']=['10305']
koloryramek['09B']=['10305']
koloryramek['40']=['10301','10304']
koloryramek['40A']=['10301','10304']
koloryramek['41']=['10301','10304']
koloryramek['41A']=['10301','10304']
koloryramek['41B']=['10301','10304']
koloryramek['42']=['10305']
koloryramek['P00']=['0']
koloryramek['P01']=['10305']
koloryramek['P02']=['10305']
koloryramek['P03']=['10305']
koloryramek['P04']=['10301']
koloryramek['P05']=['10301','10304']
koloryramek['P06']=['10301','10304']
koloryramek['P07']=['10301','10304']
koloryramek['P08']=['10301','10304']
koloryramek['T01']=['0']
koloryramek['T02']=['0']
koloryramek['T03']=['0']
koloryramek['T04']=['0']
koloryramek['T05']=['0']
koloryramek['T06']=['0']
koloryramek['T07']=['0']
koloryramek['T08']=['0']
koloryramek['X01']=['10301','10304','10305']
koloryramek['X02']=['10301','10304']
koloryramek['X03']=['10301','10304']
koloryramek['X04']=['10301']
koloryramek['X05']=['10301','10304']
koloryramek['X06']=['10301','10304']
koloryramek['M01']=['10301','10304']
koloryramek['M02']=['10301','10304']
koloryramek['M03']=['10301','10304']
koloryramek['M04']=['10301','10304']
koloryramek['17']=['10305']
koloryramek['21A']=['10301','10304']
koloryramek['23A']=['10301']
koloryramek['26H']=['10301','10304']
koloryramek['25C']=['10301','10304']
koloryramek['A01']=['0']
koloryramek['B01']=['0']
koloryramek['B02']=['0']
koloryramek['B03']=['0']
koloryramek['C01']=['0']
koloryramek['C02']=['0']
koloryramek['C03']=['0']
koloryramek['D01']=['0']
koloryramek['D02']=['0']
koloryramek['D03']=['0']
koloryramek['D04']=['0']
koloryramek['D05']=['0']
koloryramek['D06']=['0']
koloryramek['E01']=['0']
koloryramek['E02']=['0']
koloryramek['E03']=['0']
koloryramek['E04']=['0']
koloryramek['E05']=['0']
koloryramek['E06']=['0']
koloryramek['E07']=['0']
koloryramek['E08']=['0']
koloryramek['E09']=['0']
koloryramek['E10']=['0']
koloryramek['E11']=['0']
koloryramek['E12']=['0']
koloryramek['E13']=['0']
koloryramek['E14']=['0']
koloryramek['E15']=['0']
koloryramek['E16']=['0']
koloryramek['E17']=['0']
koloryramek['E18']=['0']
koloryramek['F01']=['0']
koloryramek['F02']=['0']
koloryramek['G01']=['0']
koloryramek['G02']=['0']
koloryramek['H01']=['0']
koloryramek['FI01A']=['10301','']
koloryramek['G1A']=['10301','10304']
koloryramek['G1B']=['10301','10304']
koloryramek['G1C']=['10301','10304']
koloryramek['G2A']=['10301','10304']
koloryramek['G2B']=['10301','10304']
koloryramek['G3A']=['10301','10304']
koloryramek['F1B']=['10301','']
koloryramek['FI01C']=['10301','']
koloryramek['FI02A']=['10301','']
koloryramek['FI02B']=['10301','']
koloryramek['FI03A']=['10301','']
koloryramek['FI03B']=['10301','']
koloryramek['F4A']=['10301','']
koloryramek['FI04B']=['10301','']
koloryramek['F4C']=['10301','']
koloryramek['FI04D']=['10301','']
koloryramek['FI04E']=['10301','']
koloryramek['F5A']=['10301','']
koloryramek['FI05B']=['10301','']
koloryramek['F5C']=['10301','']
koloryramek['FI05D']=['10301','']
koloryramek['FI05E']=['10301','']
koloryramek['F6A']=['10301','']
koloryramek['F6B']=['10301','']
koloryramek['F6C']=['10301','']
koloryramek['F6D']=['10301','']
koloryramek['F6E']=['10301','']
koloryramek['F7A']=['10301','']
koloryramek['F7B']=['10301','']
koloryramek['F7C']=['10301','']
koloryramek['F7D']=['10301','']
koloryramek['F7E']=['10301','']
koloryramek['F8A']=['10301','']
koloryramek['FI09A']=['10301','']
koloryramek['F9B']=['10301','']
koloryramek['FI10A']=['10301','']
koloryramek['29A']=['10305']
koloryramek['F1D']=['10301','']
koloryramek['FI09C']=['10301','']




const url = '/api/storedoor';
const skala = 0.10;

const szybydane = {};
szybydane['8']={x:1010/2,y:395,width:390,height:970,offset:390/2};

tloczeniadane={};
tloczeniadane['39']={x:0,y:0,width:2056,height:1010,offset:0};






// const inoxdane = [
// {wzor:'04',width:600,height:300,top:50},
// {wzor:'12',width:250,height:1650,top:130},
// {wzor:'20',width:500,height:450*3,top:200}
//
// ];
//
// const szybydane =[
//   {wzor:'04',width:600,height:300,top:50},
//   {wzor:'12',width:170,height:1580,top:160 },
//   {wzor:'20',width:500,height:450*3,top:200}
// ];
//
// const tloczeniadane=[
//   {wzor:'04',width:600,height:600*1.95,top:500},
//   {wzor:'13',width:500,height:1650,top:100}
// ];
