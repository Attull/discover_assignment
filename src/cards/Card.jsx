import React, { useEffect } from "react";
import "./Card.css";
// import { AddRemoveBtn } from "../addremoveBtn/AddRemoveBtn";
import { useState } from "react";
const Card = ({ product}) => {


  // console.log(item);
  return (
    <div className="card">
      <img className="card__img" src={product.image} alt="" />
      <div>
        <h2>{product.category}</h2>
        <h4>{product.title}</h4>
        <p>{product.description}</p>
      </div>
      <div className="card-price-add">
        <span>Price : ${product.price}</span>
      
      </div>
    </div>
  );
};

export default Card;
