import './App.css';
import './inner.css';
import './components/Header/Header.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element = {<Layout />}>
              <Route path='/' element = {<MainPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
