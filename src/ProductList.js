import React from 'react';
import Ratings from './Ratings';
import Button from './Button';

export default function ProductList({ productData, productIndex, handleClick }) {
  const btnText = productData.priceRange ? 'View Options' : 'Add to cart';
  return (
    <div className='col mb-5'>
      <div className='card h-100'>
        {productData.sale ? (
          <div
            className='badge bg-dark text-white position-absolute'
            style={{ top: '0.5rem', right: '0.5rem' }}
          >
            Sale
          </div>
        ) : (
          <div></div>
        )}
        <img className='card-img-top' src={productData.image} alt='...' />
        <div className='card-body p-4'>
          <div className='text-center'>
            <h5 className='fw-bolder'>{productData.title}</h5>
            <Ratings value={productData.rating} />
            {productData.priceRange ? (
              <div>
                ${parseInt(productData.startPrice).toFixed(2)} - $
                {parseInt(productData.endPrice).toFixed(2)}
              </div>
            ) : productData.listPrice != null ? (
              <div>
                <span className='text-muted text-decoration-line-through mr-2'>
                  ${parseInt(productData.listPrice).toFixed(2)}
                </span>
                ${parseInt(productData.price).toFixed(2)}
              </div>
            ) : (
              <div>${parseInt(productData.price).toFixed(2)} </div>
            )}
          </div>
        </div>
        <div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>
          <Button text={btnText} id={productIndex} handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
}
