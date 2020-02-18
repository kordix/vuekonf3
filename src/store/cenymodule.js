const ceny = {
    state:{
        test:'test'
    },
    actions:{
        test(state,commit,rootstate){
            console.log(state.test);
            console.log(rootstate.automatyka);
        }
    },
    getters:{
        KopniakCena:(state,getters,rootState)=>{
            return rootState.kopniak.dane.find((el)=>el.artnr==rootState.product.kopniak).cena
          },
          EzaczepCena:(state,getters,rootState)=>{
            if(rootState.product.elektrozaczep=='J' && rootState.product.seria=='41'){
              return 180*3
            }else if (rootState.product.elektrozaczep=='J'){
              return 180
            }else{
              return 0
            }
          },
          SamozamykaczCena:(state,getters,rootState)=>{
            return rootState.samozamykacz.dane.find((el)=>el.artnr==rootState.product.samozamykacz).cena
          },
          WizjerCena:(state,getters,rootState)=>{
            return rootState.wizjerCena[rootState.product.wizjer][getters.seriac]
          },
          CenaKlamka:(state,getters,rootState)=>{
            let model = rootState.product.klamka+'_'+rootState.product.klamkakolor;
            let column = getters.seriac;
            let Manitoba_10304 = {"20":70,"30":60,"41":70};
            let Magnus_10304 = {"20":40,"30":60,"41":70};
            let PrestigeZ = {"20":200,"30":180,"41":200};
            let Prestige = {"20":160,"30":140,"41":160};
            let PrestigeZ_10304 = {"20":300,"30":280,"41":300};
            let MagnusZ = {"20":200,"30":180,"41":200};
            let PrestigeZG = {"20":255,"30":9999,"41":9999};
            // let MagnusG = {"20":,"30":,"41":};
            // let ManitobaG = {"20":,"30":,"41":};
            let priceokucia=0;
            if(model == 'Manitoba_10304') priceokucia = Manitoba_10304[column];
            if(model == 'Magnus_10304') priceokucia = 70;
            if(rootState.product.klamka == 'PrestigeZ') priceokucia = 200;
            if(rootState.product.klamka == 'Prestige') priceokucia = 160;
            if(model == 'PrestigeZ_10304') priceokucia=300;
            if(rootState.product.klamka=='MagnusZ') priceokucia=200;
            if(rootState.product.klamka=='PrestigeZG') priceokucia=255;
            if(rootState.product.klamka=='MagnusG') priceokucia=70;
            if(rootState.product.klamka=='ManitobaG') priceokucia=70;
            return priceokucia;
          },
          BasicPrice:(state,getters,rootState)=>{
            let column = getters.seriac;
            if (rootState.product.szyba != '00'){column += 's'}

            let output = 0;
      
            output =  rootState.cenytablica.find((el)=>el.model == rootState.product.wzor)[column];

            console.log(rootState.cenytablica);
            
      
            if(rootState.product.inoxstrona == "1" || rootState.product.inoxstrona == "2" ){
              output-= 200;
            }
       
            if(rootState.product.seria=='21'){
              output = parseInt(output)+680;
            }
      
            if(rootState.product.seria=='31'){
              output = parseInt(output)+750;
            }

            return output
          },
         
          CenaKlamka:(state,getters,rootState)=>{
            let model = rootState.product.klamka+'_'+rootState.product.klamkakolor;
            let column = getters.seriac;
            let Manitoba_10304 = {"20":70,"30":60,"41":70};
            let Magnus_10304 = {"20":40,"30":60,"41":70};
            let PrestigeZ = {"20":200,"30":180,"41":200};
            let Prestige = {"20":160,"30":140,"41":160};
            let PrestigeZ_10304 = {"20":300,"30":280,"41":300};
            let MagnusZ = {"20":200,"30":180,"41":200};
            let PrestigeZG = {"20":255,"30":9999,"41":9999};
            // let MagnusG = {"20":,"30":,"41":};
            // let ManitobaG = {"20":,"30":,"41":};
            let output =0;
            if(model == 'Manitoba_10304') output = Manitoba_10304[column];
            if(model == 'Magnus_10304') output = 70;
            if(rootState.product.klamka == 'PrestigeZ') output = 200;
            if(rootState.product.klamka == 'Prestige') output = 160;
            if(model == 'PrestigeZ_10304') output=300;
            if(rootState.product.klamka=='MagnusZ') output=200;
            if(rootState.product.klamka=='PrestigeZG') output=255;
            if(rootState.product.klamka=='MagnusG') output=70;
            if(rootState.product.klamka=='ManitobaG') output=70;

            return output

          },
          CenaPochwyt:(state,getters,rootState)=>{
            if(rootState.product.sposobotw=='KK') return;
            if(getters.activeKlamka.typ =='KK') return;
            let kolorlocal = '';
            if(rootState.product.klamkakolor=='10301') kolorlocal = 'INOX';
            if(rootState.product.klamkakolor=='10304') kolorlocal = 'BLACK';
      
            let model = rootState.product.klamka+'_'+kolorlocal;
            let column = rootState.product.sposobotw;

            let output = 0;
      
            output =  rootState.cenyPochwytTablica.find((el)=>el.model == model)[column];

            return output;
      
          },
          CenaAutomatyka(state,getters,rootState){
            if(rootState.product.automatyka=='B'){return 3300}
            else if(rootState.product.automatyka=='K'){return 3050} 
            else if(rootState.product.automatyka=='Z'){return 3050} 
            else return 0
          },
          PriceAll(state,getters,rootState){
            return parseInt(getters.BasicPrice) + parseInt(getters.EzaczepCena) + parseInt(getters.CenaOkucia) + parseInt(getters.SamozamykaczCena)+parseInt(getters.KopniakCena)+parseInt(getters.BikolorCena)+parseInt(getters.MixkolorCena)+parseInt(getters.CenaAutomatyka);
                
      
          },
          MixkolorCena(state,getters,rootState){
            if(rootState.product.wariant != 'M'){
              return 0
            }
      
            if(rootState.product.wariant == 'M'){
              return 200
            }
          },  

          CenaOkucia:(state,getters,rootState)=>{
            return rootState.product.sposobotw=='KK' ||  rootState.product.sposobotw=='KG' ? getters.CenaKlamka : getters.CenaPochwyt;
          },
          BikolorCena(state,getters,rootState){
            if(rootState.product.wariant != 'B'){
              return 0
            }
      
            if(rootState.product.kolor == rootState.product.kolor2){
              return 0
            }
            
            if (getters.seriac=='20'){
               return 280 
            }else{
              return 380    
            }
          },
    }
}

export default ceny;