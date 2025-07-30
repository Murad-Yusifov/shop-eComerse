import React from 'react'
import Section from './components/sections/Section'
import Carts from './components/sections/Carts'
import TrendingCarts from './components/TrendingCarts'
import AllCarts from './components/sections/section3/AllCarts'

const Home = () => {
    const originalData = [
      { img: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest1.jpg", text: "Cashmere Tank + Bag" },
      { img: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest2.jpg", text: "Cashmere Tank + Bag" },
      { img: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest3.jpg", text: "Cashmere Tank + Bag" },
      { img: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest4.jpg", text: "Cashmere Tank + Bag" },
      { img: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest5.jpg", text: "Cashmere Tank + Bag" },
    ];
  return (
    <>
    <Section/>
    <Carts/>
    <TrendingCarts data={originalData}/>
    <AllCarts/>
    </>
  )
}

export default Home