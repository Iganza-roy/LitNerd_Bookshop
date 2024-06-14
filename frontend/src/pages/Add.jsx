import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: ""
  });
  
  const navigate = useNavigate()

  const handleChange = (e)=>{
    setBook(prev=>({...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async e =>{
    e.preventDefault()
    try{
      await axios.post("http://localhost:5500/books", book)
      navigate("/")
    }catch(err){
      console.log(err)
    }
  }
  console.log(book)

  return (
    <div className='form-container'>
      <div className='logo'><img src="https://static.vecteezy.com/system/resources/previews/006/800/199/non_2x/creative-abstract-book-feather-logo-design-vector.jpg" alt="logo"/></div>
      <div className='form'>
        <h1>Add a new book</h1>
        <input type="text" placeholder='Title' onChange={handleChange} name="title"/>
        <textarea className='add-desc' type="text" placeholder='Description' onChange={handleChange} name="desc"/>
        <input type="number" placeholder='Price in Kshs' onChange={handleChange} name="price"/>
        <input type="text" placeholder='Cover' onChange={handleChange} name="cover"/>
        <button className='add-new' onClick={handleClick}>Add</button>
      </div>
    </div>
  )
}

export default Add
