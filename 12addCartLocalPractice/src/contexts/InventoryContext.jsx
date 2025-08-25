import { useContext,createContext } from "react";

export const InventoryContext=createContext({
    products:[
        {
            id:'',
            title:'',
            price:'',
            description:'',
        }
    ],
    addProduct:({newProduct})=>{},
    updateProduct:(id,{product})=>{}

})

export const useInventory=()=>{
    return useContext(InventoryContext);
}

export const InventoryProvider=InventoryContext.Provider