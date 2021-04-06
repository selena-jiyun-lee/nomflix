import styled from 'styled-components';
import Loader from 'Components/Loader';
import Section from 'Components/Section';
import Poster from 'Components/Poster';
import MainVideo from 'Components/MainVideo';

const Container = styled.div`
  width: 100vw;
`;



const HomePresenter = ({ trendsToday, trendsTv, trendsMovie, mainVideo, loading }) => <>{loading ? <Loader /> : (<Container>
  <MainVideo video={mainVideo} />
  <Section mode="slider" title="Trend Now!">
    {trendsToday && trendsToday.map(trends =>
      <Poster
        key={trends.id}
        id={trends.id}
        imgUrl={trends.poster_path}
        title={trends.media_type === 'movie' ? trends.title : trends.name}
        rating={trends.vote_average}
        year={trends.media_type === 'movie' ? trends.release_date.substring(0, 4) : trends.first_air_date.substring(0, 4)}
        isMovie={trends.media_type === 'movie'}
        mode="slider"
        />)}
  </Section>
  {/* {carousel 구현} */}
  <Section mode="slider" title="Movies of This Week">
    {trendsMovie && trendsMovie.map(trends =>
      <Poster
        key={trends.id}
        id={trends.id}
        imgUrl={trends.poster_path}
        title={trends.title}
        rating={trends.vote_average}
        year={trends.release_date.substring(0, 4)}
        isMovie={true}
        mode="slider"
        />)}
  </Section>
  <Section mode="slider" title="TV Shows of This Week">
    {trendsTv && trendsTv.map(trends =>
      <Poster
        key={trends.id}
        id={trends.id}
        imgUrl={trends.poster_path}
        title={trends.name}
        rating={trends.vote_average}
        year={trends.first_air_date.substring(0, 4)}
        isMovie={false}
        mode="slider"
        />)}
  </Section>
</Container>)}</>

export default HomePresenter;