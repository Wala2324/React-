import React from 'react'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useCart } from '../Context/ProductContext'
import TopSelling from '../Components/TopSelling'
import ProductCard from '../Components/ProductCard'
import ProductListItems from '../Components/ProductListItems'


const ProductDetailPage = () => {

  const {product_id} = useParams()

  const [product, setProduct] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

   const { addToCart } = useCart()


   useEffect(() => {
    const getProduct = async () => {
      setLoading(true)

      try{
        const res = await axios.get(`https://js2-ecommerce-api.vercel.app/api/products/${product_id}`);

        setProduct(res.data)
        console.log(product_id);


      } catch (error) { 
        setError(error.response?.data?.message || 'Something went wrong!')
        console.log(error.message)
        

      }finally{
        setLoading(false)
      }
    };
     getProduct();

  }, []);

  const handelClick = () => {
    addToCart(product)

  }

  if (error) {
    return(
      <p className='product-error-message'>{error}</p>
    )
  }

  if (loading  ) {
    return (
     <p className='loading'>Loading...</p>
    )
  }
  if(!product) {
    
   return (
    <p className='loading'>Product not found.</p>
   )
  }
   

  return (
    <div>

           <header className='product-detail-header'>
              <div className="shop-home">
                <h1 className='shop'> SHOP</h1>
                <p className='home'>HOME. PRODUCT DETAILS</p>
               </div>
            </header>


          <div className='product-detail-content'>
            <div className='product-image-container' >
              <img className='product-detail-image' src={product.images[0]}
              alt={product.name} />
              <div></div>
            </div>
            <div className='Products-detail'>
              <h2 className='detail-name'>{product.name}</h2>
              <p className='product-description'>{product.description.slice(0, 200)}</p>
              <div className='stars'>
                <div className="one">
                  <ul className='review-icon'>
                    <li><svg xmlns="http://www.w3.org/2000/svg"   height='20px' width='20px' viewBox="0 0 576 512" fill='rgb(238, 166, 10)'><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></li>
                    <li><svg xmlns="http://www.w3.org/2000/svg"   height='20px' width='20px'viewBox="0 0 576 512"  fill='rgb(238, 166, 10)'><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></li>
                    <li><svg xmlns="http://www.w3.org/2000/svg"   height='20px' width='20px'viewBox="0 0 576 512"  fill='rgb(238, 166, 10)'><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></li>
                    <li><svg xmlns="http://www.w3.org/2000/svg"   height='20px' width='20px' viewBox="0 0 576 512"  fill='rgb(238, 166, 10)'><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></li>
                  </ul>
                </div>
                <div className="review-text">
                  <p className='product-review'> 16 Reviews</p>
                </div>
              </div>
              <p className='product-detail-price'>{product.price} SEK</p>
              
              <button className='product-detail-btn' onClick={handelClick}>Add to Cart <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" color= "white" viewBox="0 0 576 512" fill='white'><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg></button>
              <p> SKU:N/A {product.sku}</p>
              <button  className= 'wish-list'onClick={handelClick}>Add to wishlist</button>
              <p className='product-detail.category'>Category: {product.category}</p>

            </div>
          </div>
            <div className='detail-lists' >
                 <ul className='product-info'>
                    <li className='detail-list red-list'>DESCRIPTION</li>
                    <li className='detail-list  '>ADDITIONAL INFO</li>
                    <li className='detail-list'> REVIEWS (0)</li>
                    <li className='detail-list'>SHIPPING & DELIVERY</li>
                 </ul>

            </div>
            <div className='product-detail-bottom'>
              <h2 className='bottom-title'>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie.
              </h2>
              <div className='bottom-flex'>
                <div className='text-part'>
                   <p className='detail-text-part'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et cusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata santus est Lorem ipsum dolor sit amet. Lorem ipsum dolor.</p>

                   <p className='detail-text-part'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et cusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata santus est Lorem ipsum dolor sit amet. Lorem ipsum dolor.</p>
                   <p className='detail-text-part'>Praesentium, pariatur, tempora consequuntur purus sapiente, iaculis vitae consequatur, rhoncus earum eleifend, hendrerit ipsum rhoncus ex error, impedit! Alias laboris sequi curae aptent? Eu sagittis eu, distinctio tortor? Dapibus delectus! Consequuntur luctus.</p>

                   <p className='detail-text-part'>accusantium laborum pretium hic excepturi harum repellat facilisis convallis potenti, adipiscing lectus aliqua. Asperiores repudiandae ipsam error erat, accusamus, cum tacit.</p>

                </div>
                <div className='image-part'>
                   <img className='detail-image-part'src={product.images[0]}alt="" />
                </div>
              </div>

            </div>
            <div className='related-products'>
                <h1 className='related-products'>Related Products</h1>
                    < ProductListItems key={product.id} products={product}/>
            </div>

          
      
        
      
    </div>
  
  );
}

export default ProductDetailPage