import { createContext, useContext, useState, useEffect } from "react";

const ProductsContext = createContext();

export default ProductsContext;

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const values = { products, setProducts };

  useEffect(() => {
    setProducts(products);
  }, [products]);

  return (
    <ProductsContext.Provider value={values}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
