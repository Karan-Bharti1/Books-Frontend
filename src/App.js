import "bootstrap/dist/css/bootstrap.min.css"
import Books from "./components/Books";
import BooksByAuthor from "./components/BooksAuthor";
import BookTitle from "./components/BooksTitle";
import BookForm from "./components/BookForm";

function App() {
  return (
    <div className="App container">
     
     <h1>Books Data</h1>
    <Books/>
    <BooksByAuthor author="Harper Lee"/>
    <BookTitle bookTitle="Shoe Dog"/>
    <BookForm/>
    </div>
  );
}

export default App;
