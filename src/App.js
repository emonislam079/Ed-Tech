import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Admission from './Component/Admission/Admission';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login/Login';
import Regestration from './Component/Login/Regestration/Regestration';
import NotFound from './Component/NotFound/NotFound';
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
            <Route path="/service">
              <Services></Services>
            </Route>
            <Route path="/admission">
              <Admission></Admission>
            </Route>
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
