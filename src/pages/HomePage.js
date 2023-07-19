import React from 'react';

// Styles
import styles from "../styles/HomePage/HomePage.module.scss";

// Components
import HomePageHero from '../components/HomePage/HomePageHero';
import BrandsBanner from '../components/HomePage/BrandsBanner';
import MoreThanBanner from '../components/HomePage/MoreThanBanner';
import CryptoWalletBanner from '../components/HomePage/CryptoWalletBanner';
import StatsBanner from '../components/HomePage/StatsBanner';
import TryBanner from '../components/HomePage/TryBanner';
import CommentBanner from '../components/HomePage/CommentsBanner';
import VideoBanner from '../components/HomePage/VideoBanner';
import DownloadBanner from '../components/HomePage/DownloadBanner';
import Footer from '../components/Footer';



const HomePage = () => {
    return (
        <div className={styles.homePage}>
            <HomePageHero />
            <BrandsBanner />
            <MoreThanBanner />
            <CryptoWalletBanner />
            <StatsBanner />
            <TryBanner />
            <CommentBanner />
            <VideoBanner />
            <DownloadBanner />

            <Footer />
        </div>
    );
}
 
export default HomePage;