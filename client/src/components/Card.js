import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';

const Card = ({ title, img, price, labels, drinks }) => {
  const [selectedDrinks, setSelectedDrinks] = useState([]);
  const dispatch = useDispatch();

  const handleDrinkSelection = (drinkId) => {
    const updatedDrinks = selectedDrinks.includes(drinkId)
      ? selectedDrinks.filter((id) => id !== drinkId)
      : [...selectedDrinks, drinkId];

    setSelectedDrinks(updatedDrinks);
  };

  const calculateTotalPrice = () => {
    const drinkTotal = selectedDrinks.reduce(
      (total, drinkId) =>
        total + drinks.find((drink) => drink.id === drinkId).price,
      0
    );

    return price + drinkTotal;
  };

  const handleAddToCart = () => {
    const total = calculateTotalPrice();
    dispatch(addToCart({ title, total }));
  };

  return (
    <div className="card mb-3">
      <img src={img} className="card-img-top" alt={title} style={{ height: '200px', objectFit: 'cover' }} />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-right">Price: ${price}</p>
        <h6>Labels:</h6>
        <ul className="list-unstyled">
          {labels.map((label) => (
            <li key={label.id}>{label.label}</li>
          ))}
        </ul>
        <h6>Drinks:</h6>
        <ul className="list-unstyled">
          {drinks.map((drink) => (
            <li key={drink.id}>
              <label>
                <input
                  type="checkbox"
                  value={drink.id}
                  onChange={() => handleDrinkSelection(drink.id)}
                />
                {drink.title} - ${drink.price}
              </label>
            </li>
          ))}
        </ul>
        <p className="text-right">Total Price: ${calculateTotalPrice()}</p>
        <button
          className="btn btn-primary align-self-end"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
