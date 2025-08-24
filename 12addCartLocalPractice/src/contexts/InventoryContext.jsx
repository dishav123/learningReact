import { useContext,createContext } from "react";

export const InventoryContext=createContext({
    Inventory:[
        {
            id:'',
            title:'',
            price:'',
            quantity:'',
            image:''
        }
    ],
    addProduct:(title,price,quantity,image)=>{},
    updatePrice:(id)=>{},
    updateQuantity:(id)=>{},
    deleteProduct:(id)=>{}
})

export const useInventory=()=>{
    return useContext(InventoryContext);
}

export const InventoryProvider=InventoryContext.Provider