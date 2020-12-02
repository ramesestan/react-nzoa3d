import React, { useState } from "react";
import { Input, Button, Table, Select } from "antd";
function Products(props) {
  const cartProducts = props.cartProducts;
  const { Option } = Select;
  const columns = [
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Weight",
      dataIndex: "weight",
      key: "weight"
    },
    {
      title: "Resellers Price",
      dataIndex: "reseller_price",
      key: "reseller_price"
    },
    {
      title: "SRP",
      dataIndex: "srp",
      key: "srp"
    }
  ];
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
  const [name, setName] = useState();
  const [weight, setWeight] = useState();
  const [reseller, setReseller] = useState();
  const [srp, setSRP] = useState();
  function onSave() {
    //check input if correct
    if (name === "" || name === undefined || name >= 0) {
      alert("Please enter name");
    }
    console.log(name);

    if (weight === undefined || isNaN(weight)) {
      alert("Input Numbers on Weight only Please.");
    }
    console.log(weight);

    if (reseller === undefined || isNaN(reseller)) {
      alert("Input Numbers on Reseller Price Please.");
    }
    console.log(reseller);

    if (srp === undefined || isNaN(srp)) {
      alert("Input Numbers on SRP please");
      console.log(srp);
    }
    //save input to table
  }
  return (
    <div>
      <Input
        onChange={function (a) {
          setName(a.target.value);
        }}
        value={name}
        placeholder="Name"
      />
      <Input
        onChange={function (b) {
          setWeight(b.target.value);
        }}
        placeholder="Weight"
      />
      <Input
        onChange={function (c) {
          setReseller(c.target.value);
        }}
        placeholder="Reseller Price"
      />
      <Input
        onChange={function (d) {
          setSRP(d.target.value);
        }}
        placeholder="SRP"
      />
      <br />
      <Button onClick={onSave} type="primary">
        Primary Button
      </Button>
      <Table dataSource={cartProducts} columns={columns} />
      {/* <Products cartProducts={cartProducts} /> */}
      {PRODUCTS.map((product, index) => {
        return <Option value={index}>{product.name}</Option>;
      })}
    </div>
  );
}

export default Products;
