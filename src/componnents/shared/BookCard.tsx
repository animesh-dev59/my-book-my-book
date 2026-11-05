import { Ibook } from '@/types/Ibook';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'; 


const BookCard = ({book}:{book:Ibook}) => {
  return (  <div className="w-full max-w-sm mx-auto p-4">
      <div className="card bg-base-100 w-full shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
        <figure className="relative h-48 w-full bg-gray-100">
          <Image
            src={book.image}
            alt={book.bookName}
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            className="object-cover"
          />
        </figure>
        
        <div className="card-body">
          <h2 className="card-title flex justify-between items-start">
            <span className="line-clamp-1">{book.bookName}</span>
            <div className="badge badge-secondary shrink-0">{book.category}</div>
          </h2>
          
          <p className="text-sm text-gray-600 font-medium">Author: {book.author}</p>
          
          <p className="text-xs text-gray-500 line-clamp-2 mt-1">{book.review}</p>
          
          <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
            <span>Publisher: {book.publisher}</span>
            <span>Year: {book.yearOfPublishing}</span>
          </div>
          <div className='mx-auto'>
          <Link href={`/books/${book.bookId}`}>  
            <button className='btn btn-success'>View Details</button> 
            </Link>
          </div>
        </div>
      </div>
  </div>
  )
};

export default BookCard;