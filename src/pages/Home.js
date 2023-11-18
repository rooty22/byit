import React from 'react'
import Header from '../components/Header'
import Slider from '../components/elements/Slider'
import FeaturesSec from '../components/sections/FeaturesSec'
import ServiceSec from '../components/sections/ServiceSec'
import OfferSec from '../components/sections/OfferSec'
import TopOffer from '../components/sections/TopOffer'
import BannerSec from '../components/sections/BannerSec'
import BlogSec from '../components/sections/BlogSec'
import DocServSec from '../components/sections/DocServSec'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='Home'>
      {/* Header */}
      <Header/>

      {/* Top Section */}
      <Slider/>

      {/* Features */}
      <FeaturesSec />

      {/* Services */}
      <ServiceSec />

      {/* Offers */}
      <OfferSec />

      {/* Top Offers */}
      <TopOffer />

      {/* Banner */}
      <BannerSec />

      {/* Blog */}
      <BlogSec />

      {/* DocSec */}
      <DocServSec />

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default Home