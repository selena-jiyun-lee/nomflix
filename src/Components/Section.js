import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
	:not(:last-child) {
		margin-bottom: 50px;
	}
`;

const Title = styled.span`
	font-size: 28px;
	font-weight: 700;
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, 150px);
	column-gap: 25px;
	margin-top: 20px;
`;

const Section = ({ title, children }) => (
	<Container>
		<Title>{title}</Title>
		<Grid>{children}</Grid>
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
