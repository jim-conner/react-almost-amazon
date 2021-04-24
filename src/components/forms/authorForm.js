import React, { useState } from 'react';

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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAuthor(author);
  };

  return (
    <>
      <div className="student-forms">
        <form id="addStudentForm" autoComplete="off" onSubmit={handleSubmit}>
          <h2>ADD AUTHOR</h2>
          <label>email: </label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={author.email}
            onChange={handleInputChange}
          ></input>
          <label>Teacher: </label>
          <input
            name="first_name"
            type="text"
            placeholder="Teacher"
            value={author.first_name}
            onChange={handleInputChange}
          ></input>
          <label>Grade: </label>
          <input
              name="last_name"
              type="text"
              placeholder="Teacher"
              value={author.last_name}
              onChange={handleInputChange}
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
