import { Redirect, Route } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import MainHeader from "./Components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

//By default Routes are rendered if URL has contains the path from the starting.
//But if we want only one route to be active we can use Switch component
//Switch are used for configuring a route only when the path is matched(Only one)
//Switch configures the route which is matched first (top to bottom)
//it renders the first matched path
//But if we use exact prop at the route which is only required when there is an exact match
