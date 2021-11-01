
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Componantes/Home/Home';
import Header from './Componantes/Header/Header';
import Register from './Componantes/Register/Register';
import Login from './Componantes/Login/Login';
import AuthProvider from './Componantes/AuthProvider/AuthProvider';
import Shipping from './Componantes/Shipping/Shipping';
import PrivateRoute from './Componantes/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path='/shipping'>
              <Shipping></Shipping>
            </PrivateRoute>
          </Switch>
        </BrowserRouter>

      </AuthProvider>

    </div>
  );
}

export default App;
