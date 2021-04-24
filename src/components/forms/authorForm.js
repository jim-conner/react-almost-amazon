import React, { useState } from 'react';
import addAuthor from '../../helpers/data/AuthorData';

export default function AuthorForm() {
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
    console.warn(author);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAuthor(author);
    console.warn(author);
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
}
