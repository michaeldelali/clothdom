import './App.css';
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route  path='/shop' component={ShopPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
