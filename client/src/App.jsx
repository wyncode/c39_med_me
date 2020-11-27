import React, { useState } from 'react';
import LogIn from './Pages/SignIn/LogIn';
import SignUp from './Pages/SignUp/SignUp';
import Shop from './Pages/Shop/Shop.jsx';
import Home from './Pages/Home/Home';
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppContextProvider } from './context/AppContext';
import DailyLog from './Pages/DailyLog/DailyLog';
import Calendar from './Pages/calendar/';
import moment from 'moment';
import Navigation from './components/Navigation/Navigation.jsx';
import './App.css';

function App() {
  const [selectedDate, setSelectedDate] = useState(moment());

  return (
    <div>
      <AppContextProvider>
        <Router>
          <Switch>
            <Route exact path="/shop" component={Shop} />
            <PrivateRoute exact path="/home" component={Home} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/dailylog" component={DailyLog} />
            <Route exact path="/" component={Home} />
            <Route
              path="/calendar"
              render={(props) => (
                <Calendar
                  {...props}
                  value={selectedDate}
                  onChange={setSelectedDate}
                />
              )}
            />
            +
          </Switch>
          <Navigation />
        </Router>
      </AppContextProvider>
    </div>
  );
}

export default App;
