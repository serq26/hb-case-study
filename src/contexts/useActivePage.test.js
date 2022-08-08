import React from "react";
import ActivePageContext, { ActivePageProvider } from "./useActivePage";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { act } from "react-dom/test-utils";

describe("Active Page Context", () => {
  let testActivePage, testSetActivePage;

  it("should set the active page", () => {
    render(
      <ActivePageProvider>
        <ActivePageContext.Consumer>
          {({ activePage, setActivePage }) => {
            testActivePage = activePage;
            testSetActivePage = setActivePage;
          }}
        </ActivePageContext.Consumer>
      </ActivePageProvider>
    );
    act(() => testSetActivePage("add-product"));
    expect(testActivePage).toEqual("add-product");
  });
});
