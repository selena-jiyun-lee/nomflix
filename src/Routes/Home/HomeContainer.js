import React from 'react';
import HomePresenter from 'Routes/Home/HomePresenter';
import { trendApi } from 'api';

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  state = {
    trendsToday: null,
    trendsWeek: null,
    trendsTv: null,
    trendsMovie: null,
    mainVideo: null,
    loading: true,
    error: null
  }

  async componentDidMount() {
    try {
      const { data: {results: trendsToday} } = await trendApi.todayAll();
      const randomNum = Math.floor(Math.random() * 20);
      const { data: { results: trendsTv } } = await trendApi.weekTv();
      const { data: { results: trendsMovie } } = await trendApi.weekMovie();
      this.setState({
        trendsToday,
        trendsTv,
        trendsMovie,
        mainVideo: trendsToday[randomNum]
      });
      console.log(this.state);
    } catch {

    } finally {
      this.setState({loading: false})
    }
  }
  render() {
    const { trendsToday, trendsTv, trendsMovie, mainVideo, loading } = this.state;
    return <HomePresenter trendsToday={trendsToday} trendsTv={trendsTv} trendsMovie={trendsMovie} mainVideo={mainVideo} loading={loading}/>
  }
}