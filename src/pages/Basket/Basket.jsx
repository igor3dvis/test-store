import React, { useEffect, useState } from "react";
import "./Basket.css";
import BasketCard from "../../components/BasketCard/BasketCard";
import { getAllBasketItems } from "../../functions/fetch/fetch";

const Basket = () => {
  const [good, setGood] = useState([]);

  useEffect(() => {
    (async () => {
      // getAllBasketItems from "fetch"
      const res = await getAllBasketItems();
      console.log(res);
      setGood(res);
    })();
  }, []);

  return (
    <div className="container basket-wrapper">
      <div className="basket-before">b a s k e t</div>
      <div className="basket-good-wrapper">
        {good.map((elem) => {
          return (
            <BasketCard
              key={elem.id}
              img={elem.id}
              title={elem.title}
              price={elem.price}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Basket;