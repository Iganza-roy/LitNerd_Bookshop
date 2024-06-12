import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Books = () => {
    const [books,setBooks] = useState([])

    useEffect(()=>{
        const fetchAllBooks = async ()=>{
            try{
                const res = await axios.get("http://localhost:5500/books")
                setBooks(res.data);
            }catch(err){
                console.log(err);
            }
        }
        fetchAllBooks();
    },[])

    const handleDelete = async (id)=>{
        try{
            await axios.delete("http://localhost:5500/books/"+id)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className='books-container'>
            <img src="https://static.vecteezy.com/system/resources/previews/006/800/199/non_2x/creative-abstract-book-feather-logo-design-vector.jpg" alt="logo" className='logo'/>
            <div className='header-title'>
                <h1>LitNerd Bookshop</h1>
            </div>
            <div className="books">
                {books.map(book=>(
                    <div className="book" key={book.id}>
                        {book.cover && <img src={book.cover} alt="book cover" className='book-cover'/>}
                        <h2>{book.title}</h2>
                        <p className='book-desc'>{book.desc}</p>
                        <span>{book.price}</span>
                        <div className='update_delete'>
                            <button className='update'><Link to={`/update/${book.id}`}>Update</Link></button>
                            <button className='delete' onClick={()=>handleDelete(book.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="Add">
                <button className='Add_new_btn'>
                    <Link to="/add">Add new Book</Link>
                </button>
            </div>
        </div>
    )
}

export default Books
