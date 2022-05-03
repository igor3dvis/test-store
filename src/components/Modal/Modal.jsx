import React, { useState } from "react";
import "./Modal.css";

const Modal = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [describe, setDescribe] = useState("");
  const [price, setPrice] = useState(null);
  const [pict, setPict] = useState(null);

  let textInputRefer = React.createRef();

  const addItemToCatalog = () => {
    console.log(textInputRefer.current.value);
    setTitle("");
    setCategory("");
    setDescribe("");
    setPrice(null);
    setPict(null);
  };

  return (
    <div className="modal">
      <div className="modal__top">
        <button className="modal-btn-close">X</button>
      </div>
      <div className="modal__body">
        <div className="picture">pic</div>
        <div className="good-info">
          <input type="text" placeholder="entry name of good" />
          <select type="select">
            <option value="sport">sport</option>
            <option value="casual">casual</option>
          </select>
          <textarea
            name="story"
            placeholder="entry description..."
            rows="5"
          ></textarea>
        </div>
      </div>
      <div>
        <input
          className="modal-add-img"
          name="addPict"
          type="file"
          ref={textInputRefer}
          accept="image/*"
          placeholder="entry name of good"
        />
      </div>
      <div className="modal__footer">
        <button className="modal-btn-add" onClick={addItemToCatalog}>
          add item to catalog
        </button>
      </div>
    </div>
  );
};
export default Modal;
