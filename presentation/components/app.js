export default `import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Welcome from './Welcome';
import AddressBook from './AddressBook';

const App = () => (
  <BrowserRouter>
    <div>
      <Link to="/">Home</Link>
      <Link to="/contacts">Contact List</Link>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/contacts" exact component={AddressBook} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
`;
