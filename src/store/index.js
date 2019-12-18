import Vue from 'vue'
import Vuex from 'vuex'
import all from './dane.js'
import ceny from './ceny.js'

Vue.config.devtools = true

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tabs2:[{bez:'Typ',bez2:'typ',available:false,shown:true,offset:2 },
    // {bez:'Seria',bez2:'serię',current:false,available:true,show:false,offset:5,hover:false},
    {bez:'Model',bez2:'model',available:true,shown:false,offset:8},
    {bez:'Kolor',bez2:'kolor',available:true,shown:false,offset:6},
    {bez:'Szyba',bez2:'szybę',available:true,shown:false,offset:8},
    {bez:'Okucia',bez2:'okucia',available:true,shown:false,offset:10},
    // {bez:'Akcesoria',bez2:'akcesoria',current:false,available:true,show:false,offset:17,hover:false},
    // {bez:'Dostawka',bez2:'dostawkę',current:false,available:false,show:false,offset:0,hover:false},
    {bez:'Podsumowanie',bez2:'',available:true,shown:false,offset:30},
  ],
  selectedwidok:'Z',
  activeTab:'Model',
    wzor:{dane:all.wzorytablica},
    inoxlista:all.inoxlista,
    inoxkolor:{dane:[{artnr:'10304',bez:'Black',current:false},{artnr:'10301',bez:'Inox',current:false}]},
    inoxstrona:{dane:[{artnr:'0',bez:'obustronnie',current:false},{artnr:'1',bez:'wewnątrz',current:false},{artnr:'2',bez:'zewnątrz',current:false}]},
    koloryramek:all.koloryramek,
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
    {artnr:'KG',bez:'Klamko-gałka'},
    {artnr:'KK',bez:'Klamko-klamka'},
    {artnr:'PP',bez:'Pochwyt-pochwyt'},
    {artnr:'KP',bez:'Klamko-pochwyt'}
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
    product:{
      kolekcja:'all',
      wzor: '12',
      kolor: '04',
      kolor2: '06',
      szyba:'06',
      ramka:'',
      seria:'20',
      kierunek:'Lw',
      sposobotw:'KK',
      klamka:'Magnus',
      klamkakolor:'10301',
      inoxstrona:'',
      inoxkolor:'',
      logoobject:null
    },
    cenytablica:ceny,
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
   }
  },
  getters:{
    kolorFilter: state => {
    return state.kolor.dane.filter((el)=>el.typ == state.activeKolorTyp);
  },
  activeModel: state => {
    return state.wzor.dane.find((el)=>el.artnr == state.product.wzor);
  },
  activeKolekcja: state => {
    return state.kolekcja.dane.find((el)=>el.artnr == state.product.kolekcja);
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
         // console.log(state.klamka.dane.filter((el)=>state.wzorydoklamki[el.artnr].indexOf('12')>=0));
       return state.klamka.dane.filter((el)=>state.wzorydoklamki[el.artnr].indexOf(getters.activeModel.artnr)>=0).filter((el)=>el.typ==getters.activeSotw.artnr)
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
        return state.inoxlista.indexOf(getters.activeModel.artnr)>=0 ? true : false
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
    tabsFilter:(state,getters)=>{
      return state.tabs2.filter((el)=>el.available==true)
    },
    cena: (state)=>{
      if(state.cenytablica.find((el)=>el.model == state.product.wzor)[state.product.seria]){
      return state.cenytablica.find((el)=>el.model == state.product.wzor)[state.product.seria]
    } else {
      return 0
    }
    }

  },

  modules: {
  }
})
