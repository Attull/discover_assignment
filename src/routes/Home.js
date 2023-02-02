import React, { useEffect, useState } from "react";
import CardBody from "../cards/CardBody";

const Home = () => {
  const [items, setItem] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setItem(data));
    console.count("hi");
  }, []);


  return (
    <>
    <CardBody products={items}/>

    </>
  )
};

export default Home;
