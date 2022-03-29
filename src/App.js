import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Admission from './Component/Admission/Admission';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login/Login';
import PrivetRoute from './Component/Login/PrivetRoute/PrivetRoute';
import Regestration from './Component/Login/Regestration/Regestration';
import NotFound from './Component/NotFound/NotFound';
import Payment from './Component/Payment/Payment';
import Services from './Component/Services/Services';
import AuthProvider from './Contex/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivetRoute path="/service">
              <Services></Services>
            </PrivetRoute>
            <Route path="/admission">
              <Admission></Admission>
            </Route>
            <PrivetRoute path="/payment">
              <Payment></Payment>
            </PrivetRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Regestration></Regestration>
            </Route>

            <Route path="/*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
