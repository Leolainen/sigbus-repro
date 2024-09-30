import { render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("[Button]", () => {
  test("Button renders", () => {
    render(<Button />);
    expect(screen.getByRole("button")).toBeDefined();
    expect(screen.getByText("Welcome to Button!")).toBeDefined();
  });
});
