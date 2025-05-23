import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';
import Section4 from './section4';
import Section5 from './section5';
import Section6 from './section6';
import Contact from './contact';
import Footer from './footer';

import "../../css/home/home.css";
import "../../css/compt/compt.css"
import DesignImages from './design_images';
function Home() {

    return (
        <>
            <Section1/>
            <DesignImages/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
            <Section6/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default Home;
