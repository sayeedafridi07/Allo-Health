export const addToCart = (item) => {
  return {
    type: 'ADD_TO_CART',
    payload: { ...item, id: Math.random() }, 
  };
};

  
  export const removeFromCart = (id) => {
    return {
      type: 'REMOVE_FROM_CART',
      payload: id,
    };
  };
  
  export const increaseQuantity = (id) => {
    return {
      type: 'INCREASE_QUANTITY',
      payload: id,
    };
  };
  