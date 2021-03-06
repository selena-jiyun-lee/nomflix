import React from "react";
import { tvApi } from "api";
import TVPresenter from "Routes/TV/TVPresenter";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
	state = {
		topRated: null,
		popular: null,
		airingToday: null,
		viewMode: 'slider',
		mainVideo: null,
		error: null,
		loading: true
	};

	handleChangeMode = (event) => {
		const { target: { id } } = event;
		let viewMode = id;
		if (viewMode === undefined || viewMode === "") {
			
			const { target: { parentNode: { id: parentName } } } = event;
			viewMode = parentName;
		}
		this.setState({ viewMode });
	}

	async componentDidMount() {
		try {
			const {
				data: { results: topRated }
			} = await tvApi.topRated();
			const {
				data: { results: popular }
			} = await tvApi.popular();
			const {
				data: { results: airingToday }
			} = await tvApi.airingToday();
			const randomNum = Math.floor(Math.random() * 20);
			this.setState({
				topRated,
				popular,
				airingToday,
				mainVideo: topRated[randomNum]
			});
		} catch {
			this.setState({
				error: "Can't find TV shows."
			});
		} finally {
			this.setState({
				loading: false
			});
		}
	}

	render() {
		const { topRated, popular, airingToday, viewMode, mainVideo, error, loading } = this.state;
		return (
			<TVPresenter
				topRated={topRated}
				popular={popular}
				airingToday={airingToday}
				mainVideo={mainVideo}
				viewMode={viewMode}
				error={error}
				loading={loading}
				handleChangeMode={this.handleChangeMode}
			/>
		);
	}
}
