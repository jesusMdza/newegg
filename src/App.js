import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Home from './Components/Home/Home';
import MainNav from './Components/MainNav/MainNav';
import Footer from './Components/Footer/Footer';
import Products from './Pages/Products/Products';
import Context from './Context/Context';

const fakeData = [
  {
    src: '/images/montec_air_900.jpg',
    title: 'Montech Air 900 Mesh ATX Mid-Tower PC Gaming Case',
    price: 62,
    isInStock: false,
    category: 'ATX Cases',
  },
  {
    src: '/images/montec_air_900.jpg',
    title: 'Montech Air 900 Mesh ATX Mid-Tower PC Gaming Case',
    price: 62,
    isInStock: false,
    category: 'ATX Cases',
  },
  {
    src: '/images/montec_air_900.jpg',
    title: 'Montech Air 900 Mesh ATX Mid-Tower PC Gaming Case',
    price: 62,
    isInStock: true,
    category: 'ATX Cases',
  },
  {
    src: '/images/montec_air_900.jpg',
    title: 'Montech Air 900 Mesh ATX Mid-Tower PC Gaming Case',
    price: 62,
    isInStock: false,
    category: 'ATX Cases',
  },
  {
    src: '/images/montec_air_900.jpg',
    title: 'Montech Air 900 Mesh ATX Mid-Tower PC Gaming Case',
    price: 62,
    isInStock: true,
    category: 'ATX Cases',
  },
  {
    src: '/images/montec_air_900.jpg',
    title: 'Montech Air 900 Mesh ATX Mid-Tower PC Gaming Case',
    price: 62,
    isInStock: false,
    category: 'ATX Cases',
  },
  {
    src: '/images/montec_air_900.jpg',
    title: 'Montech Air 900 Mesh ATX Mid-Tower PC Gaming Case',
    price: 62,
    isInStock: false,
    category: 'ATX Cases',
  },
  {
    src: '/images/montec_air_900.jpg',
    title: 'Montech Air 900 Mesh ATX Mid-Tower PC Gaming Case',
    price: 62,
    isInStock: false,
    category: 'ATX Cases',
  },
];

const App = () => {
  return (
    <>
      <Router>
        <MainNav />
        <Switch>
          <Context.Provider value={{ data: fakeData }}>
            <Route exact path="/" render={() => <Home />} />
            <Route
              exact
              path="/products/:id"
              render={({ match }) => <Products match={match} />}
            />
          </Context.Provider>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
