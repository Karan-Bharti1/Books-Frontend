import useFetch from '../useFetch';

const Books = () => {
  const { data, loading, error } = useFetch(
    'https://be-4-assignment1-silk.vercel.app/'
  );
  console.log(data);
  const displayData = data?.map((book) => (
    <li key={book._id}>{book.title} </li>
  ));
  return (
    <>
      <h2>All Books</h2>
  {  loading&&  <p>Loading...</p>}
      {displayData}
    </>
  );
};
export default Books;
