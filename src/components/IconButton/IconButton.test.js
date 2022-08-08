import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import IconButton from "./index";
import icon from "../../../public/images/icons/up.svg";

let buttonProps = {
  theme: "dark",
  type: "button",
  icon: icon
};

describe("IconButton Component", () => {
  it("should be rendered", () => {
    let component;
    component = render(<IconButton />);
    expect(component).toBeTruthy();
  });

  it("should be props works", () => {
    render(
      <IconButton
        theme={buttonProps.theme}
        type={buttonProps.type}
      >
        <img src="/logo.svg" alt="Icon"/>
      </IconButton>
    );
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("theme",buttonProps.theme);
  });

  it("should be clicked", async () => {
    const handleClick = jest.fn()    
    render(<IconButton onClick={handleClick}>Click Me</IconButton>)
    const button = screen.getByRole("button");
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  });
});
