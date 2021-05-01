/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import {
  useParams
} from 'react-router-dom';
import { getSingleAuthor } from '../helpers/data/AuthorData';

export default function SingleAuthor() {
  const [author, setSingleAuthor] = useState({});
  const { firebaseKey } = useParams();

  useEffect(() => {
    getSingleAuthor(firebaseKey)
      .then(setSingleAuthor);
  }, []);

  return (
    <div>
      <h1>Single Author</h1>
      <h2>{author.first_name} {author.last_name}</h2>
      <h3>{author.email}</h3>
    </div>
  );
}
