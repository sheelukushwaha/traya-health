import React from 'react'
import style from "./HomePage.module.scss";
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import GoogleReview from '../GoogleReview/GoogleReview';
import RootCause from '../RootCause/RootCause';
import Threefold from '../Threefold/Threefold';
import Journey from '../Journey/Journey';
import Solution from '../Solution/Solution';
import OurCustomers from '../OurCustomers/OurCustomers';
import SafeAndScientific from '../SafeAndScientific/SafeAndScientific';
import Essentials from '../Essentials/Essentials';
import TheScience from '../TheScience/TheScience';
import Footer from '../Footer/Footer';

const HomePage = () => {
  return (
    <div className={style.home}>
        <Header />
        <Banner />
        <GoogleReview />
        <RootCause />
        <Threefold />
        <Journey />
        <Solution />
        <OurCustomers />
        <SafeAndScientific />
        <Essentials />
        <TheScience />
        <Footer />
    </div>
  )
}

export default HomePage