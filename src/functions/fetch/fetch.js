const getAllGood = async () => {
    const resp = await fetch("http://localhost:3001/good");
    return await resp.json();
  };

  const getAllBasketItems = async () => {
    const resp = await fetch("http://localhost:3001/basket");
    return await resp.json();
  };

  export {getAllGood, getAllBasketItems}