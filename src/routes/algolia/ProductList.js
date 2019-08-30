import React from 'react';
import {Col, Row} from 'antd';

import ProductItem from './ProductItem';

const ProductList = ({hits}) => {
  return (
    <div id="product">
      <Row>
        {hits.map(product => (
          <Col xl={8} lg={12} md={12} sm={12} xs={24}>
            <ProductItem item={product} key={product.objectID}/>
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default ProductList;
