'use client'
import { BooksContext } from '@/context/BooksProvider';
import React, { useContext } from 'react';

const ListtedBooks = () => { 
  const {readBooks , wishlist} = useContext(BooksContext)
  return (
    <div className='container mx-auto '>
       <h3 className='text-3xl font-bold text-center rounded-4xl  bg-slate-400 py-3 my-2'>Books</h3>
       {/* name of each tab group should be unique */}
<div className="tabs tabs-border">
  <input type="radio" name="my_tabs_2" className="tab" aria-label="Read Books" />
  <div className="tab-content border-base-300 bg-base-100 p-10">Read Books is section</div>

  <input type="radio" name="my_tabs_2" className="tab" aria-label="Wishlist Books" defaultChecked />
  <div className="tab-content border-base-300 bg-base-100 p-10">WishList Books is section</div>
</div>
    </div>
  );
};

export default ListtedBooks;