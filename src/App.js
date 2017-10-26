import React, { Component } from 'react';
import ExpenseDashboard from './components/ExpenseDashboard'
import AddExpensePage from './components/AddExpensePage'
import HelpPage from './components/HelpPage';
import EditPage from './components/EditPage';
import Header from './components/Header';
import NoMatch from './components/NoMatch';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path='/' component={ExpenseDashboard} />
              <Route path='/create' component={AddExpensePage} />
              <Route path='/Edit/:id' component={EditPage} />
              <Route path='/Help' component={HelpPage} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </BrowserRouter>
     
    );
  }
}

export default App;
