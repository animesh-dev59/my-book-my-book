import React from 'react';  
import { getbooks } from '../page';
import { Ibook } from '@/types/Ibook';
interface IViewDetailsPages { 
  params: Promise<{ 
    id:string
  }>
}

const ViewDetailsPages = async({params}:IViewDetailsPages) => { 
  const {id} = await params;
  const booksData = await getbooks();
  const book = booksData.find((book:Ibook)=>(book.bookId === Number(id))) 
  console.log(book,'view detaisl book');
  return (
    <div>
     
    </div>
  );
};

export default ViewDetailsPages;