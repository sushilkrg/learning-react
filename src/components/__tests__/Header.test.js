import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { useContext } from "react";
import { StaticRouter } from "react-router-dom/server";
import {useSelector} from "react-redux";

test("logo should load on rendering header", () => {
  // load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  // check if logo is loaded
    const logo = header.getAllByTestId("logo");
    // console.log(logo);

    expect(logo[0].src).toBe("http://localhost/dummy.png");
});

test("Cart should have 0 items on rendering header", () => {
  // load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

    const cart = header.getByTestId("cart");

    expect(cart.innerHTML).toBe("<a href=\"/cart\">Cart - 0 items</a>");
});
