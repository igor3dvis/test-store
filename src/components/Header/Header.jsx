import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  // let url = useLocation();
  // console.log(url);
  return (
    <div className="header-wrapper">
      <h1>H E A D E R</h1>
      <nav className="navbar-wrapper">
        <ul className="navbar-list">
          <li className="navbar-item"><Link to="/">home</Link></li>
          <li className="navbar-item"><Link to="/catalog">catalog</Link></li>
          <li className="navbar-item"><Link to="/basket">basket</Link></li>
        </ul>
        <span className="navbar-admin"><Link to="/admin">admin panel</Link></span>
      </nav>
    </div>
  );
};
export default Header;

{
  /* <Link to={`${url.pathname}/catalog`}>Catalog</Link>
        <Link to={`${url.pathname}/basket`}>Korzina</Link> */
}
