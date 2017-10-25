import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ExpenseDashboard from './components/ExpenseDashboard'
import AddExpensePage from './components/AddExpensePage'
import HelpPage from './components/HelpPage';
import EditPage from './components/EditPage';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path='/' component={ExpenseDashboard} />
          <Route path='/create' component={AddExpensePage} />
          <Route path='/Edit' component={EditPage} />
          <Route path='/Help' component={HelpPage} />
        </div>
      </Router>
    );
  }
}

export default App;
