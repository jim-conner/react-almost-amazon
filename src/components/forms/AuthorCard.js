/* eslint-disable camelcase */
import React from 'react';
import {
  Button,
  Card,
  CardTitle,
  CardText
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteAuthor } from '../../helpers/data/AuthorData';

const AuthorCard = ({
  firebaseKey,
  first_name,
  last_name,
  email,
  setAuthors
}) => {
  const handleClick = () => {
    deleteAuthor(firebaseKey)
      .then((authorsArray) => setAuthors(authorsArray));
  };
  return (
    <div className="card-container">
      <Card body key={firebaseKey}>
          <CardTitle tag="h5">{first_name} {last_name}</CardTitle>
          <CardText>{email}</CardText>
          <Button color='danger' onClick={handleClick}>Delete Author</Button>
          <Button color='info'>Edit Author</Button>
      </Card>
    </div>
  );
};

AuthorCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  setAuthors: PropTypes.func
};

export default AuthorCard;
