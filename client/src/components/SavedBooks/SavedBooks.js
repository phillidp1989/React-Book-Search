import React, {useEffect, useState, useContext} from 'react';
import SavedBookCard from '../SavedBookCard/SavedBookCard';
import API from '../../utils/API';
import { UserContext } from '../../Context/UserState';

function SavedBooks() {

  const { user, isLoaded } = useContext(UserContext);  
  const [savedBooks, setSavedBooks] = useState([]);
  
  const getSavedBooks = async () => {
    try {      
      const data = {
        providerId: user.providerId
      }
      const results = await API.getMyBooks(data);  
      console.log(results);  
      setSavedBooks(results);  
    } catch (err) {
      console.error("ERROR - SavedBooks.js - getSavedBooks", err);
    }    
  }

  useEffect(() => {
    if (isLoaded) getSavedBooks()    
  }, [isLoaded]);

  return (
    <div className="row">      
      {savedBooks.data ? savedBooks.data.map((book) => (
        <SavedBookCard 
        key={book._id}
        id={book._id}
        title={book.title}
        authors={book.authors}
        description={book.description}
        image={book.image}
        link={book.link}
        changeState={getSavedBooks}
        />
      )): [!isLoaded ? <h1>Loading</h1> : <h1>You do not have any saved books</h1>]}
    </div>
  )
}

export default SavedBooks
