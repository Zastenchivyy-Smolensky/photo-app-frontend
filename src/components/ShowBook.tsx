import React, { useState } from 'react'
import axios from 'axios'

const ShowBook: React.FC = () => {
  const [bookId, setBookId] = useState('')
  const [bookTitle, setBookTitle] = useState('')
  const [labelUrl, setLabelUrl] = useState('')

  const getBookUrl = () => {
    if (!bookId) return
    const url = `http://localhost:8000/books/${bookId}`
    axios.get(url)
    .then(response => {
      const url = response.data.book.label.url
      setLabelUrl(`http://localhost:8000/${url}`)
      const title = response.data.book.title
      setBookTitle(title)
    })
  }
  return (
    <div>
      <h1>書籍を検索する</h1>
      <input type="number" value={bookId} onChange={(e) => setBookId(e.target.value)}/>
      <button onClick={getBookUrl}>検索</button>
      <p>タイトル:{bookTitle}</p>
      {labelUrl &&
        <img src={labelUrl} alt="book label" width={200}/>
      }
    </div>
  )
}

export default ShowBook