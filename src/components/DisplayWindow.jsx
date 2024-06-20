/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from 'react'

const DisplayWindow = ({expression, result}) => {
  return (
    <div className='displaywindow'>
       <p className='expression'>{expression}</p>
       <p className='result'>{result}</p>      
    </div>
  )
}

export default DisplayWindow;
