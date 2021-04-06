import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch
} from "react-router-dom";
import Header from "Components/Header";
import Home from "Routes/Home";
import Movie from "Routes/Movie";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Detail from "Routes/Detail";
import Latest from "Routes/Latest";
import MyContents from "Routes/MyContents";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
	<Router>
		<>
			<Header />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/movie" exact component={Movie} />
				<Route path="/tv" exact component={TV} />
				<Route path="/search" component={Search} />
				<Route path="/my_contents" exact component={MyContents} />
				<Route path="/latest" exact component={Latest} />
				<Route path="/movie/:id" component={Detail} />
				<Route path="/tv/:id" component={Detail} />
				<Redirect from="*" to="/" />
			</Switch>
		</>
	</Router>
);
