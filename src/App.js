import logo from './logo.svg';
import './App.scss';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import PageNotFound from './component/PageNotFound/PageNotFound';
import MovieDetail from './component/MovieDetail/MovieDetail';
import Footer from './component/Footer/Footer';
import Shows from './component/Shows/Shows';

import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import MovieListing from './component/MovieListing/MovieListing';

function App() {
  return (
    <div className='app'>
      <Router>
        <Header />
        <Home/>
        <div className='container'>
          <Switch>
            <Route exact path="/" element={<MovieListing />} />
            <Route path="/shows" element={<Shows />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path='/notFound' element={<PageNotFound />} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
