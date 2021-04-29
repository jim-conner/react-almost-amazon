import React from 'react';
import PropTypes from 'prop-types';
import AuthorForm from '../components/forms/authorForm';
import AuthorCard from '../components/forms/AuthorCard';
// import { getAuthors } from '../helpers/data/AuthorData';

function Authors(authors, setAuthors) {
  return (
    <>
    <AuthorForm
    formTitle='Add Author'
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

Authors.propTypes = {
  authors: PropTypes.array.isRequired,
  setAuthors: PropTypes.func.isRequired
};

export default Authors;
