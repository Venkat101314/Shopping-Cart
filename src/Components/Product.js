import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';
import phone from '../Images/phone.jpg';
import lap from '../Images/lap.jpg';


const Product = () => {

  return (
    <div>
      
      <div className='ms-5'>
        <h3>Live now | Grab Sale prices before Sale</h3>
      </div>  
      <Link to="/products">
      <Container className='product mt-3'>
      <Card sx={{width:260}} className='me-3'>
            <div className='card_img'><img src={lap}></img>
              <div className='info'>
                <p style={{ color:'white',marginBottom: '20px'}}>
                  LAPTOP
                </p>
              <div className='shop'>SHOP NOW</div>
              </div>

              </div>
</Card>
<Card sx={{width:260}} className='me-3'>
            <div className='card_img'><img src={phone}></img>
              <div className='info'>
                <p style={{ color:'white',marginBottom: '20px'}}>
                  Mobiles
                </p>
              <div className='shop'>SHOP NOW</div>
              </div>

              </div>
</Card>

<Card sx={{width:260}} className='me-3'>
            <div className='card_img'><img src={lap}></img>
              <div className='info'>
                <p style={{ color:'white',marginBottom: '20px'}}>
                  LAPTOP
                </p>
              <div className='shop'>SHOP NOW</div>
              </div>

              </div>
</Card>
<Card sx={{width:260}} className='me-3'>
            <div className='card_img'><img src={phone}></img>
              <div className='info'>
                <p style={{ color:'white',marginBottom: '20px'}}>
                  Mobiles
                </p>
              <div className='shop'>SHOP NOW</div>
              </div>

              </div>
</Card>
</Container>
      </Link>
     
    </div>
  )
}

export default Product