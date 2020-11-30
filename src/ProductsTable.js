import React from "react";
import { Table } from "antd";

function ProductsTable(props) {
  const cartProducts = props.cartProducts;
  const columns = [
    {
      title: "Product",
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
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity"
    },
    {
      title: "Subtotal",
      dataIndex: "subtotal",
      key: "subtotal"
    }
  ];
  var total = 0;
  for (let index = 0; index < cartProducts.length; index++) {
    const cartProduct = cartProducts[index];
    console.log(cartProduct);
    total += cartProduct.subtotal;
  }
  return (
    <div>
      <Table dataSource={cartProducts} columns={columns} />
      <div>Total: {total}</div>
    </div>
  );
}
export default ProductsTable;
