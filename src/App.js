import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/pages/HomePage/Header';
import {Vantagens, VisaoCliente, ComoFunciona} from './components/pages/HomePage/Main';
import Pricing from './components/Pricing/Pricing';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <Router>

      <Route path="/" exact component={Header}/>
      <Navbar />
      <Route path="/" exact component={Vantagens}/>
      <Route path="/" exact component={VisaoCliente}/>
      <Route path="/" exact component={ComoFunciona}/>
      <Pricing />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
