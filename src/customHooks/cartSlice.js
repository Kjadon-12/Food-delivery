import { createSlice, current } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items: []
    },
    reducers:{
        addItems: (state , action)=>{
            //directly mutating our state here
            console.log(state); //this will not give state so we will use current(state)
            
          state.items.push(action.payload)
          console.log(current(state))
        },

        updateItemQuantity(state, action) {
            const { itemId, quantity } = action.payload;
            const itemToUpdate = state.items.find((item) => item.id === itemId);
            if (itemToUpdate) {
              itemToUpdate.quantity = quantity;
            //   console.log(current(state))
            }
            
          },
          removeItemFromCart(state, action) {
            const {itemId} = action.payload;
            //console.log(itemId)
            state.items = state.items.filter(item => item.id !== itemId);
          },
        clearCart: (state, action)=>{
            //state = [] will not change whole 
            //either mutate the existing state or return new state(return [] =>this new state replaced with existing state)
           state.items.length = 0;
        }
    }
})

export const {addItems ,updateItemQuantity, removeItemFromCart , clearCart} = cartSlice.actions
export default cartSlice.reducer;