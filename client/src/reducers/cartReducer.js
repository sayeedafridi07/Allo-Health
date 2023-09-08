const storedCart = localStorage.getItem('cart');

const initialState = {
  items: storedCart ? JSON.parse(storedCart) : [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const updatedCart = [...state.items, action.payload];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return {
        ...state,
        items: updatedCart,
      };
    case 'REMOVE_FROM_CART':
      const filteredCart = state.items.filter(item => item.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(filteredCart));
      return {
        ...state,
        items: filteredCart,
      };
   
    default:
      return state;
  }
};

export default cartReducer;
