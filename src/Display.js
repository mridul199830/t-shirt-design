import React from 'react'
import './Display.css'

function Display({ display, formateText }) {
    console.log(display.textColor)
    return (
        <div className='card card-content'>
            <div className='imgTshirt text-center'>
                <img
                    className='img-responsive'
                    src= {`https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/${display.thirtColor}`}
                    alt= 't-shirt-image'
                />
            </div>
            <div className='memeText text-center'>
                <div className='upper-text'>
                    <p style={{fontSize:formateText, color:display.textColor }}>{display.upperText}</p>
                    
                </div>
                <img
                 src= {`${display.url}`||'http://via.placeholder.com/400x300'}
                 alt='meme-imge'                                                                      
                />
                <div className='lower-Text'>
                <p style={{fontSize:formateText, color:display.textColor }}>{display.lowerText}</p>
                </div>o
            </div>
            
            
        </div>
    )
}

export default Display
