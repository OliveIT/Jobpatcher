import React from "react";
import {Col, Row} from "antd";
import ProductItem from "components/eCommerce/ProductItem";
import productData from "routes/customViews/eCommerce/productData";

function ProductsGrid() {
  return (
    <Row>
      {productData.map((product, index) => (<Col key={index} xl={6} md={8} sm={12} xs={24}>
          <ProductItem key={index} grid product={product}/>
        </Col>
      ))}
    </Row>
  );
}

export default ProductsGrid;
