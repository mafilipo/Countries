import React, { useState } from "react";
import HomePage from "./pages/homePage";
import CountriesDetailPage from "./pages/countriesDetails";
import Header from "./components/header";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
  BrowserRouter,
} from "react-router-dom";

function App() {
  const [dark, setDark] = useState(false);
  const changeTheme = () => setDark(!dark);

  return (
    <div className={"theme " + (dark ? "theme--dark" : "theme--default")}>
      <div className="base">
        <Header changeTheme={changeTheme} dark={dark} />
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/country/alpha3Code" component={CountriesDetailPage} />

          <Redirect to="/" />
        </Switch>
      </div>
      Hello
    </div>
  );
}

export default App;
