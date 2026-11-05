
import { Ibook } from '@/types/Ibook';
import React from 'react'; 
import BookCard from '../shared/BookCard';
const getbooks = async()=> { 
  const url = 'http://localhost:3000/'
  const res = await fetch(`${url}/booksData.json`);
  const data = await res.json();
  return data; 
} 
console.log(getbooks,'getbooks');

const Books = async() => {
  const books = await getbooks()
  // console.log(books,'books');
  return (
    <div className='container mx-auto my-3'>
      <h2 className='text-center font-bold text-4xl '>Books</h2>
     <div className='grid grid-cols-4 gap-2'> 
       { 
        books.slice(0,5).map((book:Ibook)=>{ 
          return <BookCard book={book} key={book.bookId}/>
        })
      }
     </div>
    </div>
  );
};

export default Books;