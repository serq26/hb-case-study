import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ActivePageProvider } from "../../contexts/useActivePage";
import Header from "./index";

const renderComponent = () => {
  return render(
    <ActivePageProvider>
      <Header />
    </ActivePageProvider>
  );
};

describe("Header Component", () => {
  let link;
  it("should be rendered", () => {
    let component;
    component = renderComponent();
    expect(component).toBeTruthy();
  });

  it("should have the menu links", () => {
    renderComponent();
    link = screen.getAllByRole("link");
    expect(link).toBeTruthy();
  });
});
