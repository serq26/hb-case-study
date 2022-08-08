import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProductProvider } from "../../contexts/useProducts";
import { ProductsListProvider } from "../../contexts/useProductsList";
import { ProductTypeProvider } from "../../contexts/useProductType";
import Toast from "./index";

let toastProps = {
  message: "Test Message",
  type: "success",
  time: "",
};

const renderComponent = (message,type) => {
  return render(
    <ProductsListProvider>
      <ProductProvider>
        <ProductTypeProvider>
          <Toast message={message} type={type} />
        </ProductTypeProvider>
      </ProductProvider>
    </ProductsListProvider>
  );
};

describe("Toast Component", () => {
  it("should be rendered", () => {
    let component;
    component = renderComponent();
    expect(component).toBeTruthy();
  });

  it("should have the message", () => {
    let toast, toastMessage;
    renderComponent(toastProps.message,toastProps.type);
    toast = screen.getByTestId("toast");
    expect(toast).toHaveClass(`toast-${toastProps.type}`);
    toastMessage = screen.getByTestId("toast-message");
    expect(toastMessage).toHaveTextContent(toastProps.message);
  });
});
