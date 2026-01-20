import { render, screen } from "@testing-library/react";
import Users from "./User";

it('should render user component properly', () => {
    render(<Users/>);

    const element = screen.getByRole('textbox');

    expect(element).toBeInTheDocument();
})