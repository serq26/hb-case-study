import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Input from "./index";

let value;
const handleChange = (e) => {
  e.preventDefault();
  value = e.target.value;
};

describe("Input Component", () => {
  it("should be rendered", () => {
    let component;
    component = render(<Input />);
    expect(component).toBeTruthy();
  });

  test("It should be change input value", () => {
    render(
      <Input
        type="text"
        id="input"
        name="input"
        label="input"
        value={value}
        onChange={(e) => handleChange(e)}
      />
    );
    const input = screen.getByLabelText("input");
    fireEvent.change(input, { target: { value: "text" } });
    expect(input.value).toBe("text");
  });
});
