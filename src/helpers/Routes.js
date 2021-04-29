import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Authors from '../views/Authors';
import Home from '../views/Home';
import { addAuthor } from './data/AuthorData';

export default function Routes({authors, setAuthors}) {
  return (
    <div>
      <Switch>
        <Route exact path ='/' component={Home} />
        <Route path ='/authors' component={() => <Students
          students={students} setStudents={setStudents} />}
        />
        <Route path ='/add-author' component={addAuthor} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  authors: PropTypes.array.isRequired,
  setStudents: PropTypes.func.isRequired
};
