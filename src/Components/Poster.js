import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  flex: none;
  scroll-snap-align: center;
  border-radius: 5px;
  margin: 0 3px;
  transition: all 0.3s;
  z-index: 2;
  box-sizing: border-box;
`;

const Image = styled.div`
	width: ${props => props.mode === 'slider' ? '15vw' : '10vw'};
  height: ${props => props.mode === 'slider' ? '22.5vw' : '15vw'};
	background-size: cover;
	background-image: url(${(props) => props.imgUrl});
	margin: 5px 0;
	border-radius: 5px;
	transition: all 0.2s;
	transition-delay: 0.3s;
`;

const Rating = styled.span`
	position: absolute;
	bottom: 0.3vw;
	right: 5px;
	opacity: 0;
	transition: all 0.2s;
	transition-delay: 0.3s;
`;


const Title = styled.span`
	display: block;
	position: absolute;
	top: 1.2vw;
	left: 5px;
	font-weight: 500;
	font-size: 1vw;
	margin-bottom: 5px;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	opacity: 0;
	transition: all 0.2s;
	transition-delay: 0.3s;
`;
const ImageContainer = styled.div`
	margin-bottom: 5px;
	position: relative;
	&:hover {
		${Image} {
			width: ${props => props.mode === 'slider' ? '18vw' : '11vw'};
			height: ${props => props.mode === 'slider' ? '27vw' : '16vw'};
			z-index: 99;
			filter: brightness(50%);
		}
		
		${Rating} {
			opacity: 1;
		}
		${Title} {
			opacity: 1;
		}
	}
`;
const Poster = ({ mode, id, imgUrl, title, rating, year, isMovie = false }) => (
	<Container>
		<Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
			<ImageContainer mode={mode}>
				<Image imgUrl={`https://image.tmdb.org/t/p/w500${imgUrl}`} mode={mode} />
				<Rating role="img" aria-label="Rating">
					⭐️ {rating} /10
				</Rating>
				<Title>{title} / {year} </Title>
			</ImageContainer>
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
