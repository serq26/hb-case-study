import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { ActivePageProvider } from "./contexts/useActivePage";
import ProductsListContext from "./contexts/useProductsList";
import ProductsContext from "./contexts/useProducts";
import { ProductTypeProvider } from "./contexts/useProductType";

let productsList = [
  {
    name: "Procuct A",
    barcode: "123456",
  },
  {
    name: "Product B",
    barcode: "678901",
  },
];

let products = {
  name: "Procuct A",
  barcode: "123456",
};

describe("App Component", () => {
  it("should be rendered", () => {
    let component;
    component = render(
      <ProductsListContext.Provider value={{ productsList }}>
        <ProductsContext.Provider value={{ products }}>
          <ProductTypeProvider>
            <ActivePageProvider>
              <App />
            </ActivePageProvider>
          </ProductTypeProvider>
        </ProductsContext.Provider>
      </ProductsListContext.Provider>
    );
    expect(component).toBeTruthy();
  });
});
