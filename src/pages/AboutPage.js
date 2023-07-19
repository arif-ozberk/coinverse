import React from 'react';

// Styles
import styles from "../styles/AboutPage/AboutPage.module.scss";

// Components
import AboutHero from '../components/AboutPage/AboutHero';
import OurMission from '../components/AboutPage/OurMission';
import Timeline from '../components/AboutPage/Timeline';
import OurTeam from '../components/AboutPage/OurTeam';
import Footer from "../components/Footer";


const AboutPage = () => {

    return (
        <div className={`${styles.aboutPage}`}>
            <AboutHero />
            <OurMission />
            <Timeline />
            <OurTeam />
            <Footer />
        </div>
    );
}
 
export default AboutPage;
