import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Authors from './data/AuthorData';
import Home from '../views/Home';

export default function Routes({ authors, setAuthors }) {
  return (
    <div>
      <Switch>
        <Route exact path ='/' component={Home} />
        <Route path ='/authors' component={() => <Authors
          students={authors} setStudents={setAuthors} />}
        />
        {/* <Route path ='/add-author' component={addAuthor} /> */}
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  authors: PropTypes.array.isRequired,
  setAuthors: PropTypes.func.isRequired
};
