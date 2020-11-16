import './App.css';

import Home from './Components/Home/Home';
import MainNav from './Components/MainNav/MainNav';

function App() {
  return (
    <div>
      <MainNav />
      <div className="container">
        <Home />
      </div>
    </div>
  );
}

export default App;
