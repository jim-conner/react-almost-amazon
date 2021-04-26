import firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import {
  Button,
  Card,
  CardTitle,
  CardText
} from 'reactstrap';
import AuthorForm from '../components/forms/authorForm';
import firebaseConfig from '../helpers/data/apiKeys';
import { getAuthors } from '../helpers/data/AuthorData';
import './App.scss';

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
    <hr/>
    {authors.map((authorInfo) => (
      <Card body key={authorInfo.firebaseKey}>
          <CardTitle tag="h5">{authorInfo.first_name} {authorInfo.last_name}</CardTitle>
          <CardText>{authorInfo.email}</CardText>
          <Button>Button</Button>
      </Card>
    ))}
  </div>
  );
}

export default App;
