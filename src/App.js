import './App.css';
import {Switch,Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component'

//page for hats

const hatsPage = ()=>(
  <div>
    <h1>Hats page</h1>
  </div>
);

<switch>

</switch>

function App() {
  return (
    <div>
      <switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/hats' component={hatsPage}/>
      </switch>
      <HomePage/>
    </div>
  );
}

export default App;
