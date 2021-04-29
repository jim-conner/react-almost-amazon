/* eslint-disable camelcase */
import React, { useState } from 'react';
import {
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import PropTypes from 'prop-types';
import { addAuthor, updateStudent } from '../../helpers/data/AuthorData';

const AuthorForm = ({
  formTitle,
  setAuthors,
  firebaseKey,
  first_name,
  last_name,
  email,
}) => {
  const [author, setAuthor] = useState({
    email: email || '',
    first_name: first_name || '',
    last_name: last_name || '',
    firebaseKey: firebaseKey || ''
  });

  const handleInputChange = (e) => {
    setAuthor((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (author.firebaseKey) {
      updateStudent(author).then((authorArray) => setAuthors(authorArray));
    } else {
      addAuthor(author).then((authorArray) => setAuthors(authorArray));

      setAuthor({
        email: '',
        first_name: '',
        last_name: '',
        firebaseKey: ''
      });
    }
  };

  return (
    <div className='author-form'>
      <Form id='addAuthorForm' autoComplete='off' onSubmit={handleSubmit}>
        <h2>{formTitle}</h2>
        <FormGroup>
          <Label for="first_name"></Label>
          <Input
            name="first_name"
            type="text"
            placeholder="First Name"
            value={author.first_name}
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="last_name"></Label>
          <Input
            name="last_name"
            type="text"
            placeholder="Last Name"
            value={author.last_name}
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="email"></Label>
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={author.email}
            onChange={handleInputChange}
          />
        </FormGroup>

        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  );
};

AuthorForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setAuthors: PropTypes.func,
  firebaseKey: PropTypes.string,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  email: PropTypes.string
};

export default AuthorForm;
