import React  from 'react';
import { Router, Route } from 'react-router-dom';

import history from '../history';
import Header from './Header';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamNew from './streams/StreamNew';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';

const App = () => {
  return (
    <main className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={StreamList}/>
          <Route path="/streams/show" exact component={StreamShow}/>
          <Route path="/streams/new" exact component={StreamNew}/>
          <Route path="/streams/edit" exact component={StreamEdit}/>
          <Route path="/streams/delete" exact component={StreamDelete}/>
        </div>
      </Router>
    </main>
  )
};

export default App;