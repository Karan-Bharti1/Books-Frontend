import { useState } from 'react';
import useFetch from '../useFetch';

const Books = () => {
  const { data, loading, error } = useFetch(
    'https://be-4-assignment1-silk.vercel.app/'
  );
  const [successMessage,setSuccessMessage]=useState()
  const handleDelete=async(bookId)=>{
try {
  const response=await fetch(`https://be-4-assignment1-silk.vercel.app/books/${bookId}`,{
    method:"DELETE"
  })
  if(!response.ok){
    throw "Failed to delete book data"
  }
  const res=await response.json()
  if(res){
setSuccessMessage("Data Delete fromthe database")

window.location.reload()
  }
} catch (error) {
  console.log(error)
}
  }
  console.log(data);
  const displayData = data?.map((book) => (
    <li key={book._id}>{book.title} <button onClick={()=>handleDelete(book._id)}>Delete</button></li>
  ));
  return (
    <>
      <h2>All Books</h2>
  {  loading&&  <p>Loading...</p>}
      {displayData}
      {
        successMessage
      }
    </>
  );
};
export default Books;
