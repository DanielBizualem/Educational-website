import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Programs from './Component/Programs/Programs'
import Title from './Component/Title/Title'
import About from './Component/About/About'
import Campus from './Component/Campus/Campus'
import Testimonials from './Component/Testimonials/Testimonials'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'
import VideoPlayer from './Component/VideoPlayer/VideoPlayer'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className='container'>
        <Title subTitle='Our Programs' title='What We Offer'></Title>
       <Programs></Programs>
       <About></About>
       <Title subTitle='Gallery' title='Campus Photos'></Title>
       <Campus></Campus>
       <Title subTitle='Testimonials' title='What Students says'></Title>
       <Testimonials></Testimonials>
       <Title subTitle='Contact Us' title='Get in Touch'></Title>
       <Contact></Contact>
       <Footer></Footer>
      </div>
      
    </div>
  )
}

export default App