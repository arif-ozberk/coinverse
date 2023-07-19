import React from 'react';

// Styles
import styles from "../../styles/HomePage/StatsBanner.module.scss";

// Images
import laptopImage from "../../images/stats-banner-laptop-img.png";


const StatsBanner = () => {
    return (
        <div className={`${styles.statsBanner} context-wrapper bottom-divider-large`}>
            <div className={styles.leftContainer}>
                <h1 className={`${styles.statsTitle} title-second`}>Built on a robust and powerful platform</h1>
                <p className={`${styles.statsText} text-main`}>Your All-in-One Crypto Platform. Whether you're a seasoned investor or just getting started, our platform offers a comprehensive suite of tools.</p>
                <div className={styles.statPoints}>
                    <h3><i className='fas fa-shield'></i>100% Private data</h3>
                    <h3><i className='fas fa-signal'></i>99.99% Uptime guarantee</h3>
                    <h3><i className='fas fa-comment-dots'></i>24/7 Dedicated support</h3>
                </div>
            </div>
            <div className={styles.rightContainer}>
                <img src={laptopImage} alt="laptop-img" />
            </div>
        </div>
    );
}
 
export default StatsBanner;