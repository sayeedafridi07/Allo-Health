import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../selectors/cartSelectors";

function Navbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const cartItems = useSelector(selectCartItems);

  return (
    <>
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <NavLink to="/">
              <span className="navbar-brand mb-0 fs-2 text-decoration-none">Allo Food</span>
            </NavLink>
          </div>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 text-center">
            <li>
              <NavLink
                to="/"
                className="nav-link px-2 link-body-emphasis nav-item-large"
                style={{ fontSize: "1.5em" }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/meal"
                className="nav-link px-2 link-body-emphasis nav-item-large"
                style={{ fontSize: "1.5em" }}
              >
                Meals
              </NavLink>
            </li>
          </ul>
          <div>
            <NavLink
              to="/cart"
              className="nav-link px-2 link-body-emphasis nav-item-large"
              style={{ fontSize: "1.5em" }}
            >
              🛒 <span className="badge bg-primary">{cartItems.length}</span>
            </NavLink>
          </div>
          <div className="dropdown text-end">
            <NavLink
              href="/"
              className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
                alt="user"
                width={32}
                height={32}
                className="rounded-circle"
              />
            </NavLink>
            <ul className="dropdown-menu text-small">
              <li className="dropdown-item" onClick={handleLogout}>
                Sign out
              </li>
            </ul>
          </div>
        </header>
      </div>
    </>
  );
}

export default Navbar;
