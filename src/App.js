import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Leftnavi from './Leftnavi';
import HomePage from './HomePage';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App(){

  return (
<div className='app'>
  <Router>
  <Switch>  
  <Route 
        path="/" exact
        render={() =>(
          <HomePage />
        )}
        />     
     <Route 
        path="/add" exact
        render={() =>(
          <Leftnavi />
        )}
        />   
</Switch>
  </Router>

</div>
  );
}

export default App;
