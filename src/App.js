import './App.css';
import './App.module.scss';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Home from './Components/Home/Home';
import MainNav from './Components/MainNav/MainNav';

function App() {
  return (
    <>
      <Router>
        <MainNav />
        <Route path="/" render={() => <Home />} />
      </Router>
    </>
  );
}

export default App;
