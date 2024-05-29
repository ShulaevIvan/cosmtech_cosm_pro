import './App.css';
import './inner.css';
import './components/Header/Header.css';
import './components/CallbackRequestPopup/CallbackRequestPopup.css'
import './components/ProductionMainPageHover/ProductionMainPageHover.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Layout from './components/Layout/Layout';
import MainPage from './components/MainPage/MainPage';
import ServicesPage from './components/ServicesPage/ServicesPage';
import AboutPage from './components/AboutPage/AboutPage';
import ContactsPage from './components/ContactsPage/ContactsPage';
import InnerPage from './components/InnerPage/InnerPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element = {<Layout />}>
              <Route path='/' element = {<MainPage />} />
              <Route path='/services' element = {<ServicesPage />} />
              <Route path='/about' element = {<AboutPage />} />
              <Route path='/contacts' element = {<ContactsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
