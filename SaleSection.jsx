import React from 'react'
import { Link } from 'react-router'
import ProductListItems from './ProductListItems'



const SaleSection = ({product}) => {
  return (
    <div className='sale-container'> 
        <div className='sale-card'>
             <div className='sale-card-text'>
                <Link className='product ' to={`/product/${product._id}`}>
            
                        <img className="sale-image-size head-phone " src='./public/assets/smart-watch.webp'alt="headphone" /> 
                    <div className="white-bg">
                        <h4 className='product-name'>HeadPhone - scelerisque tempore</h4>
                        <div className='card-bottom bottom-sale'>
                            <p className='product-price'>500 SEK</p>
                            <button className='card-icon'><svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" color="gray"  viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg></button>
                        </div>
                    </div>
                </Link>
              </div>
               <div className='sale-card-text sale-image-size'>  
                        <h4 className='top-header'>UP TO SELL</h4>  
                        <h1 className='sale-header'>50% OFF</h1>   
                        <h4 className='bottom-header'>Get The Best Price</h4>  
                        <div>
                            <p className='sale-para'>Get the best daily offer et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren no sea taki</p>
                            <p className='discover-more'>Discover More </p>
                        </div> 
               </div>
               <div className='sale-card-text'>
                  <Link className='product' to={`/product/${product._id}`}>

                         <img className="sale-image-size jbl-img" src='./public/assets/sale headphone.avif'
                         alt="phone-image" /> 
                    <div className="white-bg">
                        <h4 className='product-name'>Table Lamp - scelerisque tempore</h4>
                        <div className='card-bottom bottom-sale '>
                            <p className='product-price'>500 SEK</p>
                            <button className='card-icon'><svg xmlns="http://www.w3.org/2000/svg" height="25px" width="25px" color="gray" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg></button>
                        </div>
                    </div>
                   </Link>
                </div> 
        </div>
    </div>
  )
  
}

export default SaleSection