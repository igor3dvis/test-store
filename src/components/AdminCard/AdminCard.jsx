import React from "react";
import { ReactComponent as SvgTrashCan } from "../../assets/svg-icons/trash-can-outline.svg";
import { ReactComponent as SvgEdit } from "../../assets/svg-icons/pencil-outline.svg";
import "./AdminCard.css";

const AdminCard = (props) => {
  const { title, category, price, img } = props;

  return (
    <div className="admin-card-wrapper">
      <span className="admin-card-title__span">{title}</span>
      <span className="admin-card-title__span">{category}</span>
      <img
        className="admin-card-pict"
        src={
          process.env.PUBLIC_URL + "/sourse/images/img-catalog/" + img + ".jpg"
        }
        alt="shoos"
      />

      <div className="admin-card-price">
        <span className="admin-card-price__span">price: </span>
        <span>${price}</span>
      </div>
      <button><SvgEdit /></button>
      <button><SvgTrashCan /></button>
    </div>
  );
};

export default AdminCard;
