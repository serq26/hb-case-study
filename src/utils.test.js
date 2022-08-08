import "@testing-library/jest-dom";
import { getDateNow } from "./utils";

describe("Test Utils", () => {
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

  let barcode = "123456";

  it("should be get getDateNow", () => {
    const mockGetDateNow= jest.fn().mockImplementation(getDateNow);
    mockGetDateNow();
    expect(mockGetDateNow).toHaveBeenCalled();
  });
});
