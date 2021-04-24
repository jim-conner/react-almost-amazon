import React from 'react';
import firebase from 'firebase';
import firebaseConfig from '../helpers/data/apiKeys';
import './App.scss';
import AuthorForm from '../components/forms/authorForm';

function App() {
  firebase.initializeApp(firebaseConfig);

  return (
  <div className='App'>
    <AuthorForm/>
  </div>
  );
}

export default App;
