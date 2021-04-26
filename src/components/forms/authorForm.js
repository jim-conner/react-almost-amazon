import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addAuthor } from '../../helpers/data/AuthorData';

const AuthorForm = () => {
  const [author, setAuthor] = useState({
    email: '',
    first_name: '',
    last_name: '',
  });

  const handleInputChange = (e) => {
    setAuthor((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAuthor(author);
  };

  return (
    <>
      <div className="author-forms">
        <form id="addAuthorForm" autoComplete="off" onSubmit={handleSubmit}>
          <h2>Add Author</h2>
          <label></label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={author.email.value}
            onChange={handleInputChange}
          ></input>
          <label></label>
          <input
            name="first_name"
            type="text"
            placeholder="First Name"
            value={author.first_name.value}
            onChange={handleInputChange}
          ></input>
          <label></label>
          <input
              name="last_name"
              type="text"
              placeholder="Last Name"
              value={author.last_name.value}
              onChange={handleInputChange}
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

AuthorForm.propTypes = {
  formTitle: PropTypes.string.isRequired
};

export default AuthorForm;
