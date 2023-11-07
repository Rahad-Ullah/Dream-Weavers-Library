import { useEffect } from "react"
import { useState } from "react"


function App() {
  const [books, setBooks] = useState([])
  useEffect(() => {
    fetch('books.json')
    .then(res => res.json())
    .then(data => setBooks(data))
  } ,[])


  return (
    <>
      <h1 className="text-4xl text-center text-primary py-8">Dream Weavers Library</h1>
      <h1>books: {books.length}</h1>
      <div>
        {
          books.map((book, index) => <div 
          className="text-2xl" 
          key={book.name}
          >{index+1}. {book.name} 
          <p className="text-lg">{book.category}</p>
          <img src={book.image} alt="" />
          </div>)
        }
      </div>

    </>
  )
}

export default App
