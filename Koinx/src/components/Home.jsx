import React from 'react'
import Graph from './Graph'
import Card from './Card'
import Trending from './Trending'
import Team from './Team'
import Tokenomics from './Tokenomics'
import About from './About'
import Sentiments from './Sentiments'

const Home = () => {
  return (
    <div className='w-full px-[56px] flex'>
      <div className='w-[66.63%]'>
        <Graph className=""/>
        <Sentiments />
        <About />
        <Tokenomics />
        <Team />
      </div>
      <div className='w-[33.33%]'>
        <Card className="ml-[20px]"/>
        <Trending className="ml-[20px] pt-[20px]"/>
      </div>
    </div>
  )
}

export default Home
