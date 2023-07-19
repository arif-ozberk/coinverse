import React from 'react';

// Styles
import styles from "../../styles/HomePage/TryBanner.module.scss";

// Images
import phoneImage from "../../images/try-banner-phone-image.png";



const TryBanner = () => {
    return (
        <div className={`${styles.tryBannerBackground} bottom-divider-large`}>
            <div className={`${styles.tryBanner} context-wrapper`}>
                <div className={styles.leftContainer}>
                    <h1 className={`${styles.tryTitle} title-second`}>Try the future, today.<br />Download Crypto</h1>
                    <p className={`${styles.tryText} text-main`}>From real-time market analysis and customizable portfolios to intuitive trading features and educational resources, Coinverse is your trusted companion for navigating the exciting digital assets.</p>
                    <a href="#download-banner" className={`${styles.downloadAppButton} button-main`}>DOWNLOAD APP</a>
                </div>
                <div className={styles.rightContainer}>
                    <img src={phoneImage} alt="phone-image" />
                </div>
            </div>
        </div>
    );
}
 
export default TryBanner;