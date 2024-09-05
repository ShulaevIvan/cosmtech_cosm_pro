import './App.css';
import './inner.css';
import './components/Header/Header.css';
import './components/CallbackRequestPopup/CallbackRequestPopup.css'
import './components/ProductionMainPageHover/ProductionMainPageHover.css';
import './components/AskedQuestions/AskedQuestions.css';
import './components/CraftedSeries/CraftedSeries.css';
import './components/ForBuissness/ForBuissness.css';
import './components/ReviewsMainPage/ReviewsMainPage.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import MainPage from './components/MainPage/MainPage';
import ServicesPage from './components/ServicesPage/ServicesPage';
import AboutPage from './components/AboutPage/AboutPage';
import ContactsPage from './components/ContactsPage/ContactsPage';
import PolicyPage from './components/PolicyPage/PolicyPage';
import JobPage from './components/JobPage/JobPage';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element = {<Layout />}>
              <Route path="*" replace={false} element={<MainPage />} /> 
              <Route path='/' element = {<MainPage />} />
              <Route path='/services' element = {<ServicesPage />} />
              <Route path='/about/policy' element={<PolicyPage />}/>
              <Route path='/about/job' element={<JobPage />} />
              <Route path='/about' element = {<AboutPage />} />
              <Route path='/contacts' element = {<ContactsPage />} />
          </Route>
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
