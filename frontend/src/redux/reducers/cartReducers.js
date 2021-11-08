import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload
      const existItem = state.cartItems.find(
        (currentItem) => currentItem.product === item.product
      )

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((originalItem) =>
            originalItem.product === existItem.product ? item : originalItem
          ),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        }
      }

    default:
      return state
  }
}
