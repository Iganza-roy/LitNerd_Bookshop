import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const BookDetails = () => {
    const [book, setBook] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await axios.get(`http://localhost:5500/books/${id}`);
                setBook(response.data);
            }catch (err) {
                console.log(err);
            }
        };

        fetchBook();
    }, [id]);

    const handleDelete = async (id)=>{
        try{
            await axios.delete("http://localhost:5500/books/"+id)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }

    if (!book) return <div>Loading...</div>;

    return (
        <div className='book-details'>
            <img className='details-img' src={book.cover} alt="book.title" />
            <h1>{book.title}</h1>
            <p>{book.desc}</p>
            <p>Price: Kshs. <strong>{book.price}</strong></p>
            <div className='update_delete_details'>
                <button className='details'><Link to={`https://www.amazon.com/b?node=283155`} className='update-details'>Purchase Book</Link></button>
                <button className='update'><Link to={`/update/${book.id}`} className='update-link'>Update book</Link></button>
                <button className='delete' onClick={()=>handleDelete(book.id)}>Delete {book.title}</button>
            </div>
        </div>

    );
};

export default BookDetails;