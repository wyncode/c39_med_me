import React, { useState, useEffect, useContext } from 'react';
import LogIn from './Pages/SignIn/LogIn';
import SignUp from './Pages/SignUp/SignUp';
import Shop from './Pages/Shop/Shop.jsx';
import Home from './Pages/Home/Home';
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppContext } from './context/AppContext';
import DailyLog from './Pages/DailyLog/DailyLog';
import Calendar from './Pages/calendar/';
import moment from 'moment';
import './App.css';
import Chat from './components/Chat/Chat.jsx';
import Cart from './Pages/ShoppingCart/Cart';
import medProfile from './Pages/MedProfile/medProfile';
import axios from 'axios';
import summary from './Pages/Summary/summary';
import MyMeds from './Pages/MyMedicines/MyMedicines';

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
          <PrivateRoute exact path="/cart" component={Cart} />
          <PrivateRoute exact path="/mymeds" component={MyMeds} />
          <PrivateRoute excat path="/summary" component={summary} />
          <PrivateRoute
            excat
            path="/medicine/:medicineid"
            component={medProfile}
          />
          <Route exact path="/" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
          <PrivateRoute exact path="/chat" component={Chat} />
          <Route
            exact
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
      </Router>
    </div>
  );
}

export default App;
