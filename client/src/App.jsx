import React, { useState, useEffect } from 'react';
import LogIn from './Pages/SignIn/LogIn';
import SignUp from './Pages/SignUp/SignUp';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { AppContextProvider } from './context/AppContext';

function App() {
  return (
    <div>
      <h1>
        <AppContextProvider>
          <Router>
            <Switch>
              <Route exact path="/login" component={LogIn} />
              <Route exact path="/signup" component={SignUp} />
            </Switch>
          </Router>
        </AppContextProvider>
      </h1>
    </div>
  );
}

export default App;
