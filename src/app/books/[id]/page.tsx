import React from 'react';  
import { getbooks } from '../page';
import { Ibook } from '@/types/Ibook';
import Image from 'next/image';
import ReadButton from '@/componnents/ButtonFunctionality/ReadButton';
import WishListButton from '@/componnents/ButtonFunctionality/WishListButton';
interface IViewDetailsPages { 
  params: Promise<{ 
    id:string
  }>
}

const ViewDetailsPages = async({params}:IViewDetailsPages) => { 
  const {id} = await params;
  const booksData = await getbooks();
  const book = booksData.find((book:Ibook)=>(book.bookId === Number(id))) as Ibook;
  console.log(book,'view detaisl book')
  return (
    <div className='container mx-auto '>
     <div className="max-w-6xl mx-auto p-6 lg:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Book Image Container */}
        <div className="bg-base-200 rounded-3xl p-8 lg:p-16 flex justify-center items-center">
          <div className="relative w-full object-cover h-[650] shadow-2xl rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <Image
              src={book.image}
              alt={book.bookName}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right Side: Book Details Information */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold font-serif text-base-content">
            {book.bookName}
          </h1>
          <p className="text-lg font-medium text-base-content/80">
            By : <span className="font-semibold">{book.author}</span>
          </p>

          <div className="divider my-2"></div>

          <p className="text-lg font-medium text-base-content/80">
            {book.category}
          </p>

          <div className="divider my-2"></div>

          <p className="text-base-content/70 leading-relaxed">
            <span className="font-bold text-base-content">Review : </span>
            {book.review}
          </p>

          {/* Tags */}
          <div className="flex items-center gap-3 pt-2">
            <span className="font-bold text-base-content">Tag</span>
            {/* <div className="flex flex-wrap gap-2">
              {tags?.map((tag, index) => (
                <span
                  key={index}
                  className="badge badge-success badge-soft gap-1 font-semibold text-emerald-600 bg-emerald-50 border-none px-4 py-3"
                >
                  #{tag}
                </span>
              ))}
            </div> */}
          </div>

          <div className="divider my-2"></div>

          {/* Meta Specifications */}
          <div className="space-y-3 max-w-xs text-sm">
            <div className="flex justify-between">
              <span className="text-base-content/70">Number of Pages:</span>
              <span className="font-bold text-base-content">{book.totalPages}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-base-content/70">Publisher:</span>
              <span className="font-bold text-base-content">{book.publisher}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-base-content/70">Year of Publishing:</span>
              <span className="font-bold text-base-content">
                {book.yearOfPublishing}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-base-content/70">Rating:</span>
              <span className="font-bold text-base-content">{book.rating}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <ReadButton book={book}/>
            <WishListButton book={book}/>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ViewDetailsPages;