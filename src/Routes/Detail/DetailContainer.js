import React from "react";
import DetailPresenter from "Routes/Detail/DetailPresenter";
import { movieApi, tvApi } from "api";
// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
	constructor(props) {
		super(props);
		const {
			location: { pathname }
		} = props;
		this.state = {
			result: null,
			error: null,
			loading: true,
			isMovie: pathname.includes("/movie/")
		};
	}

	componentDidMount = async () => {
		const {
			match: {
				params: { id }
			},
			history: { push }
		} = this.props;
		const { isMovie } = this.state;
		const numberId = Number(id);
		if (!numberId) {
			return push("/");
		}

		let result = null;
		try {
			console.log(isMovie);
			if (isMovie) {
				({ data: result } = await movieApi.movieDetail(numberId));
			} else {
				({ data: result } = await tvApi.showDetail(numberId));
			}
		} catch {
			this.setState({
				error: "Can't find data"
			});
		} finally {
			this.setState({
				loading: false,
				result
			});
		}
	};

	render() {
		const { result, error, loading } = this.state;
		return (
			<DetailPresenter result={result} error={error} loading={loading} />
		);
	}
}
