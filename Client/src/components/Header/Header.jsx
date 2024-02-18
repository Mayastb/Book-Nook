import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
          Embark on a literary journey at Book Nook
          </h2>
          <br />
          <p className="header-text fs-18 fw-3">
          your gateway to captivating stories and timeless wisdom.
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
