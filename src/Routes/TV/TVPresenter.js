import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Poster from "Components/Poster";
import MainVideo from "Components/MainVideo";

const Container = styled.div`
	/* padding: 0 30px; */
`;

const TVPresenter = ({ topRated, popular, airingToday, viewMode, error, mainVideo, loading, handleChangeMode }) => (
	<>
		<Helmet>
			<title>TV Shows | Netflix</title>
		</Helmet>
		{loading ? (
			<Loader />
		) : (
			<Container>
					<MainVideo video={mainVideo} section="TV Show" handleChangeMode={handleChangeMode}/>
				{topRated && topRated.length > 0 && (
					<Section title="Top Rated" mode={viewMode}>
						{topRated.map((show) => (
							<Poster
								key={show.id}
								id={show.id}
								imgUrl={show.poster_path}
								title={show.original_name}
								rating={show.vote_average}
								year={show.first_air_date.substring(0, 4)}
								mode={viewMode}
							/>
						))}
					</Section>
				)}
				{popular && popular.length > 0 && (
					<Section title="Popular" mode={viewMode}>
						{popular.map((show) => (
							<Poster
								key={show.id}
								id={show.id}
								imgUrl={show.poster_path}
								title={show.original_name}
								rating={show.vote_average}
								year={show.first_air_date.substring(0, 4)}
								mode={viewMode}
							/>
						))}
					</Section>
				)}
				{airingToday && airingToday.length > 0 && (
					<Section title="Airing Today" mode={viewMode}>
						{airingToday.map((show) => (
							<Poster
								key={show.id}
								id={show.id}
								imgUrl={show.poster_path}
								title={show.original_name}
								rating={show.vote_average}
								year={show.first_air_date.substring(0, 4)}
								mode={viewMode}
							/>
						))}
					</Section>
				)}
			</Container>
		)}
	</>
);

TVPresenter.propTypes = {
	topRated: PropTypes.array,
	popular: PropTypes.array,
	airingToday: PropTypes.array,
	error: PropTypes.string,
	loading: PropTypes.bool.isRequired
};

export default TVPresenter;
