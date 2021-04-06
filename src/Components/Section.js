import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
`;

const Title = styled.span`
	font-size: 2vw;
  font-weight: 700;
  margin-left: 30px;
  position: relative;
  top: ${props => props.mode === 'search' ? '0' : '-12vw'};
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, 10vw);
	gap: 15px;

	/* margin-top: 20px; */
	margin: 20px 30px;
	position: relative;
	top: ${props => props.mode === 'search' ? '0' : '-13vw'};
`;

const Slider = styled.ul`
  position: relative;
  top: -13vw;
  display: flex;
  align-items: center;
  width: 100%;
  height: 27vw;
  overflow-x: scroll;
  /* transform: translate3d(-150%, 0px, 0px); */
  /* overflow-y: visible; */
  white-space: nowrap;
  scroll-snap-type: x mandatory;
  scroll-snap-points-x: repeat(300px);
  z-index: 1;
`;

const Section = ({ mode, title, children }) => (
	<Container>
		<Title mode={mode}>{title}</Title>
		{mode === 'slider' ? <Slider>{children}</Slider> : <Grid mode={mode}>{children}</Grid>}
	</Container>
);

Section.propTypes = {
	title: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	])
};

export default Section;
