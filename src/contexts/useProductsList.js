import { createContext, useContext, useState, useEffect } from "react";

const ProductsListContext = createContext();

export default ProductsListContext;

export const ProductsListProvider = ({ children }) => {
  const [productsList, setProductsList] = useState(
    JSON.parse(localStorage.getItem("productsList")) || []
  );

  const values = { productsList, setProductsList };

  useEffect(() => {
    setProductsList(productsList);
    localStorage.setItem("productsList",JSON.stringify(productsList))
  }, [productsList]);

  return (
    <ProductsListContext.Provider value={values}>
      {children}
    </ProductsListContext.Provider>
  );
};

export const useProductsList = () => useContext(ProductsListContext);
