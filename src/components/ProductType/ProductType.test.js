import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProductProvider } from "../../contexts/useProducts";
import { ProductTypeProvider } from "../../contexts/useProductType";
import ProductType from "./index";

const renderComponent = () => {
  return render(
    <ProductProvider>
      <ProductTypeProvider>
        <ProductType />
      </ProductTypeProvider>
    </ProductProvider>
  );
};

describe("ProductType Component", () => {
  it("should be rendered", () => {
    let component;
    component = renderComponent();
    expect(component).toBeTruthy();
  });

  it("should have the buttons", () => {
    let button;
    renderComponent();
    button = screen.getAllByRole("button");
    expect(button).toBeTruthy();
  });

  it("should selected active button when clicked", () => {
    let button;
    renderComponent();
    button = screen.getAllByRole("button")[0];
    fireEvent.click(button);
    expect(button).toHaveClass("active-button");
  });
});
