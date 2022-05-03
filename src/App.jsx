import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Catalog from "./pages/Catalog/Catalog";
import Basket from "./pages/Basket/Basket";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import AdminPage from "./pages/AdminPage/AdminPage";
//import modalDeclarationsData from "./components/Modal/modalDeclaration";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
