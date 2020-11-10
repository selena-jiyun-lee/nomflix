import React, { useState } from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
	margin-top: 30px;
`;

const SelectedContainer = styled.div`
	width: 100%;
	height: auto;
	min-height: 300px;
	background-color: rgba(0, 0, 0, 0.8);
	padding: 20px;
`;

const TabButton = styled.button`
	background-color: rgba(0, 0, 0, 0.8);
	color: white;
	border: solid 1px white;
	border-bottom: none;
	padding: 10px;
	&:focus {
		text-decoration: none;
	}
`;

const Item = styled.div`
	margin: 8px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const Title = styled.span`
	font-size: 18px;
	display: block;
`;

const Name = styled.span``;

const CompanyLogo = styled.img`
	width: 30px;
	margin-right: 10px;
`;

const PosterList = styled.ul`
	height: 300px;
	overflow-x: scroll;
	display: flex;
`;
const Poster = styled.li`
	display: flex;
	flex-direction: column;
	margin: 5px 10px;
`;
const PosterImg = styled.img`
	height: 250px;
	margin-bottom: 5px;
`;

const useTabs = (initialTab, allTabs) => {
	const [selected, setSelected] = useState(initialTab);
	if (!allTabs || !Array.isArray(allTabs)) {
		return;
	}
	return { selected: allTabs[selected], changeItem: setSelected };
};

const Tab = ({ productionCountries, productionCompanies, videos, seasons }) => {
	const content = [
		{
			companies: productionCompanies,
			countries: productionCountries
		},
		videos,
		seasons
	];
	const tabs = useTabs(0, content);
	return (
		<Container>
			<TabButton onClick={() => tabs.changeItem(0)}>
				Production Information
			</TabButton>
			<TabButton onClick={() => tabs.changeItem(1)}>Videos</TabButton>
			{content[2].seasons && content[2].seasons.length > 0 && (
				<TabButton onClick={() => tabs.changeItem(2)}>
					Seasons
				</TabButton>
			)}
			{console.log(tabs.selected)}
			<SelectedContainer>
				{tabs.selected.results && tabs.selected.results.length > 0 && (
					<>
						<Title>Videos</Title>
						{tabs.selected.results.map((video) => (
							<Item key={video.id}>
								<Name>{video.name}</Name>
							</Item>
						))}
					</>
				)}
				{tabs.selected.companies && tabs.selected.companies.length > 0 && (
					<>
						<Title>Production Companies</Title>
						{tabs.selected.companies.map((company, i) => (
							<Item key={company.id}>
								{company.logo_path && (
									<CompanyLogo
										src={`https://image.tmdb.org/t/p/w300/${company.logo_path}`}
									/>
								)}
								<Name>{company.name}</Name>
							</Item>
						))}
					</>
				)}

				{tabs.selected.countries && tabs.selected.countries.length > 0 && (
					<>
						<Title>Production Countries</Title>
						{tabs.selected.countries.map((country, i) => (
							<Item key={country.name}>
								<Name>{country.name}</Name>
							</Item>
						))}
					</>
				)}

				{tabs.selected.seasons && tabs.selected.seasons.length > 0 && (
					<PosterList>
						{tabs.selected.seasons.map((season, i) => (
							<Poster key={season.id}>
								<PosterImg
									src={`https://image.tmdb.org/t/p/w300/${season.poster_path}`}
								/>
								<Name>{season.name}</Name>
							</Poster>
						))}
					</PosterList>
				)}
			</SelectedContainer>
		</Container>
	);
};

export default Tab;
