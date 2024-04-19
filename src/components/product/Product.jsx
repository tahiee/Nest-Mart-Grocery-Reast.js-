import React from 'react'
import './product.css'
import Product1 from '../../images/popular/product-1-1.jpg'
import Product2 from '../../images/popular/product-2-1.jpg'
const Product = () => {
  
  
    return (
    <>
    <div className='productThumb'>
        <div className="imgWrapper">
            <img src={Product1}  className='w-100'/>
        </div>
    </div>
    </>
  )
}

export default Product