import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './component/About';
import ScrollToTop from 'react-scroll-up'
import { lazy } from 'react';
import { Suspense } from 'react';
import Loading from './component/Loading';


const Coins = lazy(() => import('./component/Coins'))
const DetailCoins = lazy(() => import('./component/DetailCoins'))
const Home = lazy(() => import('./component/Home'))
const Navbar = lazy(() => import('./component/Navbar'))
const News = lazy(() => import('./component/News'))
const Exchange = lazy(() => import('./component/Exchange'))


function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Navbar />
        <main>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/crypto">
            <Coins />
          </Route>

          <Route path="/news">
            <News />
          </Route>

          <Route path="/exchange">
            <Exchange />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <ScrollToTop showUnder={100}>
            <svg class="w-9 h-9 mb-10 xl:mb-0 text-white bg-green-700 px-1 py-1 rounded-full " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11l7-7 7 7M5 19l7-7 7 7"></path></svg>
          </ScrollToTop>


          <Route path="/detail/:id">
            <DetailCoins />
          </Route>
        </main>
      </Router>
    </Suspense>
  );
}

export default App;
