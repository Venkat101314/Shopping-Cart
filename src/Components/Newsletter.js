import React from 'react'
import SendRoundedIcon from '@mui/icons-material/SendRounded';

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <div style={{
            fontSize: '70px',
            marginBottom: '20px'
        }}>Newsletter</div>
        <div style={{
          fontSize: '24px',
          fontWeight: 300,
          marginBottom: '20px'
        }}>Get timely updates from your favorite products</div>
        <div className='inputContainer'>
        <input
							type="email"
							placeholder="Email"
              style={{
                border: 'none',
  flex: 8,
  paddingLeft: '20px'
              }}
						/>
            <div style={{
                flex: 1,
                border: 'none',
                backgroundColor: 'teal',
                color: 'white',
            }}> <SendRoundedIcon style={{margin:'7px 24px auto'}}/></div>
        </div>
    </div>
  )
}

export default Newsletter