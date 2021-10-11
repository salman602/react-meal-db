import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Bufe from './components/Bufe/Bufe';
// import Foods from './components/Foods/Foods';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Order from './components/Order/Order';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Resturant from './components/Resturant/Resturant';
import SignIn from './components/SIgnIn/SignIn';
import AuthProvider from './Context/AuthProvider';
// import Bufe from './components/Bufe/Bufe';

function App() {
  return (
    <div className="main">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/bufe">
              <Bufe />
            </Route>
            <Route exact path="/signin">
              <SignIn />
            </Route>
            <PrivateRoute exact path="/order">
              <Order />
            </PrivateRoute>
            <Route exact path="/resturant/:mealId">
              <Resturant />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>

      {/* <Bufe></Bufe> */}
    </div>
  );
}

export default App;
