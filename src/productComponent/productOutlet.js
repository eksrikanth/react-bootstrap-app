import React from "react";
import productsdata from "./product-data";
import Product from "./product";

function ProductOutlet() {
  const productComponents = productsdata.map(item => {
    return <Product key={item.id} product={item} />;
  });

  return <div>{productComponents}</div>;
}

export default ProductOutlet;
