import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList.js";
import Footer from "./components/Footer";
import React, { useState } from "react";
import Additem from "./components/Additem";

function App() {
  const Products = [
    {
      price: 9999,
      name: "iphone11",
      quantity: 0,
    },
    {
      price: 999,
      name: "headphones",
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(Products);
  let [totalAmount, settotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newtotalAmount = totalAmount;
    newProductList[index].quantity++;
    newtotalAmount += newProductList[index].price;
    settotalAmount(newtotalAmount);
    setProductList(newProductList);
  };
  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newtotalAmount = totalAmount;

    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newtotalAmount -= newProductList[index].price;
    }
    setProductList(newProductList);
    settotalAmount(newtotalAmount);
  };

  const resetData = () => {
    let newProductList = [...productList];
    newProductList.map((Products) => {
      Products.quantity = 0;
    });
    setProductList(newProductList);
    settotalAmount(0);
  };
  const removeItem = (index) => {
    let newProductList = [...productList];
    let newtotalAmount = totalAmount;
    newtotalAmount -=
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    setProductList(newProductList);
    settotalAmount(newtotalAmount);
  };
  const addItem = (name, price) => {
    let newProductList = [...productList];
    newProductList.push({
      price: price,
      quantity: 0,
      name: name
    });
    setProductList(newProductList);
  }
  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <Additem addItem = {addItem}/>
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem = {removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetData={resetData} />
    </>
  );
}

export default App;
