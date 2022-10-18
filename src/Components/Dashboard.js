import { Container } from '@mui/material';
import React from 'react'
import CarouselExample from './CarouselExample';
import Header from "./Header";
import Product from "./Product";
import './styles.css'
import Announcement from './Announcement';
import headset from '../Images/headset.jpg'
import tv from '../Images/tv.jpg';
import Newsletter from './Newsletter';
import Footer from './Footer'



const Dashboard = () => {

 
  return (
    <div>
      <Header/>
      <Announcement/>
      <div className="banner"><CarouselExample/></div>
      <div style={{marginTop: '-40px'}}>
        <Product/>
        <Product/>
        <Product/>
      </div>
      <div><Newsletter/></div>
      <Footer/>
    </div>

  )
}

export default Dashboard