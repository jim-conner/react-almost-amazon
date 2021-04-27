import firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import AuthorForm from '../components/forms/authorForm';
import AuthorCard from '../components/forms/AuthorCard';
import firebaseConfig from '../helpers/data/apiKeys';
import { getAuthors } from '../helpers/data/AuthorData';
import './App.scss';

firebase.initializeApp(firebaseConfig);

function App() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors().then((response) => setAuthors(response));
  }, []);

  return (
  <div className='App'>
    <AuthorForm
    formTitle='Author Form'
    setAuthors={setAuthors}
    />
    <hr/>
    {authors.map((authorInfo) => (
      <AuthorCard body key={authorInfo.firebaseKey}
          first_name={authorInfo.first_name}
          last_name={authorInfo.last_name}
          email={authorInfo.email}
          setAuthors={setAuthors}
      />
    ))}
  </div>
  );
}

export default App;
