import React, { useEffect, useState } from 'react';
import AuthorForm from '../components/forms/authorForm';
import AuthorCard from '../components/forms/AuthorCard';
import { getAuthors } from '../helpers/data/AuthorData';
import './App.scss';

function App() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors().then((response) => setAuthors(response));
  }, []);

  return (
    <>
    <AuthorForm
    formTitle='Author Form'
    setAuthors={setAuthors}
    />
    <hr/>
    <div className="card-container">
      {authors.map((authorInfo) => (
        <AuthorCard
            key={authorInfo.firebaseKey}
            firebaseKey={authorInfo.firebaseKey}
            first_name={authorInfo.first_name}
            last_name={authorInfo.last_name}
            email={authorInfo.email}
            setAuthors={setAuthors}
        />
      ))}
    </div>
  </>
  );
}

export default App;
