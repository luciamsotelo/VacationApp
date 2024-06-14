import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Images from '../components/carousel_images'
const home_page = () => {
  return (
    <div className='home'>
      < Header />
      < Footer />
      < Images />
    </div>
  )
}

export default home_page