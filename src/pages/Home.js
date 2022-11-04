import React from 'react';
import Banner from '../components/home/Banner';
import Discover from '../components/home/Discover';
import FeaturedListing from '../components/home/FeaturedListing';
import Header from '../components/home/Header';
import LatestAdded from '../components/home/LatestAdded';
import LatestBlog from '../components/home/LatestBlog';

import Footer from '../components/home/Footer';
import Partners from '../components/home/Partners';

function Home() {
  return (
    <>
        <Header />
        <Banner />
        {/* <Discover /> */}
        <FeaturedListing />
        <LatestBlog />
        <LatestAdded />
        <Partners />
        <Footer />
    </>
  )
}

export default Home