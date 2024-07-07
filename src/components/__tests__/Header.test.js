const { render } = require("@testing-library/react");
import Header from "../Header";

it("should render Header component",()=>{
    render(<Header />);
});