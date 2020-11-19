import './App.css';
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from '../src/components/header/header.component';
import SignInOut from '../src/pages/sign-in-out/sign-in-out.component';

function App() {
  return (
    <div>
      <Header/>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/sign-in-out' component={SignInOut}/>
          <Route exact path='/shop' component={ShopPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
