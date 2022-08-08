import React, { useState } from "react";
import ProductDetail from "../components/ProductDetail";
import ProductType from "../components/ProductType";
import AddProduct from "../components/AddProduct";
import Products from "../components/Products";
import { useProductType } from "../contexts/useProductType";
import { useProducts } from "../contexts/useProducts";
import Toast from "../components/Toast";

export default function AddProductForm() {
  const [isComplete, setIsComplete] = useState(false);
  const { productType } = useProductType();
  const { products } = useProducts();

  return (
    <>
      <div className="add-product-form">
        <ProductType />
        {productType && (
          <>
            <AddProduct />
            <Products />
            {products.length > 0 && (
              <ProductDetail setIsComplete={setIsComplete} />
            )}
          </>
        )}
      </div>
      {isComplete && (
        <Toast
          type="success"
          time="1000"
          message="The product/s has been successfully added."
        />
      )}
    </>
  );
}
