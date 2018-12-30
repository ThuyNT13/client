import React  from 'react';
import { Router, Route, Switch } from 'react-router-dom';

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
          <Switch>
            <Route exact path="/" component={StreamList}/>
            <Route exact path="/streams/new" component={StreamNew}/>
            <Route exact path="/streams/:id" component={StreamShow}/>
            <Route exact path="/streams/edit/:id" component={StreamEdit}/>
            <Route exact path="/streams/delete/:id" component={StreamDelete}/>
          </Switch>
        </div>
      </Router>
    </main>
  )
};

export default App;