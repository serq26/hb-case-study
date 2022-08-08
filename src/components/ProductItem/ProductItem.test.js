import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductsContext, { ProductProvider } from "../../contexts/useProducts";
import ProductItem from "./index";

const productsList = [
  {
    name: "Procuct A",
    barcode: "123456",
  },
  {
    name: "Product B",
    barcode: "678901",
  },
];

const product = {
  name: "Procuct A",
  barcode: "123456",
};

const renderComponent = (productsList, product) => {
  return render(
    <ProductProvider value={{ productsList }}>
      <ProductItem product={product} />
    </ProductProvider>
  );
};

describe("Product Item Component", () => {
  it("should be rendered", () => {
    let component;
    component = renderComponent(productsList, product);
    expect(component).toBeTruthy();
  });

  it("should render when product item with data", () => {
    renderComponent(productsList, product);
    expect(screen.getByTestId("product-name-barcode")).toBeInTheDocument();
  });

  it("should have the button", () => {
    renderComponent(productsList, product);
    const button = screen.getByRole("button");
    expect(button).toBeTruthy();
  });
});
