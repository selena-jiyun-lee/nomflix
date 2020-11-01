import React from "react";
import styled from "styled-components";

const Container = styled.div`
	width: 100vw;
	height: 30vh;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 50px;
`;
// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
	<Container>
		<span role="img" aria-label="Loading">
			💜 Loading 💜
		</span>
	</Container>
);
