import React, { useEffect, useState } from "react";
import { ReactComponent as SvgCartArrowDown } from "../../assets/svg-icons/cart-arrow-down.svg";
import "./Card.css";

const Card = (props) => {
  const { title, category, price, discribe, img } = props;
  const addId = () =>{
    return Math.random(100);
  }

  const addToBasket = async () => {
    const resp = await fetch("http://localhost:3001/basket", {
      method: "POST",
      body: JSON.stringify({
        id: addId,
        title: title,
        price: price,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    //return await resp.json();
  };

  return (
    <div className="card-wrapper">
      <div className="card-top">
        <div className="card-title">
          <span className="card-title__span">{title}</span>
        </div>
        <button onClick={addToBasket}>
          <SvgCartArrowDown className="svg-card" />
        </button>
      </div>
      <div className="card-category">
        <span className="card-category__span">category: </span>
        <span>{category}</span>
      </div>
      <div className="card-descript">
        <p className="card-category__p">{discribe}</p>
      </div>
      <div>
        <img
          className="card-pict"
          src={
            process.env.PUBLIC_URL +
            "/sourse/images/img-catalog/" +
            img +
            ".jpg"
          }
          alt="shoos"
        />
      </div>
      <div className="card-price">
        <span className="card-price__span">price: </span>
        <span>${price}</span>
      </div>
    </div>
  );
};

export default Card;
