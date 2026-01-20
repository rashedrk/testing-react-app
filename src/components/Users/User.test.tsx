import { render, screen } from "@testing-library/react";
import Users from "./User";

it('should render user component properly', () => {
    render(<Users/>);

    const element = screen.getByRole('textbox', {
        name: 'Name'
    });

    const headingELement = screen.getByRole('heading', { 
        level: 2
    })

    expect(element).toBeInTheDocument();
     expect(headingELement).toBeInTheDocument()
})