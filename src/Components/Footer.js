import React from 'react'
import FacebookIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';

const Footer = () => {
  return (
    <div className='d-flex'>
    <div className='foot_left'>
      <div><h1>Shopping Cart.</h1></div>
      <div style={{
  margin: '20px 0px'}}>
        There are many variations of passages of Lorem Ipsum available, but
        the majority have suffered alteration in some form, by injected
        humour, or randomised words which don’t look even slightly believable.
      </div>
      <div className='d-flex w-75' style={{justifyContent: "space-between"}}>
      <a href="https://facebook.com/"><FacebookIcon/></a>
      <a href="https://instagram.com/"> <InstagramIcon /></a>
      <a href="https://twitter.com/"><TwitterIcon /></a>
      <a href="https://pinterest.com/"><PinterestIcon /></a>
      </div>
    </div>
    <div style={{ flex: 1,padding: 20}}>
      <div style={{marginBottom: 30}}>Useful Links</div>
      <div className='lists'>
        <div className='listItem'>Home</div>
        <div className='listItem'>Cart</div>
        <div className='listItem'>Man Fashion</div>
        <div className='listItem'>Woman Fashion</div>
        <div className='listItem'>Accessories</div>
        <div className='listItem'>My Account</div>
        <div className='listItem'>Order Tracking</div>
        <div className='listItem'>Wishlist</div>
        <div className='listItem'>Wishlist</div>
        <div className='listItem'>Terms</div>
      </div>
    </div>
    <div style={{ flex: 1,padding: 20}}>
      <div>Contact</div>
      <div className='contactItems'>
        <HomeIcon style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
      </div>
      <div className='contactItems'>
        <PhoneIcon style={{marginRight:"10px"}}/> +1 234 56 78
      </div>
      <div className='contactItems'>
       <a href="https://mailto:someone@gmail.com"> <MailOutlineIcon style={{marginRight:"10px"}} /> contact@lama.dev </a>
      </div>
      <div className='w-50' src="https://i.ibb.co/Qfvn4z6/payment.png" />
    </div>
  </div>
  )
}

export default Footer