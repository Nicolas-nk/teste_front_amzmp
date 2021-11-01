import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';

function App() {
  return (
    <Router>
      <Route>
        <Route path="/" exact component={Home}/>
      </Route>
      <Navbar />

      <Switch>
        
      </Switch>
    </Router>
  );
}

export default App;
