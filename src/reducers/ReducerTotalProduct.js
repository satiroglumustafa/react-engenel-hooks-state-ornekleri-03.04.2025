export const ReducerTotalProduct = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const alreadyInCart = state.cartItems.find(item => item.id === action.payload.id)
      if (alreadyInCart) {
        return state
      }
      return {
        ...state,
        count: state.count + 1,
        cartItems: [...state.cartItems, action.payload], // tüm ürün objesini ekliyoruz
        totalPrice: state.totalPrice + Number(action.payload.price)
      }

    case "REMOVE_FROM_CART":
      const removedItem = state.cartItems.find(item => item.id === action.payload.id)
      if (!removedItem) return state

      return {
        ...state,
        count: state.count > 0 ? state.count - 1 : 0,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id),
        totalPrice: state.totalPrice - Number(removedItem.price)
      }

    case "RESET":
      return {
        count: 0,
        cartItems: [],
        totalPrice: 0
      }
    default:
      return state
  }
}



export const initialProductState = {
  count: 0,
  cartItems: [], // artık array of product objeleri
  totalPrice: 0
}

