const { render } = require("@testing-library/react");
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

it("should render Header component", () => {
  render(
    <Provider store={appStore}>
      <Header />
    </Provider>
  );
});
