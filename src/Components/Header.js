import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Title = styled.span`
  color: #e63e33;
  font-size: 42px;
  font-weight: 700;
  padding: 30px;
`;
const Header = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  box-shadow: 0px 1px 2px 2px rgba(0, 0, 0, 0.8);
  background-color: rgba(20, 20, 20, 0.8);
`;
const List = styled.ul`
    display: flex;
    margin-left: 20px;
`;
const Item = styled.li`
  height: 70px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 5px solid ${props => props.current ? "#e63e33" : "transparent"};
  transition: border-bottom .5s ease-in-out;
`;
const SLink = styled(Link)`
  color: white;
  font-size: 22px;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default withRouter(({location: {pathname}}) => (
  <Header>
    <Title>Nomflix</Title>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
));