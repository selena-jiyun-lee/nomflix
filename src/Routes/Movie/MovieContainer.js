/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { movieApi } from "api";
import MoviePresenter from "Routes/Movie/MoviePresenter";

export default class extends React.Component {
	state = {
		nowPlaying: null,
		upcoming: null,
		popular: null,
		mainVideo: null,
		viewMode: 'slider',
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
				data: { results: nowPlaying }
			} = await movieApi.nowPlaying();
			const {
				data: { results: upcoming }
			} = await movieApi.upcoming();
			const {
				data: { results: popular }
			} = await movieApi.popular();
			const randomNum = Math.floor(Math.random() * 20);
			this.setState({
				nowPlaying,
				upcoming,
				popular,
				mainVideo: nowPlaying[randomNum]
			});
		} catch {
			this.setState({
				error: "Can't find movies information"
			});
		} finally {
			this.setState({
				loading: false
			});
		}
	}
	render() {
		const { nowPlaying, upcoming, popular, viewMode, mainVideo, error, loading } = this.state;

		return (
			<MoviePresenter
				nowPlaying={nowPlaying}
				upcoming={upcoming}
				popular={popular}
				mainVideo={mainVideo}
				viewMode={viewMode}
				error={error}
				loading={loading}
				handleChangeMode={this.handleChangeMode}
			/>
		);
	}
}
