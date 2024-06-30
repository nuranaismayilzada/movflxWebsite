import React from 'react'
import Photo from '../../components/photo/Photo'
import UpcomingMovies from '../../components/upcomingmovies/UpcomingMovies'
import Resolotion from './../../components/resolotionpage/Resolotion';
import TwoCardsSection from './../../components/cardsTwoSection/TwoCardsSection';
import Topsection from './../../components/topSection/Topsection';
import WorldBestMovies from './../../components/worldBest/WorldBestMovies';
import Email from './../../components/email/Email';
import FooterMenu from './../../components/footermenu/FooterMenu';
import Footer from './../../components/footer/Footer';

const Home = () => {
  return (
    <div>
      <Photo/>
      <UpcomingMovies/>
      <Resolotion/>
      <TwoCardsSection/>
      <Topsection/>
      <WorldBestMovies/>
      <Email/>
      <FooterMenu/>
      <Footer/>
    </div>
  )
}

export default Home
