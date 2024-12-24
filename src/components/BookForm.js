import { useState } from 'react';
const BookForm = () => {
    const [successMessage,setSuccessMessage]=useState("")
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    publishedYear: '',
    genre: '',
    language: '',
    country: '',
    rating: '',
    summary: '',
    coverImageUrl: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]:
        name === 'publishedYear' || name === 'rating' ? parseInt(value) : value,
    }));
  };
  const formHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        'https://be-4-assignment1-silk.vercel.app/books',
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        throw 'Failed to add book';
      }
      const data = await response.json();
      if(data){
        setSuccessMessage("Book Added to the Database")
       
      }
      setTimeout(()=>{setSuccessMessage("")
        window.location.reload()
      },3000)
      console.log('Added Data:', data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Enter Book Form</h1>
      <form onSubmit={formHandler}>
        <label>Title:</label>
        <br />
        <input
        required
          type="text"
          value={formData.title}
          name="title"
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Author:</label>
        <br />
        <input
        required
          type="text"
          value={formData.author}
          name="author"
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Published Year:</label>
        <br />
        <input
        required
          type="number"
          value={formData.publishedYear}
          name="publishedYear"
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Genre:</label>
        <br />
        <input
        required
          type="text"
          value={formData.genre}
          name="genre"
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Language:</label>
        <br />
        <input
        required
          type="text"
          value={formData.language}
          name="language"
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Country:</label>
        <br />
        <input
        required
          type="text"
          value={formData.country}
          name="country"
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Rating:</label>
        <br />
        <input
        required
          type="number"
          value={formData.rating}
          name="rating"
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Summary:</label>
        <br />
        <input
        required
          type="text"
          value={formData.summary}
          name="summary"
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Cover Image Url:</label>
        <br />
        <input
        required
          type="text"
          value={formData.coverImageUrl}
          name="coverImageUrl"
          onChange={handleChange}
        />
        <br />
        <br />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
        <br />
        <br />
      </form>
      {successMessage}
    </>
  );
};
export default BookForm;
