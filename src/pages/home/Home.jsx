import React from 'react'
import Section from './components/sections/Section'
import Carts from './components/sections/Carts'
import TrendingCarts from './components/TrendingCarts'
import Cart from './components/sections/section3/Cart'
import TrendingSection4 from './components/sections/section4/TrendingSection4'

const Home = () => {
    const originalData = [
      { img: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest1.jpg", text: "Cashmere Tank + Bag" },
      { img: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest2.jpg", text: "Cashmere Tank + Bag" },
      { img: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest3.jpg", text: "Cashmere Tank + Bag" },
      { img: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest4.jpg", text: "Cashmere Tank + Bag" },
      { img: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest5.jpg", text: "Cashmere Tank + Bag" },
    ];

    const data = [
      {
        img:"https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest6.jpg",
        text:"Cashmere Tank + Bag"
      },
       {
        img:"https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest7.jpg",
        text:"Cashmere Tank + Bag"
      }, {
        img:"https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest8.jpg",
        text:"Cashmere Tank + Bag"
      },
    ]
  return (
    <>
    <Section/>
    <Carts/>
    <TrendingCarts data={originalData}/>
    <Cart/>
    <TrendingCarts data={data} />
    </>
  )
}

export default Home