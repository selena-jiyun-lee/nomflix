import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;
const Image = styled.div`
	width: 150px;
	height: 200px;
	background-size: cover;
	background-position: center center;
	background-image: url(${(props) => props.imgUrl});
	margin: 5px 0;
	transition: opacity 0.1s linear;
`;
const Rating = styled.span`
	position: absolute;
	bottom: 5px;
	right: 5px;
	opacity: 0;
	transition: opacity 0.1s linear;
`;
const ImageContainer = styled.div`
	margin-bottom: 5px;
	position: relative;
	&:hover {
		${Image} {
			opacity: 0.3;
		}
		${Rating} {
			opacity: 1;
		}
	}
`;
const Title = styled.span`
	display: block;
	font-weight: 500;
	font-size: 16px;
	margin-bottom: 5px;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
`;
const Year = styled.span`
	display: block;
	color: darkgray;
`;

const Poster = ({ id, imgUrl, title, rating, year, isMovie = false }) => (
	<Container>
		<Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
			<ImageContainer>
				<Image imgUrl={`https://image.tmdb.org/t/p/w300${imgUrl}`} />
				<Rating role="img" aria-label="Rating">
					⭐️ {rating} /10
				</Rating>
			</ImageContainer>
			<Title>{title}</Title>
			<Year>{year}</Year>
		</Link>
	</Container>
);

Poster.propTypes = {
	id: PropTypes.number.isRequired,
	imgUrl: PropTypes.string,
	title: PropTypes.string.isRequired,
	rating: PropTypes.number,
	year: PropTypes.string,
	isMovie: PropTypes.bool
};

export default Poster;
