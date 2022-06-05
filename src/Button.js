import React from 'react';

export default function Button({ text, id, handleClick }) {
  return (
    <div className='text-center'>
      <a
        className='btn btn-outline-dark mt-auto'
        href='#'
        data-id={id}
        onClick={handleClick}
      >
        {text}
      </a>
    </div>
  );
}
