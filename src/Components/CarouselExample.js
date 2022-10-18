import {sliderItems} from '../data'
import './styles.css';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import {useState} from 'react';
import {Carousel} from 'react-responsive-carousel';

function CarouselExample() {
  
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Carousel interval={1000}>
       {sliderItems.map((item) => (
        <div className='slide' bg={item.bg} key={item.id}>
          <div className='imgContainer'>
            <div className='carr_img'><img src={item.img}></img></div>
          </div>
          <div className='infoContainer'>
            <div style={{ fontSize: '70px', color: 'white'}}>{item.title}</div>
            <div className='desc'>{item.desc}</div>
            <div className='carr_btn'></div>
          </div>
        </div>
        ))}
    </Carousel>
  );
}

export default CarouselExample;