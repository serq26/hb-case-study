import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductsListContext, {
  ProductsListProvider,
} from "../../contexts/useProductsList";
import ProductCard from "./index";

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
    <ProductsListProvider value={{ productsList }}>
      <ProductCard product={product} />
    </ProductsListProvider>
  );
};

describe("ProductCard Item Component", () => {
  it("should be rendered", () => {
    let component;
    component = renderComponent(productsList,product);
    expect(component).toBeTruthy();
  });

  it("should render when product item with data", () => {
    renderComponent(productsList,product);
    expect(screen.getByTestId("product-name-barcode")).toBeInTheDocument();
  });

  it("should have description", () => {
    renderComponent(productsList,product);
    expect(screen.getByTestId("product-description")).toBeInTheDocument();
  });

  it("should have the buttons", () => {
    renderComponent(productsList,product);
    const button = screen.getAllByRole("button");
    expect(button).toBeTruthy();
  });
});
