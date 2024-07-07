import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact page's test cases",()=>{
    test("Contact component should load",()=>{
        //Rendering component onto jsdom
        render(<Contact />);
    
        //test whether heading is loaded or not
        const heading=screen.getByRole("heading");
    
        //Assertion
        expect(heading).toBeInTheDocument();
    });
    
    describe("button",()=>{
        test("Contact page should have a button",()=>{
            render(<Contact />);
        
            const button=screen.getByRole("button");
        
            expect(button).toBeInTheDocument();
        });
        
        test("Contact page should have the test submit",()=>{
            render(<Contact />);
            const submitText=screen.getByText("Submit");
            expect(submitText).toBeInTheDocument();
        });
    });
    
    test("Contact page should have two input boxes",()=>{
        //Rendering
        render(<Contact />);
    
        //Querying
        const inputBoxes=screen.getAllByRole("textbox");
        // console.log(inputBoxes);
    
        //Assertion
        expect(inputBoxes.length).toBe(2);
    });
});

