import React from "react";
// import Navbar from "./components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Meal from "./components/Meal";
import Home from "./components/Home";
import { Provider } from 'react-redux';
import store from './store';
import Cart from "./components/Cart";

function App() {
  const user = localStorage.getItem("token");
  return (
    <Provider store={store}>
      <div>
        <Routes>
          {user && <Route path="/" exact element={<Home />} />}
          <Route path="/meal" element={<Meal />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
      </div>
    </Provider>
  );
}
export default App;
