import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({id,title,price,rating,image}) {
    const [{basket},dispatch] = useStateValue();
    const  addToBasket=()=>{
       dispatch({
           type:'ADD_TO_BASKET',
           item:{
               id:id,
               title:title,
               image:image,
               price:price,
               rating:rating,
           },

       })
    }
  return (
    <div className='product'>
        <div className='product_info'>
        <p>{title}</p>
        <p className='product__price'>
            <small>Rs.</small>
            <strong>{price}</strong>
        </p>
        <div className='product__rating'>
            {
                Array(rating)
                .fill()
                .map((_)=>(
                    <p>⭐</p>
                ))
            }
        </div>
        </div>
       
        <img src={image} alt='productImage'/>
        <button onClick={addToBasket}>Add To Basket</button>

    </div>
  )
}

export default Product