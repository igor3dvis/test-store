import React, { useState, useEffect } from "react";
import "./AdminPage.css";
import AdminCard from "../../components/AdminCard/AdminCard";
import Modal from "../../components/Modal/Modal";
import { getAllGood } from "../../functions/fetch/fetch";

const AdminPage = () => {
  const [good, setGood] = useState([]);
  const [visibleModalAdd, setVisibleModalAdd] = useState(false);

  useEffect(() => {
    (async () => {
      // getAllGood from "fetch"
      const res = await getAllGood();
      console.log(res);
      setGood(res);
    })();
  }, []);

  const showModalAddGood = () => {
    setVisibleModalAdd((cur)=> !cur);
  };

  return (
    <div className="container admin-wrapper">
      <div className="admin-top-panel">
        <button className="admin-btn-add" onClick={showModalAddGood}>
          Add new good
        </button>
        <select type="select" >
          <option value="allcategory">all categories</option>
          <option value="sport">sport</option>
          <option value="casual">casual</option>
        </select>
        <input type="text" placeholder="search..." />
      </div>
      {visibleModalAdd && (
        <>
          <Modal/>
        </>
      )}
      {good.map((elem) => {
        return (
          <AdminCard
            key={elem.id}
            img={elem.id}
            title={elem.title}
            category={elem.category}
            price={elem.price}
          />
        );
      })}
    </div>
  );
};

export default AdminPage;
