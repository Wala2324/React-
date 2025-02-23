import React from 'react'
import {Link} from 'react-router'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProductCard from './ProductCard'

const TopSelling = () => {

  const [products, setProducts] = useState([]);
 

   useEffect(() => {

     const getProducts = async () => {
     
 
        const res = await axios.get('https://js2-ecommerce-api.vercel.app/api/products');
        setProducts(res.data)

     };
   getProducts();
    
    }, []);

    

    return (

        <div className="top-selling-container" key={products._id}>
          <div>
              <h1 className='top-selling-header'>Top selling products in this week</h1>
           </div>
           <div className='top-selling-products'>

             {products.map((product) =>  < ProductCard key={products.id} product={products}/>)}
           </div>
           <div className='next-button'>
              <button className='previous arrow'>{'<'}</button>
              <button className='next arrow'>{'>'}</button>
             
           </div>
           <div className='top-selling-bottom'>
                <div className='table-lamp-card'>
                    <img className='tabel-lamp-image' src="./public/assets/370x295.svg" alt="" />
                    <h4 className='tabel-lamp'>Table lamp 1562 LTG modal</h4>
                    <p className='tabel-lamp-text'>Best dress for everyone ed totam velit risus viverra nobis donec recusandae perspiciatis incididuno</p>
                    <div className='tabel-lamp-bottom'>
                        <p className='post'>POST BY: ADMIN</p>
                        <p className='comment'>COMMENTS 13</p>
                    </div>
                </div>

                <div className='table-lamp-card'>
                    <img className='tabel-lamp-image' src="./public/assets/370x295.svg" alt="" />
                    <h4 className='tabel-lamp'>Table lamp 1562 LTG modal</h4>
                    <p className='tabel-lamp-text'>Best dress for everyone ed totam velit risus viverra nobis donec recusandae perspiciatis incididuno</p>
                    <div className='tabel-lamp-bottom'>
                        <p className='post'>POST BY: ADMIN</p>
                        <p className='comment'>COMMENTS 13</p>
                    </div>
                </div>

                <div className='table-lamp-card'>
                    <img className='tabel-lamp-image' src="./public/assets/370x295.svg" alt="" />
                    <h4 className='tabel-lamp'>Table lamp 1562 LTG modal</h4>
                    <p className='tabel-lamp-text'>Best dress for everyone ed totam velit risus viverra nobis donec recusandae perspiciatis incididuno</p>
                    <div className='tabel-lamp-bottom'>
                        <p className='post'>POST BY: ADMIN</p>
                        <p className='comment'>COMMENTS 13</p>
                    </div>

                </div>
             
           </div>
        </div>

    )
};

    

export default TopSelling