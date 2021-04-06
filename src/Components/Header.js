import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Title = styled.span`
	color: #e63e33;
	font-size: 28px;
	font-weight: 700;
	padding-left: 30px;
`;

const Header = styled.header`
	display: flex;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 60px;
	background: rgb(20,20,20);
	background: ${props => props.isTop ? 'linear-gradient(180deg, rgba(20,20,20,0.9262079831932774) 0%, rgba(20,20,20,0.7945553221288515) 41%, rgba(20,20,20,0.4023984593837535) 84%, rgba(20,20,20,0) 100%)' : 'rgba(20, 20, 20, 1)'};

	z-index: 10;
`;
const List = styled.ul`
	display: flex;
	margin-left: 20px;
`;
const Item = styled.li`
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: ${(props) => (props.current ? "800" : "500")};
	padding: 0 20px;
	/* flex: none; */
	&:last-child{
		/* flex: 1; */
	}
`;
const SLink = styled(Link)`
	color: white;
	font-size: 16px;
`;



// eslint-disable-next-line import/no-anonymous-default-export
export default withRouter(({ location: { pathname } }) => {
	const [scrollY, setScrollY] = useState(window.scrollY);

	const handleScroll = () => {
		const scrollTop = document.documentElement.scrollTop;
		setScrollY(scrollTop);
		console.log(scrollTop);
	};
	
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});

	return (<Header isTop={scrollY === 0}>
		<Title>Netflix</Title>
		<List>
			<Item current={pathname === "/"}>
				<SLink to="/">Home</SLink>
			</Item>
			<Item current={pathname === "/tv"}>
				<SLink to="/tv">TV</SLink>
			</Item>
			<Item current={pathname === "/moive"}>
				<SLink to="/movie">Movie</SLink>
			</Item>
			<Item current={pathname === "/latest"}>
				<SLink to="/latest">New! Contents</SLink>
			</Item>
			<Item current={pathname === "/my"}>
				<SLink to="/my_contents">My Contents</SLink>
			</Item>
			<Item>
				<SLink to="/search"><FontAwesomeIcon icon={faSearch} /></SLink>
			</Item>
		</List>
	</Header>)
});
