import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import About from './component/About';
import Calculator from './component/Calculator';
import DetailCoins from './component/DetailCoins';
import Home from './component/Home';
import Navbar from './component/Navbar';
import News from './component/News';

function App() {
  return (
    <Router>
    <Navbar />
    <main>

    <Route exact path="/">
    <Home />
    </Route>

    <Route path="/news">
    <News />
    </Route>

    <Route path="/calculator">
    <Calculator />
    </Route>

    <Route path="/about">
    <About />
    </Route>
    
    <Route path="/detail/:id">
    <DetailCoins />
    </Route>
    </main>
    </Router>
  );
}

export default App;
