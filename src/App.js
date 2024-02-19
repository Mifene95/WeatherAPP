import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import City from "./pages/City";
import Navigation from "./components/Navigation/Navigation";
import { NavStyle } from "./components/Navigation/NavigationStyles";
import {
  MainBackgroundStyle,
  HeaderStyle,
  ImageStyle,
  DivWrapper
} from "./AppStyles";
export default function App() {
  return (
    <MainBackgroundStyle>
      <Router>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            borderBottom: "1px solid gray",
            alignItems: "center"
          }}
        >
          <ImageStyle src="https://www.iblsoft.com/wp-content/uploads/2019/01/IBL_logo_OnlineWeather.png" />

          <HeaderStyle className="hide-on-mobile">
            <h1>Here you can find a world wide weather forecast</h1>
            <p>
              Your solution for worldwide weather forecasts! With our app, you
              can easily get accurate weather updates for any location around
              the globe. Our user-friendly interface and intuitive design make
              it easy to navigate and find the information you need.
            </p>
          </HeaderStyle>
        </div>
        <DivWrapper>
          <NavStyle>
            <Navigation />
          </NavStyle>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/city/:cityId" component={City} />
            </Switch>
          </div>
        </DivWrapper>
      </Router>
    </MainBackgroundStyle>
  );
}
