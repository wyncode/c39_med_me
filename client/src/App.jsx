import React, { useState, useEffect, useContext } from 'react';
import LogIn from './Pages/SignIn/LogIn';
import SignUp from './Pages/SignUp/SignUp';
import Shop from './Pages/Shop/shop.jsx';
import Home from './Pages/Home/Home';
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppContext } from './context/AppContext';
import DailyLog from './Pages/DailyLog/DailyLog';
import Calendar from './Pages/calendar/';
import moment from 'moment';
import Navigation from './components/Navigation/Navigation.jsx';
import './App.css';
import Cart from './Pages/ShoppingCart/cart';
import axios from 'axios';

function App() {
  const [selectedDate, setSelectedDate] = useState(moment());
  const { setMedicines } = useContext(AppContext);

  const fetchMed = async () => {
    try {
      const response = await axios.get('/api/medicine/');
      setMedicines(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchMed();
  }, []);

  return (
    <div>
      <Router>
        <Switch>
          <PrivateRoute exact path="/home" component={Home} />
          <PrivateRoute exact path="/shop" component={Shop} />
          <PrivateRoute exact path="/cart" conponent={Cart} />
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
    </div>
  );
}

export default App;
