/* eslint-disable camelcase */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardTitle,
  CardText,
  CardBody,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteAuthor } from '../../helpers/data/AuthorData';
import AuthorForm from './authorForm';

const AuthorCard = ({
  firebaseKey,
  first_name,
  last_name,
  email,
  setAuthors
}) => {
  const [editing, setEditing] = useState(false);
  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteAuthor(firebaseKey)
          .then((authorArray) => setAuthors(authorArray));
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('nothing selected');
    }
  };
  return (
      <Card>
        <CardBody>
          <CardTitle tag="h5">{first_name} {last_name}</CardTitle>
          <CardText>Email: {email}</CardText>
          <Button color='info' onClick={() => handleClick('edit')}>
              {editing ? 'Close Form' : 'Edit Author' }
          </Button>
          <Button color='danger'onClick={() => handleClick('delete')}>
            Delete Author
          </Button>
          <Link to='add-author'>Go to Add Student</Link>
          {
            editing && <AuthorForm
              formTitle='Edit Author'
              setAuthors={setAuthors}
              firebaseKey={firebaseKey}
              first_name={first_name}
              last_name={last_name}
              email={email}
            />}
        </CardBody>
      </Card>
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
