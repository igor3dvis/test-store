import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import "./Catalog.css";
import { getAllGood } from "../../functions/fetch/fetch";

const Catalog = () => {
  const [good, setGood] = useState([]);

  useEffect(() => {
    (async () => {
      // getAllGood from "fetch"
      const res = await getAllGood();
      console.log(res);
      setGood(res);
    })();
  }, []);

  return (
    <div className="container catalog-wrapper">
      <div className="catalog-before">c a t a l o g</div>
      <div>
        <h1 className="catalog-title">c a t a l o g</h1>
        <div className="good-wrapper">
          {good.map((elem) => {
            //console.log(elem);
            return (
              <Card
                key={elem.id}
                img={elem.id}
                category={elem.category}
                title={elem.title}
                discribe={elem.body}
                price={elem.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Catalog;
