import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar.js';
import Header from './Header.js';
import ProductList from './ProductList.js';
import Footer from './Footer.js';
import data from './data.js';

function App() {
  const [itemCount, setItemCount] = useState(0);

  const handleClick = (e) => {
    console.log(e.target.getAttribute('data-id'), e.target.innerText);
    if (e.target.innerText === 'Add to cart') {
      e.target.innerText = 'Remove from cart';
      setItemCount((itemCount) => itemCount + 1);
    } else if (e.target.innerText === 'Remove from cart') {
      e.target.innerText = 'Add to cart';
      setItemCount((itemCount) => itemCount - 1);
    } else if ((e.target.innerText = 'View Options')) {
    }
  };
  
  return (
    <div className='App'>
      <Navbar cartCount={itemCount} />
      <Header />
      <section className='py-5'>
        <div className='container px-4 px-lg-5 mt-5'>
          <div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
            {data.map((data, index) => {
              return (
                <ProductList
                  productData={data}
                  productIndex={index}
                  handleClick={handleClick}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
