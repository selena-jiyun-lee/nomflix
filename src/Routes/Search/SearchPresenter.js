import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";

import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
	padding: 30px;
`;
const Form = styled.form`
	width: 100%;
`;
const Input = styled.input`
	all: unset;
	font-size: 20px;
	width: 100%;
	margin-bottom: 50px;
	border-bottom: 2px solid rgba(256, 256, 256, 0.2);
`;

const SearchPresenter = ({
	movieResults,
	tvResults,
	searchTerm,
	error,
	loading,
	handleSubmit,
	updateTerm
}) => (
	<Container>
		<Helmet>
			<title>Search | Nomflix</title>
		</Helmet>
		<Form onSubmit={handleSubmit}>
			<Input
				placeholder="Search Movie or TV Shows!!"
				value={searchTerm}
				onChange={updateTerm}></Input>
		</Form>
		{loading ? (
			<Loader />
		) : (
			<>
				{movieResults && movieResults.length > 0 && (
					<Section title="Movie Results">
						{movieResults.map((movie) => (
							<Poster
								key={movie.id}
								id={movie.id}
								imgUrl={movie.poster_path}
								title={movie.title}
								rating={movie.vote_average}
								year={
									movie.release_date &&
									movie.release_date.substring(0, 4)
								}
								isMovie={true}
							/>
						))}
					</Section>
				)}
				{tvResults && tvResults.length > 0 && (
					<Section title="TV Show Results">
						{tvResults.map((show) => (
							<Poster
								key={show.id}
								id={show.id}
								imgUrl={show.poster_path}
								title={show.original_name}
								rating={show.vote_average}
								year={
									show.first_air_date &&
									show.first_air_date.substring(0, 4)
								}
							/>
						))}
					</Section>
				)}

				{error && <Message color="#e63e33" text={error} />}
				{movieResults &&
					tvResults &&
					movieResults.length === 0 &&
					tvResults.length === 0 && (
						<Message color="gray" text="Can't find the data" />
					)}
			</>
		)}
	</Container>
);

SearchPresenter.propTypes = {
	movieResults: PropTypes.array,
	tvResults: PropTypes.array,
	searchTerm: PropTypes.string,
	error: PropTypes.string,
	loading: PropTypes.bool.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	updateTerm: PropTypes.func.isRequired
};

export default SearchPresenter;
