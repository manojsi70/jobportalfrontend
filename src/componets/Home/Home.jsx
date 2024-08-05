import React from 'react'
import Navbar from '../navbar/Navbar'
import HeroSection from '../pages/HeroSection';
import CategoryCorousel from '../pages/CategoryCorousel';
import LatestJobs from '../pages/LatestJobs';
import Footer from '../pages/Footer'

function Home() {
  return (
    <div className='all-files-home'>
      <Navbar/>
      <HeroSection/>
      <CategoryCorousel/>
      <LatestJobs/>
      <Footer/>
    </div>
  )
}

export default Home
