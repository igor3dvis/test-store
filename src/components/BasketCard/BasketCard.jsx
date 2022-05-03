import React from "react";
import { ReactComponent as SvgCartRemove } from "../../assets/svg-icons/cart-remove.svg";
import "./BasketCard.css";

const BasketCard = (props) => {
  const { title, price, img } = props;

  return (
    <div className="basket-card-wrapper">
        <span className="basket-card-title__span">{title}</span>
           
        <img className="basket-card-pict" src={ process.env.PUBLIC_URL +
            "/sourse/images/img-catalog/" +
            img + ".jpg" } alt="shoos"
        />
      
      <div className="basket-card-price">
        <span className="basket-card-price__span">price: </span>
        <span>${price}</span>
      </div>
      <button>
        <SvgCartRemove className="basket-svg-card" />
      </button>
    </div>
  );
};

export default BasketCard;
