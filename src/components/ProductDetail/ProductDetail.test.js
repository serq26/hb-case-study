import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductsContext from "../../contexts/useProducts";
import ProductsListContext from "../../contexts/useProductsList";
import { ProductTypeProvider } from "../../contexts/useProductType";
import { ActivePageProvider } from "../../contexts/useActivePage";
import ProductDetail from "./index";

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

const renderComponent = (productsList, products) => {
  return render(
    <ProductsListContext.Provider value={{ productsList }}>
      <ProductsContext.Provider value={{ products }}>
        <ProductTypeProvider>
          <ActivePageProvider>
            <ProductDetail />
          </ActivePageProvider>
        </ProductTypeProvider>
      </ProductsContext.Provider>
    </ProductsListContext.Provider>
  );
};

describe("Product Details Component", () => {
  it("should be rendered", () => {
    let component;
    component = renderComponent(productsList, products);
    expect(component).toBeTruthy();
  });

  it("should render products length is 0", () => {
    productsList = [];
    products = {};

    renderComponent(productsList, products);

    expect(screen.getByTestId("empty-result")).toBeInTheDocument();
  });

  it("should render when products are listed", () => {
    products = [
      {
        name: "Procuct A",
        barcode: "123456",
      },
      {
        name: "Product B",
        barcode: "678901",
      },
    ];
    renderComponent(productsList, products);
    expect(screen.getByTestId("products-list")).toBeInTheDocument();
  });
});
