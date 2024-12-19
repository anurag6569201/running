import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/global/navbar/navbar';

// Home routes
import Home from './assets/pages/home/home';

// competition routes
import HowWork from './assets/pages/competition/howWork';
import WhoParticipate from './assets/pages/competition/whoParticipate';
import ThreeDiscipline from './assets/pages/competition/threeDiscipline';
import RulesCategory from './assets/pages/competition/rulesCategory';
import Finals from './assets/pages/competition/finals';

// Organizer routes
import BecomeOrganizer from './assets/pages/organizer/becomeOrganizer';
import DocumentsDownload from './assets/pages/organizer/documentsDownload';

// FAQ routes
import FAQ from './assets/pages/faq/faq';

// Miscellaneous routes
import DataProtection from './assets/pages/misc/dataProtection';
import ConditionParticipation from './assets/pages/misc/conditionParticipation';
import PrivacyPolicy from './assets/pages/misc/privacyPolicy';
import Imprint from './assets/pages/misc/imprint';

// Contact routes
import ContactUs from './assets/pages/contact/contact';

// News routes
import News from './assets/pages/news/news';

// About routes
import About from './assets/pages/about/about';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home routes */}
        <Route path="/" element={<Home />} />

        {/* competition routes */}
        <Route path="/howwork" element={<HowWork />} />
        <Route path="/whoParticipate" element={<WhoParticipate />} />
        <Route path="/threeDiscipline" element={<ThreeDiscipline />} />
        <Route path="/rulesCategory" element={<RulesCategory />} />
        <Route path="/finals" element={<Finals />} />

        {/* organizer routes */}
        <Route path="/becomeOrganizer" element={<BecomeOrganizer />} />
        <Route path="/documentsDownload" element={<DocumentsDownload />} />

        {/* FAQ routes */}
        <Route path="/faq" element={<FAQ />} />

        {/* miscellaneous routes */}
        <Route path="/dataProtection" element={<DataProtection />} />
        <Route path="/conditionParticipation" element={<ConditionParticipation />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/imprint" element={<Imprint />} />

        {/* contact routes */}
        <Route path="/contact" element={<ContactUs />} />

        {/* news routes */}
        <Route path="/news" element={<News />} />

        {/* about routes */}
        <Route path="/about" element={<About />} />
        
      </Routes>
    </Router>
  );
}

export default App;
