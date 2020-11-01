import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
	width: 100vw;
	height: 30vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Text = styled.span`
	font-size: 20px;
	color: ${(props) => props.color};
`;

const Message = ({ text, color }) => (
	<Container>
		<Text color={color}>{text}</Text>
	</Container>
);

Message.propTypes = {
	text: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired
};

export default Message;
