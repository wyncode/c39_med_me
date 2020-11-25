import React, { useState } from 'react';
import LogIn from './Pages/SignIn/LogIn';
import SignUp from './Pages/SignUp/SignUp';
import shop from './Pages/Shop/Shop';
import Home from './Pages/Home/Home';
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppContextProvider } from './context/AppContext';
import DailyLog from './Pages/DailyLog/DailyLog';
import Calendar from './Pages/calendar/';
import moment from 'moment';

function App() {
  const [selectedDate, setSelectedDate] = useState(moment());

  return (
    <div>
      <h1>
        <AppContextProvider>
          <Router>
            <Switch>
              <Route exact path="/shop" component={shop} />
              <PrivateRoute exact path="/" component={Home} />
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
            {/* footer component */}
          </Router>
        </AppContextProvider>
      </h1>
    </div>
  );
}

export default App;
