import useFetch from '../useFetch';

const BooksByAuthor = ({ author }) => {
  const { data, loading, error } = useFetch(
    `https://be-4-assignment1-silk.vercel.app/books/author/${author}`
  );
  console.log(data);
  return (
    <>
      <h2>Books By {author}</h2>
      {  loading&&  <p>Loading...</p>}
      <ul>
        {data?.map((book) => (
          <li key={book._id}>{book.title}</li>
        ))}
      </ul>
    </>
  );
};
export default BooksByAuthor;
