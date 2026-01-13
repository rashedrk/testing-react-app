import { render, screen } from "@testing-library/react";
import PrimaryButton from "./PrimaryButton";

describe("PrimaryButton()", () => {
  it("should render correctly", () => {
    render(<PrimaryButton />);

    const element = screen.getByText("Click to Add");

    expect(element).toBeInTheDocument();
  });

  it("should render correctly with the action type if provided", () => {
    const actionType = "Delete";
    render(<PrimaryButton actionType={actionType} />);

    const element = screen.getByText("Click to " + actionType);

    expect(element).toBeInTheDocument();
  });
});
