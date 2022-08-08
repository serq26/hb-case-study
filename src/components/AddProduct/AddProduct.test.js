import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProductProvider } from "../../contexts/useProducts";
import { ProductsListProvider } from "../../contexts/useProductsList";
import { ProductTypeProvider } from "../../contexts/useProductType";
import AddProduct from "./index";
import userEvent from "@testing-library/user-event";

const renderComponent = () => {
  return render(
    <ProductsListProvider>
      <ProductProvider>
        <ProductTypeProvider>
          <AddProduct />
        </ProductTypeProvider>
      </ProductProvider>
    </ProductsListProvider>
  );
};

describe("AddProduct Component", () => {
  it("should be rendered", () => {
    let component;
    component = renderComponent();
    expect(component).toBeTruthy();
  });

  it("should have the inputs", () => {
    renderComponent();
    const input = screen.getByLabelText("Name");
    expect(input).toBeTruthy();
  });

  it("should have the button", () => {
    let button;
    renderComponent();
    button = screen.getByRole("button");
    expect(button).toBeTruthy();
  });

  it("should not disabled button when inputs not empty", () => {
    renderComponent();
    const button = screen.getByRole("button");
    const nameInput = screen.getByLabelText("Name");
    const nameBarcode = screen.getByLabelText("Barcode");

    userEvent.type(nameInput, "Product A");
    userEvent.type(nameBarcode, "123456");
    expect(button).toBeEnabled();
  });
});
