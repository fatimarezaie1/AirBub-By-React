import React from 'react'
import Navbar from './navbar'
import Hero from './hero'
import Card from './card'

import data from "./data"
  
export default function App(){
    const cards = data.map(item => {
        return (
            <Card 
                img={item.coverImg}
                star ={item.star}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
            />
        )
    })   
    return (
        <div className='container'>
            <Navbar />
            <Hero />
            <section className='section-body'>
                {cards}
            </section>
            
           
        </div>
    )
}