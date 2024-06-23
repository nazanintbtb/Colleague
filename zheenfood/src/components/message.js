import React from 'react'
import {Alert} from 'react-bootstrap'

// display: flex;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   height: 100vh;

export default function Message({variant,text}) {
    return (
        <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100px',
       
      }}
    >
         <Alert variant={variant} >
            <Alert.Heading >{text} </Alert.Heading>
            {/* {text}             */}
        </Alert>

    </div>
       
    )
}
