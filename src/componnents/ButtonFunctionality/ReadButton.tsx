'use client'
import { BooksContext } from '@/context/BooksProvider';
import { Ibook } from '@/types/Ibook';
// import { BooksContext } from '@/context/BooksProvider';
import { useContext } from 'react';
import { toast } from 'react-toastify';

const ReadButton = ({book}:{book:Ibook}) => { 
  const {readBooks ,setReadBooks}=useContext(BooksContext);
 const handleReadButton = ()=>{ 
  // console.log('read Button clicked');
       setReadBooks([...readBooks,book]);
       toast.success(`You Success Fulll "${book.bookName}"`)
      //  console.log(setReadBooks,'setReadbooks');
      //  console.log(readBooks,'readBooks');
 }
  return ( <button  
    onClick={()=>handleReadButton()}
     className="btn btn-outline px-8 rounded-lg">Read</button>
  );
};

export default ReadButton;