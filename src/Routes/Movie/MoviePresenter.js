import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";

import Section from "Components/Section";
import Loader from "Components/Loader";
import Poster from "Components/Poster";
import MainVideo from "Components/MainVideo";

const Container = styled.div`
`;

const MoviePresenter = ({ nowPlaying, upcoming, popular, viewMode, mainVideo, handleChangeMode, error, loading }) => (
	<>
		<Helmet>
			<title>Movies | Netflix</title>
		</Helmet>
		{loading ? (
			<Loader />
		) : (
				<Container>
				<MainVideo video={mainVideo} section="Movie" handleChangeMode={handleChangeMode}/>
				{nowPlaying && nowPlaying.length > 0 && (
					<Section title="Now Playing" mode={viewMode}>
						{nowPlaying.map((movie) => (
							<Poster
								key={movie.id}
								id={movie.id}
								imgUrl={movie.poster_path}
								title={movie.title}
								rating={movie.vote_average}
								year={movie.release_date.substring(0, 4)}
								isMovie={true}
								mode={viewMode}
							/>
						))}
					</Section>
				)}
				{upcoming && upcoming.length > 0 && (
					<Section title="Upcoming" mode={viewMode}>
						{upcoming.map((movie) => (
							<Poster
								key={movie.id}
								id={movie.id}
								imgUrl={movie.poster_path}
								title={movie.title}
								rating={movie.vote_average}
								year={movie.release_date.substring(0, 4)}
								isMovie={true}
								mode={viewMode}
							/>
						))}
					</Section>
				)}
				{popular && popular.length > 0 && (
					<Section title="Popular" mode={viewMode}>
						{popular.map((movie) => (
							<Poster
								key={movie.id}
								id={movie.id}
								imgUrl={movie.poster_path}
								title={movie.original_title}
								rating={movie.vote_average}
								year={movie.release_date.substring(0, 4)}
								isMovie={true}
								mode={viewMode}
							/>
						))}
					</Section>
				)}
			</Container>
		)}
	</>
);

MoviePresenter.propTypes = {
	nowPlaying: PropTypes.array,
	upcoming: PropTypes.array,
	popular: PropTypes.array,
	error: PropTypes.string,
	loading: PropTypes.bool.isRequired
};

export default MoviePresenter;
