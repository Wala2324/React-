import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProductListItems from '../Components/ProductListItems';
import Hero from '../Components/Hero'
import SaleSection from '../Components/SaleSection';
import TopSelling from '../Components/TopSelling';
import ProductCard from '../Components/ProductCard';
import NewsLetter from '../Components/NewsLetter';
import Footer from '../Components/footer';
import CategoryLists from '../Components/CategoryLists';



const HomePage = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const getProducts = async () => {
      const res = await axios.get('https://js2-ecommerce-api.vercel.app/api/products');
      setProducts(res.data);
  
    };
    getProducts()


  }, []);
  return (

    <div>
      <Hero />

      <div className='product-header-list'>
           <h1 className='best-collection'>Best Collection</h1>
         
           <CategoryLists/>
        </div>
       <SaleSection  key={products._id} product={products}/>
        {/* <TopSelling  key={products._id} product={products}  />  */}
        <NewsLetter  product={products}/>      
    </div>
  )
}

export default HomePage