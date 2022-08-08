import { createContext, useContext, useState, useEffect } from "react";

const ProductTypeContext = createContext();

export default ProductTypeContext;

export const ProductTypeProvider = ({ children }) => {
  const [productType, setProductType] = useState("");

  const values = { productType, setProductType };

  useEffect(() => {
    setProductType(productType);
  }, [productType]);

  return (
    <ProductTypeContext.Provider value={values}>
      {children}
    </ProductTypeContext.Provider>
  );
};

export const useProductType = () => useContext(ProductTypeContext);
