import Vue from 'vue'
import Vuex from 'vuex'
import all from './dane.js'
import ceny from './ceny.js'
import cenyPochwyt from './cenypochwyt.js'
 import cenymodule from'./cenymodule.js'


Vue.config.devtools = true

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    ceny:cenymodule
  },
  state: {
    seria:{
      dane:[
      {artnr:'20',bez:'Premium'},
      {artnr:'21',bez:'Premium Termo'},
      {artnr:'30',bez:'Optimum'},
      {artnr:'31',bez:'Optimum Termo'},
      {artnr:'41',bez:'Prestige Termo Lux'}
    ]
    },
    tabs2:[{bez:'Typ',bez2:'typ',available:false,shown:true,offset:2 },
    {bez:'Seria',bez2:'serię',available:true,shown:true,offset:5},
    {bez:'Model',bez2:'model',available:true,shown:false,offset:8},
    {bez:'Kolor',bez2:'kolor',available:true,shown:false,offset:6},
    {bez:'Szyba',bez2:'szybę',available:true,shown:false,offset:8},
    {bez:'Okucia',bez2:'okucia',available:true,shown:false,offset:10},
    {bez:'Akcesoria',bez2:'akcesoria',available:true,shown:false,offset:17},
    // {bez:'Dostawka',bez2:'dostawkę',available:false,show:false,offset:0,hover:false},
    {bez:'Podsumowanie',bez2:'',available:true,shown:false,offset:30},
  ],
  mixkolorlista:['F1A','F1B','F1C','F1D','F2A','F2B','F4A','F4B','F4C','F4D','F4E','F6A','F6B','F6C','F6D','F6E'],
  selectedwidok:'Z',
  activeTab:'Seria',
    wzor:{dane:all.wzorytablica},
    inoxlista:all.inoxlista,
    inoxkolor:{dane:[{artnr:'10301',bez:'Inox'},{artnr:'10304',bez:'Black'}]},
    inoxstrona:{dane:[{artnr:'0',bez:'obustronnie'},{artnr:'1',bez:'wewnątrz'},{artnr:'2',bez:'zewnątrz'}]},
    koloryramek:all.koloryramek,
    wariant:{dane:[{artnr:'S',bez:'Standard'},{artnr:'B',bez:'Bikolor'},{artnr:'M',bez:'Mixkolor'}]},
    kolor:{dane:all.kolortablica},
    szyba:{dane:all.szybatablica},
    kolekcja:{dane:all.kolekcjatablica},
    przypisaniaszyb:all.przypisaniaszyb,
    kierunek:{dane:[
      {artnr:'Lw',bez:'Lewe do wewnątrz'},
      {artnr:'Lz',bez:'Lewe do zewnątrz'},
      {artnr:'Pw',bez:'Prawe do wewnątrz'},
      {artnr:'Pz',bez:'Prawe do zewnątrz'}]},
   sposobotw:{dane:[
     {artnr:'KK',bez:'Klamko-klamka'},
     {artnr:'KP',bez:'Klamko-pochwyt'},
     {artnr:'PP',bez:'Pochwyt-pochwyt'},
    {artnr:'KG',bez:'Klamko-gałka'}
    ]},
    klamka:{dane:all.klamkatablica},
    wzorydoklamki:all.wzorydoklamki,
    klamkakolor:{dane:[
      {artnr:'10301',bez:'Inox'},
      {artnr:'10302',bez:'Stare Złoto'},
      {artnr:'10303',bez:'Tytan'},
      {artnr:'10304',bez:'Black'} ]},
    koloryklamek:all.koloryklamek,
    activeKolorTyp:'DEK',
    samozamykacz:{dane:[
      {artnr:'-',bez:'Brak',cena:0},
      {artnr:'LN',bez:'Listwowy nawierzchniowy',cena:630},
      {artnr:'LC',bez:'Listwowy chowany',cena:720},
      {artnr:'R',bez:'Z ramieniem',cena:250},
      {artnr:'RB',bez:'Z ramieniem i blokadą',cena:380},
      {artnr:'W',bez:'Tylko wzmocnienie pod samozamykacz',cena:60}
    ]},
    kolorsam:{bez:'Kolor samozamykacza', dane:[
      {artnr:'srebrny',bez:'Srebrny'},
      {artnr:'braz',bez:'Brązowy'}
    ]},
    wizjer:{bez:'Wizjer',dane:[
      {artnr:'-',bez:'Brak' },
      {artnr:'S',bez:'Szerokokątny' },
      {artnr:'C',bez:'Cyfrowy' }
    ]},
    wizjerCena:{
      '-':{20:0,30:0,41:0},
      'S':{20:25,30:30,41:35},
      'C':{20:380,30:380,41:380}
    },
    kopniak:{bez:'Kopniak',dane:[
      {artnr:'-',bez:'Brak',cena:0},
      {artnr:'1',bez:'Wewnątrz',cena:80 },
      {artnr:'2',bez:'Zewnątrz',cena:80 },
      {artnr:'3',bez:'Obustronnie',cena:160 }
    ]},
    elektrozaczep:{bez:'Elektrozaczep',dane:[
      {artnr:'N',bez:'NIE' },
      {artnr:'J',bez:'TAK' },
    ]},
    wkladka:{bez:'Wkładka', dane:[
    {artnr:'INVEST',bez:'Wkładka Investlock' },
    {artnr:'KL_C',bez:'Wkładka klasy C wg oferty' },
    {artnr:'STD',bez:'Wkładka standard wg oferty' }
    ]},
    automatyka:{bez:'System automatycznego otwierania', dane:[
    {artnr:'-',bez:'Brak'},
    {artnr:'B',bez:'Biometryczny'},
    {artnr:'K',bez:'Kodowy'},
    {artnr:'Z',bez:'Zbliżeniowy'}

    ]},
    typ:{bez:'Wybierz produkt',dane:[{artnr:'D1',bez:'Drzwi 1-skrzydłowe',current:true},
    // {artnr:'D1F01',bez:'Drzwi z dostawką po lewej',current:false},
    // {artnr:'D1F02',bez:'Drzwi z dostawką po prawej',current:false},
    // {artnr:'D1F03',bez:'Drzwi z dostawkami bocznymi',current:false},
    // {artnr:'D1N01',bez:'Drzwi z naświetlem bocznym po lewej',current:false},
    {artnr:'D1N02',bez:'Drzwi z naświetlem bocznym po prawej ',current:false},
    // {artnr:'D1N03',bez:'Drzwi z naświetlami bocznymi',current:false},
    // {artnr:'D1N04',bez:'Drzwi z naświetlem górnym',current:false},
    // {artnr:'D1N05',bez:'Drzwi z naświetlem górnym i bocznym lewym',current:false},
    // {artnr:'D1N06',bez:'Drzwi z naświetlem górnym i bocznym prawym',current:false},
    // {artnr:'D1N07',bez:'Drzwi z naświetlem górnym i bocznymi',current:false}
    // {artnr:'D2CL',bez:'Drzwi 2-skrzydłowe skrzydło czynne po lewej',current:false},
    // {artnr:'D2CP',bez:'Drzwi 2-skrzydłowe skrzydło czynne po prawej',current:false}
    ]},


    product:{
      kolekcja:'all',
      wzor: '01',
      wariant:'S',
      kolor: '04',
      kolor2: '04',
      szyba:'00',
      ramka:'',
      seria:'30',
      kierunek:'Pw',
      sposobotw:'KK',
      klamka:'Magnus',
      klamkakolor:'10301',
      inoxstrona:'',
      inoxkolor:'',
      samozamykacz:'-',
      samozamykaczKolor:'-',
      wizjer:'-',
      kopniak:'-',
      elektrozaczep:'N',
      automatyka:'-',
      typ:'D1'
    },
    cenytablica:ceny,
    cenyPochwytTablica:cenyPochwyt,
    priceokucia:0,
    basicprice:0,

    backgrounds:[
   {url:'/images/backgrounds/1.jpg',x:330,y:312,scalex:0.15,scaley:0.15},
   {url:'/images/backgrounds/2.jpg',x:159,y:325,scalex:0.11,scaley:0.11},
   {url:'/images/backgrounds/3.jpg',x:432,y:215,scalex:0.1,scaley:0.12}
    ],
    activebackground:{url:'/images/backgrounds/1.jpg',x:330,y:312,scalex:0.15,scaley:0.15},
    exportImageObj:null,
    exportImageObjInner:null,
    custombackgroundimg:null


  },
  mutations: {
    setActiveWzor(state,val){
      state['activeWzor'] = val;
    },
    setActiveTab(state,val){
      state.activeTab=val;
      state.tabs2.find((el)=>el.bez==val).shown=true;
    },
    setProductAttribute(state,payload){
      state.product[payload.attr]=payload.val;
    },
    setActiveBackground(state,payload){
      state.activebackground=payload;
    },
    setNextTab(state){
      let num = state.tabs2.findIndex((el)=>el.bez==state.activeTab);
      let tab = state.tabs2.filter((el,index)=>index > num)[0].bez;
      state.activeTab=tab;
    },
    setPrevTab(state){
      let num = state.tabs2.findIndex((el)=>el.bez==state.activeTab);
      let tab = state.tabs2[num-1].bez;
      state.activeTab=tab;
    },
    manipulateTab(state,payload){
      state.tabs2.find((el)=>el.bez=='Szyba').available=payload;

    }
  },
  actions: {
    setActiveWzor(context,val){
      context.commit('setActiveWzor',val)
    },
    setProductAttribute(context,payload){
      context.commit('setProductAttribute',payload);
    },
    setActiveTab(context,val){
      context.commit('setActiveTab',val)
    },
    setActiveBackground(context,payload){
     context.commit('setActiveBackground',payload)
   },
   setNextTab(context){
     context.commit('setNextTab');
   },
   setPrevTab(context){
     context.commit('setPrevTab');
   },
   manipulateTab(context,payload){
     context.commit('manipulateTab',payload);
   }

  },
  getters:{
    kolorFilter: (state,getters) => {
      let filtered = state.kolor.dane.filter((el)=>el.typ == state.activeKolorTyp);

      if(state.product.seria.indexOf('1') == -1 ){
        filtered = filtered.filter((el)=>el.artnr != '11').filter((el)=>el.artnr != '13').filter((el)=>el.artnr != '12')
      }

      if(getters.activeModel.typ == 'PCV' && state.product.szyba != '00'){
        filtered = filtered.filter((el)=> el.artnr != '11').filter((el)=>el.artnr != '13')
      }

      if(getters.activeModel.typ == 'PCV'){
        filtered = filtered.filter((el)=> el.artnr != '14')
      }

    return filtered;
  },
  wariantFilter: state => {
      return (state.mixkolorlista.indexOf(state.product.wzor) == -1 ) ? state.wariant.dane.slice(0,2) : state.wariant.dane.filter((el)=>el.artnr != 'B')
    },
    activeSeria: state => {
      return state.seria.dane.find((el)=>el.artnr == state.product.seria);
    },
  activeModel: state => {
    return state.wzor.dane.find((el)=>el.artnr == state.product.wzor);
  },
  activeKolekcja: state => {
    return state.kolekcja.dane.find((el)=>el.artnr == state.product.kolekcja);
  },
  activeKolor: state => {
    return state.kolor.dane.find((el)=>el.artnr == state.product.kolor);
  },
  activeKlamka: state => {
    return state.klamka.dane.find((el)=>el.artnr == state.product.klamka);
  },
  activeKlamkaKolor: state => {
    return state.klamkakolor.dane.find((el)=>el.artnr == state.product.klamkakolor);
  },
  activeSotw: state => {
    return state.sposobotw.dane.find((el)=>el.artnr == state.product.sposobotw);
  },
  activeSzyba: state => {
    return state.szyba.dane.find((el)=>el.artnr == state.product.szyba);
  },
  activeKierunek: state => {
    return state.kierunek.dane.find((el)=>el.artnr == state.product.kierunek);
  },
  activeWizjer: state => {
    return state.wizjer.dane.find((el)=>el.artnr == state.product.wizjer);
  },
  activeSamozamykacz: state => {
    return state.samozamykacz.dane.find((el)=>el.artnr == state.product.samozamykacz);
  },
  activeSamozamykaczKolor: state => {
    return state.kolorsam.dane.find((el)=>el.artnr == state.product.samozamykaczKolor);
  },
  activeAutomatyka: state => {
    return state.automatyka.dane.find((el)=>el.artnr == state.product.automatyka);
  },
  activeEzaczep: state => {
    return state.elektrozaczep.dane.find((el)=>el.artnr == state.product.elektrozaczep);
  },


  kolorc: state => {
      return (state.selectedwidok=='W' && state.product.wariant=='B') ? state.product.kolor2 : state.product.kolor
  },
  odpszyb: state => {
    return state.wzor.dane.find((el)=>el.artnr == state.product.wzor).odpszyb;
  },
  odpszybkonf: state => {
    return state.wzor.dane.find((el)=>el.artnr == state.product.wzor).odpszybkonf;
  },
  inoxpelne:(state,getters) => {
    if(typeof(getters.activeModel.typ)=='undefined'){
      return false
    }else if (getters.activeModel.typ.toUpperCase()=='INOX' && state.selectedwidok=='Z' && state.product.inoxstrona=='1'){
      return true
    }else if (getters.activeModel.typ.toUpperCase()=='INOX' && state.selectedwidok=='W' && state.product.inoxstrona=='2'){
      return true
    }else{
      return false
    }
  },
  szybyFilter: (state,getters)=>{
      if(typeof(state.przypisaniaszyb[state.product.wzor])!='undefined'){
      return state.szyba.dane.filter((el)=>state.przypisaniaszyb[state.product.wzor].indexOf(el.artnr)>=0 );
    }else {
      return []
    }
  },
  klamkifilter:(state,getters) => {
       if(getters.activeModel && getters.activeSotw){
       return state.klamka.dane.filter((el)=>state.wzorydoklamki[el.artnr].indexOf(state.product.wzor)>=0).filter((el)=>el.typ==state.product.sposobotw)
     }else{
       return []
     }
   },
   klamkakolorfilter:(state,getters) => {
    if(state.product.klamka){
      return state.klamkakolor.dane.filter((el)=>state.koloryklamek[state.product.klamka].indexOf(el.artnr)>=0)
    }else{
      return []
    }
  },

   wzorFilter:(state,getters) => {
     return getters.activeKolekcja.artnr != 'all' ? state.wzor.dane.filter((el)=>el.typ == getters.activeKolekcja.artnr) : state.wzor.dane;
   },
   showInox:(state,getters) => {
      if(getters.activeModel){
        return state.inoxlista.indexOf(state.product.wzor)>=0 ? true : false
      }else{
        return false
      }
    },
    ramkakolorfilter:(state,getters)=>{
    if(getters.activeModel.artnr){
      if(getters.activeModel.typ == 'INOX'){
      return state.inoxkolor.dane.filter((el)=>state.koloryramek[getters.activeModel.artnr].indexOf(el.artnr)>=0)
      }
    }else{
      return []
     }
    },
    stronaramkifilter:(state) =>{
     return state.product.szyba!='00' ? state.inoxstrona.dane.slice(0,1) : state.inoxstrona.dane;
   },
   samozamykaczFilter:(state) => {
     if(state.product.seria!='31' && state.product.seria!='41'){
       return state.samozamykacz.dane.filter((el)=>el.artnr != 'LC')
     }else{
       return state.samozamykacz.dane
   }},
   samkolorfilter:(state)=>{
     if(state.product.samozamykacz=='LC' || state.product.samozamykacz=='LN' ){
       return state.kolorsam.dane.slice(0,1);
     }else{
       return state.kolorsam.dane
     }

   },
   seriac:(state)=>{
     if(state.product.seria=='21'){ return '20'}
     else if(state.product.seria=='31'){return '30'}
     else {return state.product.seria}
   },

    tabsFilter:(state,getters)=>{
      return state.tabs2.filter((el)=>el.available==true)
    },

  

  }
})
