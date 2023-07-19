import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import styles from "../../styles/HomePage/HomePageHero.module.scss";

// Components
import DownloadAppButton from '../DownloadAppButton';

// Images
import laptopImage from "../../images/laptop-view-img.png";
import phoneImage from "../../images/phone-view-img.png";


const HomePageHero = () => {
    return (
        <div className='context-wrapper bottom-divider'>
            <h1 className={`${styles.heroTitle} title-main`}>Buy and trade cryptos like never before.</h1>
            <p className={`${styles.heroText} text-main`}>Welcome to Coinverse, the ultimate destination for all your cryptocurrency needs. Dive into the world of digital assets.</p>
            <div className={`${styles.heroButtons} bottom-divider`}>
                <DownloadAppButton />
                <Link to='/pricingPage' className={`${styles.pricingButton} button-main`}>VIEW PRICING</Link>
            </div>
            <div className={styles.heroImages}>
                <img className={styles.laptopImage} src={laptopImage} alt="laptop-image" />
                <img className={styles.phoneImage} src={phoneImage} alt="phone-image" />
            </div>
        </div>
    );
}
 
export default HomePageHero;