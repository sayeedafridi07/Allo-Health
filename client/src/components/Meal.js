import React, { useState } from "react";
import Card from "./Card";

const Meal = ({ data }) => {
  const [selectedLabel, setSelectedLabel] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [cart, setCart] = useState([]);
  const itemsPerPage = 3;

  const handleLabelChange = (label) => {
    setSelectedLabel(label);
    setCurrentPage(1);
  };

  const addToCart = (title, total) => {
    setCart([...cart, { title, total }]);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.meals
    .filter(
      (meal) => selectedLabel === "all" || meal.labels.includes(selectedLabel)
    )
    .slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="d-flex justify-content-center mb-4 text-center">
        <button
          className={`btn mx-2 ${
            selectedLabel === "all" ? "btn-primary" : "btn-secondary"
          }`}
          onClick={() => handleLabelChange("all")}
        >
          All
        </button>
        {data.labels.map((label) => (
          <button
            key={label.id}
            className={`btn mx-2 ${
              selectedLabel === label.id ? "btn-primary" : "btn-secondary"
            }`}
            onClick={() => handleLabelChange(label.id)}
          >
            {label.label}
          </button>
        ))}
      </div>
      <div className="container">
        <div className="row">
          {currentItems.map((meal) => (
            <div key={meal.id} className="col-md-4 mb-4">
              <Card
                title={meal.title}
                img={meal.img}
                price={meal.price}
                labels={data.labels.filter((label) =>
                  meal.labels.includes(label.id)
                )}
                drinks={meal.drinks}
                addToCart={addToCart}
              />
            </div>
          ))}
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => paginate(currentPage - 1)}
            >
              Previous
            </button>
          </li>
          <li
            className={`page-item ${
              indexOfLastItem >= data.meals.length ? "disabled" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => paginate(currentPage + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
      <div className="mt-4">
        <h4>Cart</h4>
        {cart.map((item, index) => (
          <div key={index}>
            <p>
              {item.title} - ${item.total}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meal;
