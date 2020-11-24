import React from 'react';
import LogIn from './Pages/SignIn/LogIn';
import SignUp from './Pages/SignUp/SignUp';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppContextProvider } from './context/AppContext';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div>
      <h1>
        <AppContextProvider>
          <Router>
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <Route exact path="/login" component={LogIn} />
              <Route exact path="/signup" component={SignUp} />
            </Switch>
            {/* footer component */}
          </Router>
        </AppContextProvider>
      </h1>
    </div>
  );
}

export default App;
