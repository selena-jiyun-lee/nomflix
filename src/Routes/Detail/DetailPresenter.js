import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";

const Container = styled.div`
	height: calc(100vh - 70px);
	width: 100vw;
	position: relative;
	padding: 50px;
`;

const Backdrops = styled.div`
	width: 100%;
	height: 100%;
	background-image: url(${(props) => props.bgImage});
	background-position: center center;
	background-size: cover;
	filter: blur(3px);
	opacity: 0.5;
	z-index: 0;
	position: absolute;
	top: 0;
	left: 0;
`;

const Content = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	z-index: 1;
`;

const Cover = styled.div`
	width: 40%;
	height: auto;
	background-image: url(${(props) => props.bgImage});
	background-position: center center;
	background-size: cover;
	z-index: 1;
`;

const Information = styled.div`
	width: 50%;
	margin-left: 20px;
	z-index: 1;
`;

const Title = styled.span`
	display: block;
	font-size: 40px;
	margin-bottom: 20px;
`;

const Text = styled.span`
	font-size: 18px;
`;

const Divider = styled.span`
	margin: 0 10px;
`;

const Overview = styled.p`
	margin-top: 20px;
	font-size: 18px;
	line-height: 1.3;
	opacity: 0.8;
`;

const DetailPresenter = ({ result, error, loading }) =>
	loading ? (
		<Loader />
	) : (
		<Container>
			<Backdrops
				bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
			/>
			<Content>
				<Cover
					bgImage={`https://image.tmdb.org/t/p/original${result.poster_path}`}
				/>
				<Information>
					<Title>
						{result.original_title
							? result.original_title
							: result.original_name}
					</Title>
					<Text>
						{result.release_date
							? result.release_date.substring(0, 4)
							: result.first_air_date.substring(0, 4)}
					</Text>
					<Divider>•</Divider>
					<Text>
						{result.runtime
							? result.runtime
							: `1 episode ${result.episode_run_time[0]}`}
						mins
					</Text>
					<Divider>•</Divider>
					<Text>
						{result.genres.map((genre, index) =>
							index > 0 ? ` / ${genre.name}` : genre.name
						)}
					</Text>
					<Overview>{result.overview}</Overview>
				</Information>
			</Content>
		</Container>
	);

DetailPresenter.propTypes = {
	result: PropTypes.object,
	error: PropTypes.string,
	loading: PropTypes.bool.isRequired
};

export default DetailPresenter;
