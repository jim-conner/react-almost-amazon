import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import firebaseConfig from '../helpers/data/apiKeys';
import './App.scss';
import AuthorForm from '../components/forms/authorForm';
import { getAuthors } from '../helpers/data/AuthorData';

firebase.initializeApp(firebaseConfig);

function App() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors().then((response) => setAuthors(response));
  }, []);

  console.warn(authors);

  return (
  <div className='App'>
    <AuthorForm formTitle='Author Form'/>
  </div>
  );
}

export default App;
