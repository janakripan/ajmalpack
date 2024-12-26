import React from 'react'
import Hero from './components/Hero'
import Welcome from './components/Welcome'
import SecondSlider from './components/shared/SecondSlider'
import Slider2 from './components/SliderSection2'
import SliderSection2 from './components/SliderSection2'
import Categories from './components/Categories'
import BestSeller from './components/BestSeller'
import PopularCategory from './components/PopularCategory'

function Home() {
  return (
    <>

   <main className='overflow-hidden'>

   <section>
      <Hero/>
    </section>



    <section>
      <Welcome/>
    </section>

    <section>
      <SliderSection2/>
    </section>

    <section>
      <Categories/>
    </section>


    <section>
      <BestSeller/>
    </section>

    <section>
      <PopularCategory/>
    </section>

   </main>


    
    </>
   
  )
}

export default Home
