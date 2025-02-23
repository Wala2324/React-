import React from 'react'
import {Link} from 'react-router'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const ProductListItems = () => {

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [visibleProduct, setVisibleProduct] = useState(8)

   const handelClick = () => {

        setVisibleProduct(products.length);
      };
 

  useEffect(() => {

    const getProducts = async () => {
      setLoading(true)
      try{
      const res = await axios.get('https://js2-ecommerce-api.vercel.app/api/products');
      setProducts(res.data)
     }catch (err) {
      setError('Something went wrong!');
      console.error(err);

    } finally{
      setLoading(false);
     }
    };
    getProducts()
    
  }, [])

  
  const cardItem = (product) =>{

    const handelClick = () => {
      addToCart(product)
  
    }
    

    return (
      
          <div className="product-list" key={product._id}>
              <div className='card'>
                  <Link className='product' to={`/product/${product._id}`}>
                        <div>
                          <img className="card-image" src={ product.images[0] } 
                          alt={product.name}  /> 
                        </div>
                          <h4 className='product-name'>{product.name}</h4>
                          <div className='card-bottom'>
                            <p className='product-price'>{product.price} SEK</p>
                            <p className='product-category'>{product.category} </p>
                            <button onClick={handelClick} className='card-icon'><svg xmlns="http://www.w3.org/2000/svg" height="25px" width="25px" color="gray" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg></button>
                          </div>
                  </Link>
              </div>
          </div>
    
    )
  }

  return(
   <div>   
     <div className="product-list">
        {
          products.slice (0, visibleProduct). map( cardItem )
        }
        {visibleProduct < products.length} 
      </div>
      <div className='load-more'>
          <button className='loading-btn' onClick={handelClick}>LOAD MORE <svg xmlns="http://www.w3.org/2000/svg" height="14px" width="14px" viewBox="0 0 512 512"><path d="M463.5 224l8.5 0c13.3 0 24-10.7 24-24l0-128c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8l119.5 0z"/></svg></button>
      </div>
   </div>
  )
} 

export default ProductListItems