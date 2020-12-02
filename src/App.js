import React from "react";
import "./style.css";
import SelectProduct from "./SelectProduct";
import "antd/dist/antd.css";
import Products from "./Products";

export default function App() {
  return (
    <div>
      <div>
        <Products />
        {/* <SelectProduct /> */}
      </div>
    </div>
  );
}
