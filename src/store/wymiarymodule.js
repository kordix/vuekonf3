const wymiaryexport = {
    state:{
        wysokosci:[ 
            ["20",2070],
            ["21",2080],
            ["30",2087],
            ["31",2100],
            ["41",2100]
        ],
        szerokosci:[
            ["20","75",858],
            ["20","80",908],
            ["20","85",958],
            ["20","90",1008],
            ["20","100",1108],
            ["21","75",875],
            ["21","80",925],
            ["21","85",975],
            ["21","90",1025],
            ["21","100",1125],
            ["30","75",884],
            ["30","80",934],
            ["30","85",984],
            ["30","90",1034],
            ["30","100",1134],
            ["31","75",911],
            ["31","80",961],
            ["31","85",1011],
            ["31","90",1061],
            ["31","100",1161],
            ["41","75",953],
            ["41","80",1003],
            ["41","85",1053],
            ["41","90",1103]
        ]

    },
    getters:{
        szerokosc:(state,getters,rootState)=>{
        return state.szerokosci.filter((el)=>el[0]==rootState.product.seria).find((el)=>el[1]==rootState.product.kodrozmiaru)[2]
        },
        wysokosc:(state,getters,rootState)=>{
            return state.wysokosci.find((el)=>el[0]==rootState.product.seria)[1]
            }
    }

}

export default wymiaryexport;