import React from 'react';
import { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';
const Home = () => {
  const {products}= useContext(ProductContext);
  console.log(products)
  const filteredProducts = products.filter(item=>{
    return (item.category === "electronics"  ||item.category === "jewelery")
  })
  // console.log(filteredProducts);



  return <div>
    <section className='py-6'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-[30px] max-w-screen-sm mx-auto md:max-w-none md:mx-0 '>
          {filteredProducts.map(product => {
            return <div className='w-full h-[300px] bg-teal-100' key={product.id}>
              {/* {product.title}
               */}
               <Product key={product.id}/>
            </div>  
          })}
        </div>
      </div>
    </section>
  </div>;
};

export default Home;
