import './App.css';
import './App.module.scss';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Home from './Components/Home/Home';
import MainNav from './Components/MainNav/MainNav';
import Product from './Pages/Product/Product';

function App() {
  return (
    <>
      <Router>
        <MainNav />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/products/:id" render={() => <Product />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
