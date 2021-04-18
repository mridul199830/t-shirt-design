import React from 'react'
import './Satting.css'
const imageUrl = 'https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/'

function Satting({color, upperText, lowerText, uploadImage, textSize, textColor}) {
    return (
        <div className='card bg-light cintainer'>
            <h3 className='text-center'>stting</h3>
            <h4>chance t-shirtcolor</h4>
            <div className='tshirt-color'>
                <img onClick={color} src={`${imageUrl}black.png`} alt='black-tshirt' id='black' />
                <img onClick={color} src={`${imageUrl}white.png`}  alt='white-tshirt'id='white' />
                <img onClick={color} src={`${imageUrl}blue.png`}  alt='blue-tshirt' id='blue'/>
                <img onClick={color} src={`${imageUrl}red.png`}  alt='red-tshirt'id='red' />
                <img onClick={color} src={`${imageUrl}grey.png`}  alt='grey-tshirt'id='grey' />
                
            </div>
            <hr/>
            <h4>Write text</h4>
            <input onChange={upperText} type='text' className='form-control from-control-sm mb-2' placeholder='upper text'/>
            <input onChange={lowerText} type='text' className='form-control from-control-sm ' placeholder='lower text'/>
            <hr/>
            <h4>uplood file</h4>
            <input onChange={uploadImage} type='file' className=' from-control-file mb-2' placeholder='uplood file'/>
            <hr/>
            <h4>text size</h4>
            <input onChange={textSize} type='range' min='12' max='45'/>
            <hr/>
            <h4>text color</h4>
            <select onChange={textColor} className='form-control from-control-sm mb-2'>
                <option>white</option>
                <option>black</option>
                <option>red</option>
                <option>blue</option>
            </select>
            <hr/>
            <button className='btn btn-primary btn-sm mb-2'>Save</button>
        </div>
    )
}

export default Satting
