/* eslint-disable import/no-anonymous-default-export */
import { movieApi, tvApi } from "api";
import React from "react";
import SearchPresenter from "Routes/Search/SearchPresenter";

export default class extends React.Component {
	state = {
		movieResults: null,
		tvResults: null,
		searchTerm: "",
		error: null,
		loading: false
	};

	handleSubmit = () => {
		const { searchTerm } = this.state;
		if (searchTerm !== "") {
			searchTerm();
		}
	};

	searchByTerm = async () => {
		const { searchTerm } = this.state;
		this.setState({
			loading: true
		});
		try {
			const {
				data: { results: movieResults }
			} = await movieApi.search(searchTerm);
			const {
				data: { results: tvResults }
			} = await tvApi.search(searchTerm);
			this.setState({
				movieResults,
				tvResults
			});
		} catch {
			this.setState({
				error: "Can't find data"
			});
		} finally {
			this.setState({
				loading: false
			});
		}
	};

	render() {
		const {
			movieResults,
			tvResults,
			searchTerm,
			error,
			loading
		} = this.state;
		return (
			<SearchPresenter
				movieResults={movieResults}
				tvResults={tvResults}
				searchTerm={searchTerm}
				error={error}
				loading={loading}
			/>
		);
	}
}
