import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ActivePageProvider } from "./contexts/useActivePage";
import { ProductProvider } from "./contexts/useProducts";
import { ProductsListProvider } from "./contexts/useProductsList";
import { ProductTypeProvider } from "./contexts/useProductType";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductsListProvider>
    <ProductProvider>
      <ProductTypeProvider>
        <ActivePageProvider>
          <App />
        </ActivePageProvider>
      </ProductTypeProvider>
    </ProductProvider>
  </ProductsListProvider>
);
