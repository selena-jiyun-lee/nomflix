import React, { Component } from "react";
import Router from "./Router";
import GlobalStyles from "./GlobalStyles";
import GoogleFontLoader from "react-google-font-loader";

class App extends Component {
  render() {
    return <>
      <Router />
      <GlobalStyles />
      <GoogleFontLoader
        fonts={[
          {
            font: "PT Sans",
            weights: [400, 700]
          }
        ]}
      />
    </>;
  }
}

export default App;
