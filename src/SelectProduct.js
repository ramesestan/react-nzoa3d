import React from "react";
import { Select } from "antd";
import React, { useState } from "react";
import ProductsTable from "./ProductsTable";
function SelectProduct() {
  const [selectedProduct, setSelectedProduct] = useState();
  const { Option } = Select;
  const [cartProducts, setCartProducts] = useState([]);
  const PRODUCTS = [
    {
      name: "Ezekiel Almond Loaf",
      weight: "600g",
      reseller_price: 145,
      srp: 190
    },
    {
      name: "Coffee Cheesy Almond Loaf",
      weight: "600g",
      reseller_price: 185,
      srp: 255
    }
  ];

  function onChange(index) {
    //on select get product details
    // console.log(PRODUCTS[index]);
    var selectedProduct = PRODUCTS[index];
    // console.log(selectedProduct);
    selectedProduct.quantity = 1;
    selectedProduct.subtotal = selectedProduct.srp;
    setSelectedProduct(PRODUCTS[index].name);

    var hasSameName = false;
    for (let i = 0; i < cartProducts.length; i++) {
      const cartProduct = cartProducts[i];
      if (cartProduct.name == selectedProduct.name) {
        cartProduct.quantity++;
        hasSameName = true;
        cartProduct.subtotal = cartProduct.quantity * cartProduct.srp;
      }
    }

    //stores array
    var productsAddedToCart = [...cartProducts];
    if (!hasSameName) {
      productsAddedToCart.push(selectedProduct);
    }
    setCartProducts(productsAddedToCart);
    // display array
    // console.log(productsAddedToCart);
  }

  function onBlur() {
    // console.log("blur");
    setSelectedProduct(undefined);
  }

  function onFocus() {
    // console.log("focus");
  }

  function onSearch(product) {
    // console.log("search:", product);
  }

  return (
    <div>
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select a product"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        value={selectedProduct}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {PRODUCTS.map((product, index) => {
          return <Option value={index}>{product.name}</Option>;
        })}
      </Select>
      <ProductsTable cartProducts={cartProducts} />
    </div>
  );
}

export default SelectProduct;
