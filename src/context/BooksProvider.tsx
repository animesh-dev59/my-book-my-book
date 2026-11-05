'use client'
import { Ibook } from '@/types/Ibook';
import React, { createContext, ReactNode, SetStateAction, useState } from 'react';

interface IBooksContext{ 
  readBooks : Ibook[],
  setReadBooks:React.Dispatch<SetStateAction<Ibook[]>>,
  wishlist:Ibook[],
  setWishlist:React.Dispatch<SetStateAction<Ibook[]>>
}

 export const BooksContext = createContext<IBooksContext>({
  readBooks:[],
  setReadBooks:()=>{},
  wishlist:[],
  setWishlist:()=>{}
});
const BooksProvider = ({children}:{children:ReactNode}) => {
  const [readBooks , setReadBooks] = useState<Ibook[]>([]);
  const [wishlist,setWishlist] = useState<Ibook[]>([]);
  const sharedData = {  
    readBooks,setReadBooks,wishlist,setWishlist
  }
  return (<BooksContext.Provider value={sharedData}> 
  {children} 
  </BooksContext.Provider>
  );
};

export default BooksProvider;