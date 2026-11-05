'use client'
import { BooksContext } from '@/context/BooksProvider';
import { Ibook } from '@/types/Ibook';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
 
const WishListButton = ({book}:{book:Ibook}) => { 
  const {wishlist,setWishlist} = useContext(BooksContext); 
   const handleWishListButton = ()=> { 
    // console.log('wishlist is clicked btn is done');
    setWishlist([...wishlist,book]);
    // console.log(wishlist,'wishlist is b ook '); 
    toast.success(`you successfully bookName "${book.bookName}"`)
   }
  return (<button 
    onClick={()=>handleWishListButton()}   
    className="btn bg-[#50B1C9] hover:bg-[#3ea0b8] text-white px-8 rounded-lg border-none">
              Wishlist
            </button>
  );
};

export default WishListButton;