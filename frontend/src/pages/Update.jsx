import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: ""
  });

  const navigate = useNavigate()
  const location = useLocation()
  const bookId = location.pathname.split("/")[2]

  useEffect (() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:5500/books/${bookId}`)
        const fetchedBook = response.data
        setBook({
          title: fetchedBook.title,
          desc: fetchedBook.desc,
          price: fetchedBook.price,
          cover: fetchedBook.cover
        })
      }catch (err) {
        console.error('Error fetching book data:', err);
      }
    };

    if (bookId) {
      fetchBook();
    }
    
  }, [bookId]);

  const handleChange = (e)=>{
    setBook(prev=>({...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async e =>{
    e.preventDefault()
    try{
      await axios.put("http://localhost:5500/books/" + bookId, book)
      navigate("/")
    }catch(err){
      console.log(err)
    }
  }
  console.log(book)

  return (
    <div className='form-container'>
      <div className='form'>
        <div><img className='update-img' src={book.cover} alt="" /></div>
        <h1>Update the book</h1>
        <input type="text" placeholder='Title' value={book.title} onChange={handleChange} name="title"/>
        <textarea className='update-desc' type="text" placeholder='Description' value={book.desc} onChange={handleChange} name="desc"/>
        <input type="number" placeholder='Price' value={book.price} onChange={handleChange} name="price"/>
        <input type="text" placeholder='Cover' value={book.cover} onChange={handleChange} name="cover"/>
        <button className="formButton" onClick={handleClick}>Update</button>
      </div>
    </div>
  )
}

export default Update
