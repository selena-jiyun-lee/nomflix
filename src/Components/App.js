import React, { Component } from "react";
import GoogleFontLoader from "react-google-font-loader";
import Router from "Components/Router";
import GlobalStyles from "Components/GlobalStyles";

class App extends Component {
	render() {
		return (
			<>
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
			</>
		);
	}
}

export default App;
