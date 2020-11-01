import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";

import Section from "Components/Section";
import Loader from "Components/Loader";
import Poster from "Components/Poster";

const Container = styled.div`
	padding: 30px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) => (
	<>
		<Helmet>
			<title>Movies | Nomflix</title>
		</Helmet>
		{loading ? (
			<Loader />
		) : (
			<Container>
				{nowPlaying && nowPlaying.length > 0 && (
					<Section title="Now Playing">
						{nowPlaying.map((movie) => (
							<Poster
								key={movie.id}
								id={movie.id}
								imgUrl={movie.poster_path}
								title={movie.title}
								rating={movie.vote_average}
								year={movie.release_date.substring(0, 4)}
								isMovie={true}
							/>
						))}
					</Section>
				)}
				{upcoming && upcoming.length > 0 && (
					<Section title="Upcoming">
						{upcoming.map((movie) => (
							<Poster
								key={movie.id}
								id={movie.id}
								imgUrl={movie.poster_path}
								title={movie.title}
								rating={movie.vote_average}
								year={movie.release_date.substring(0, 4)}
								isMovie={true}
							/>
						))}
					</Section>
				)}
				{popular && popular.length > 0 && (
					<Section title="Popular">
						{popular.map((movie) => (
							<Poster
								key={movie.id}
								id={movie.id}
								imgUrl={movie.poster_path}
								title={movie.original_title}
								rating={movie.vote_average}
								year={movie.release_date.substring(0, 4)}
								isMovie={true}
							/>
						))}
					</Section>
				)}
			</Container>
		)}
	</>
);

HomePresenter.propTypes = {
	nowPlaying: PropTypes.array,
	upcoming: PropTypes.array,
	popular: PropTypes.array,
	error: PropTypes.string,
	loading: PropTypes.bool.isRequired
};

export default HomePresenter;
