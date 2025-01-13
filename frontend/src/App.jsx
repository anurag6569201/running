import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/global/navbar/navbar';

// Lazy load pages
const Home = lazy(() => import('./assets/pages/home/home'));
const HowWork = lazy(() => import('./assets/pages/competition/howWork'));
const WhoParticipate = lazy(() => import('./assets/pages/competition/whoParticipate'));
const ThreeDiscipline = lazy(() => import('./assets/pages/competition/threeDiscipline'));
const RulesCategory = lazy(() => import('./assets/pages/competition/rulesCategory'));
const Finals = lazy(() => import('./assets/pages/competition/finals'));
const BecomeOrganizer = lazy(() => import('./assets/pages/organizer/becomeOrganizer'));
const DocumentsDownload = lazy(() => import('./assets/pages/organizer/documentsDownload'));
const FAQ = lazy(() => import('./assets/pages/faq/faq'));
const DataProtection = lazy(() => import('./assets/pages/misc/dataProtection'));
const ConditionParticipation = lazy(() => import('./assets/pages/misc/conditionParticipation'));
const PrivacyPolicy = lazy(() => import('./assets/pages/misc/privacyPolicy'));
const Imprint = lazy(() => import('./assets/pages/misc/imprint'));
const ContactUs = lazy(() => import('./assets/pages/contact/contact'));
const News = lazy(() => import('./assets/pages/news/news'));
const About = lazy(() => import('./assets/pages/about/about'));

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/howwork" element={<HowWork />} />
          <Route path="/whoParticipate" element={<WhoParticipate />} />
          <Route path="/threeDiscipline" element={<ThreeDiscipline />} />
          <Route path="/rulesCategory" element={<RulesCategory />} />
          <Route path="/finals" element={<Finals />} />
          <Route path="/becomeOrganizer" element={<BecomeOrganizer />} />
          <Route path="/documentsDownload" element={<DocumentsDownload />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/dataProtection" element={<DataProtection />} />
          <Route path="/conditionParticipation" element={<ConditionParticipation />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
