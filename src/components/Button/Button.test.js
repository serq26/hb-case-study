import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./index";

let buttonProps = {
  theme: "dark",
  disabled: true,
  type: "button",
  text: "Button",
  active: true
};

describe("Button Component", () => {
  it("should be rendered", () => {
    let component;
    component = render(<Button />);
    expect(component).toBeTruthy();
  });

  it("should be props works", () => {
    render(
      <Button
        active={buttonProps.active}
        disabled={buttonProps.disabled}
        theme={buttonProps.theme}
        type={buttonProps.type}
      >{buttonProps.text}</Button>
    );
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(button).toHaveClass("active-button");
    expect(button).toHaveClass(`custom-button-${buttonProps.theme}`);
    // expect(button).toHaveTextContent(`${buttonProps.text}`)
  });

  it("should be clicked", async () => {
    const handleClick = jest.fn()    
    render(<Button  onClick={handleClick}>Click Me</Button>)
    const button = screen.getByRole("button");;
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  });
});
