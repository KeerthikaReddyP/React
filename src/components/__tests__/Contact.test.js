import { render,screen } from "@testing-library/react";
import Contact from "../Contact";

test("Contact component should load",()=>{
    //Rendering component onto jsdom
    render(<Contact />);

    //test whether heading is loaded or not
    const heading=screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
});