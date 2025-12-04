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
import './components/ImageGalery/ImageGallery.css';
import './components/DecorativeCosmetics/DecorativeCosmetics.css';
import './components/ExcursionToProduction/ExcursionToProduction.css';
import './components/StickySideMenu/StickySideMenu.css';
import './components/Articles/Articles.css';
import './components/News/News.css';
import './components/VideoFromProduction/VideoFromProduction.css';
import './components/CustomTm/CustomTm.css';
import './components/ContractDesign/ContractDesign.css';
import './components/TrueZnak/TrueZnak.css';
import './components/backgroundSeasons/backgroundSeasons.css';

import { BrowserRouter, Routes, Route, Switch} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import MainPage from './components/MainPage/MainPage';
import ServicesPage from './components/ServicesPage/ServicesPage';
import AboutPage from './components/AboutPage/AboutPage';
import ContactsPage from './components/ContactsPage/ContactsPage';
import PolicyPage from './components/PolicyPage/PolicyPage';
import JobPage from './components/JobPage/JobPage';
import ForClients from './components/ForClients/ForClients';
import DecorativeCosmetics from './components/DecorativeCosmetics/DecorativeCosmetics';
import CareCosmetics from './components/CareCosmetics/CareCosmetics';
import Articles from './components/Articles/Articles';
import HowToCreateCosmeticBrand from './components/Articles/HowToCreateCosmeticBrand';
import AdvantagesContractCosmetics from './components/Articles/AdvantagesContractCosmetics';
import News from './components/News/News';
import CustomTm from './components/CustomTm/CustomTm';
import ContractDesign from './components/ContractDesign/ContractDesign';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element = {<Layout />}>
              <Route path="*" replace = {false} element={<MainPage />} /> 
              <Route path='/' element = {<MainPage />} />
              <Route path='/services' element = {<ServicesPage />} />
              <Route path='/policy' element = {<PolicyPage />}/>
              <Route path='/job' element = {<JobPage />} />
              <Route path='/about' element = {<AboutPage />} />
              <Route path='/forclients' element = {<ForClients />} />
              <Route path='/decorative-cosmetics' element = {<DecorativeCosmetics />} />
              <Route path='/care-cosmetics' element={<CareCosmetics />} />
              <Route path='/design-cosmetics' element = {<ContractDesign />} />
              <Route path='/articles' element={<Articles />} />
              <Route path='/how-to-create-cosmetic-brand' element={<HowToCreateCosmeticBrand />} />
              <Route path='/advantages-of-contract-cosmetics-for-small-businesses' element={<AdvantagesContractCosmetics />} />
              <Route path='/news' element={<News />} />
              <Route path='/tm' element={<CustomTm />} />
              <Route path='/contacts' element = {<ContactsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
