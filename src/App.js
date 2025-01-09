import './App.css';
import './inner.css';
import './components/Header/Header.css';
import './components/CallbackRequestPopup/CallbackRequestPopup.css'
import './components/ProductionMainPageHover/ProductionMainPageHover.css';
import './components/AskedQuestions/AskedQuestions.css';
import './components/CraftedSeries/CraftedSeries.css';
import './components/ForBuissness/ForBuissness.css';
import './components/ReviewsMainPage/ReviewsMainPage.css';
import './components/QuizMainPage/QuizMainPage.css';
import './components/JobPage/JobPage.css';
import './components/ForClients/ForClients.css';
import './components/AboutPage/About.css';
import './components/ImageGalery/ImageGalery.css';

import { BrowserRouter, Routes, Route, Switch} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import MainPage from './components/MainPage/MainPage';
import ServicesPage from './components/ServicesPage/ServicesPage';
import AboutPage from './components/AboutPage/AboutPage';
import ContactsPage from './components/ContactsPage/ContactsPage';
import PolicyPage from './components/PolicyPage/PolicyPage';
import JobPage from './components/JobPage/JobPage';
import ForClients from './components/ForClients/ForClients';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element = {<Layout />}>
              <Route path="*" replace={false} element={<MainPage />} /> 
              <Route path='/' element = {<MainPage />} />
              <Route path='/services' element = {<ServicesPage />} />
              <Route path='/policy' element={<PolicyPage />}/>
              <Route path='/job' element={<JobPage />} />
              <Route path='/about' element = {<AboutPage />} />
              <Route path='/forclients' element= {<ForClients />} />
              <Route path='/contacts' element = {<ContactsPage />} />
          </Route>
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
