import React from 'react';

export default function Ratings(props) {
  if (props.value === undefined || props.value === null) {
    return;
  }
  let rating = parseFloat(props.value).toFixed(1);
  let floorRating = Math.floor(rating);
  let decimalValue = rating - floorRating;
  let floorRatingHTML = [];
  let decimalRatingHTML = [];
  let emptyRatingHTML = [];
  for (let i = 1; i <= floorRating; i++) {
    floorRatingHTML.push(<div className='bi-star-fill' key={i}></div>);
  }
  if (decimalValue === 0.5) {
    decimalRatingHTML.push(<div className='bi-star-half' key={'d'}></div>);
  }
  if (decimalValue > 0.5) {
    decimalRatingHTML.push(<div className='bi-star-fill' key={'d'}></div>);
  }
  let html = [...floorRatingHTML, ...decimalRatingHTML];
  for (let i = 0; i < 5 - html.length; i++) {
    emptyRatingHTML.push(<div className='bi-star' key={i * 10}></div>);
  }
  html = [...floorRatingHTML, ...decimalRatingHTML, ...emptyRatingHTML];
  return (
    <div className='d-flex justify-content-center small text-warning mb-2'>
      {html}
    </div>
  );
}
