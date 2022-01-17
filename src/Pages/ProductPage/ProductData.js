import React from "react";
import { useProduct } from "../../Hooks/useProduct";
import { Card, Avatar } from "antd";
import { Link } from "react-router-dom";

export default function ProductData() {
  const { Meta } = Card;
  const { loading, data, error } = useProduct();
  if (loading) return <div>Loading ProductData ...</div>;
  if (error) return <div>something went wrong in ProductData ...</div>;
const handleClick = () => {
    console.log("handleClick");
}

  return (
    <div>
      <h2>Product page</h2>
      <button
        style={{
          float: "right",
          background: "lightgrey",
          padding: "5px",
          marginRight: "30px",
        }}
        onClick={() => handleClick()}
      >
        <Link to="/add"> Add Product </Link>
      </button>
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
      >
        <Meta title={data?.viewer?.product?.name} />
      </Card>
    </div>
  );
}
