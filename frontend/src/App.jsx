import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/global/navbar/navbar';

// Home routes
import Home from './assets/pages/home/home';

// competition routes
import Navbar from './assets/pages/competition/howWork';
import Navbar from './assets/pages/competition/whoParticipate';
import Navbar from './assets/pages/competition/threeDiscipline';
import Navbar from './assets/pages/competition/rulesCategory';
import Navbar from './assets/pages/competition/finals';

// Organizer routes
import Navbar from './assets/pages/organizer/becomeOrganizer';
import Navbar from './assets/pages/organizer/documentsDownload';

// FAQ routes
import Navbar from './assets/pages/faq/faq';

// Miscellaneous routes
import Navbar from './assets/pages/misc/dataProtection';
import Navbar from './assets/pages/misc/conditionParticipation';
import Navbar from './assets/pages/misc/privacyPolicy';
import Navbar from './assets/pages/misc/imprint';

// Contact routes
import Contact from './assets/pages/contact/contact';

// News routes
import Navbar from './assets/pages/news/news';

// About routes
import About from './assets/pages/about/about';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
