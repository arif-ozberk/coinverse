import React from 'react';

// Styles
import styles from "../../styles/HomePage/MoreThanBanner.module.scss";

// Images
import phoneImage from "../../images/phone-moreThan-img.png";

// Components
import DownloadAppButton from '../DownloadAppButton';


const MoreThanBanner = () => {
    return (
        <div className={`${styles.moreThanBanner} context-wrapper bottom-divider-large`}>
            <h1 className={`${styles.moreThanTitle} title-second`}>More than a typical crypto wallet</h1>
            <p className={`${styles.moreThanText} text-main`}>Experience the future of crypto management with Coinverse.</p>

            <div className={styles.contextContainer}>
                <div className={`${styles.sideColumn} side-column`}>
                    <div className={styles.sideCard}>
                        <i className='fas fa-sitemap'></i>
                        <h2>SEND & RECEIVE</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.</p>
                    </div>
                    <div className={styles.sideCard}>
                        <i className='fas fa-wallet'></i>
                        <h2>100% SECURE WALLET</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.</p>
                    </div>
                </div>
                <div className={`${styles.columnMid}`}>
                    <h2>IOS & ANDROID APP</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.</p>
                    <img src={phoneImage} alt="phone-img" />
                </div>
                <div className={`${styles.sideColumn} side-column`}>
                    <div className={styles.sideCard}>
                        <i className='fas fa-chart-column'></i>
                        <h2>TRADING CHARTS</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.</p>
                    </div>
                    <div className={styles.sideCard}>
                        <i className='fas fa-rotate'></i>
                        <h2>REAL TIME TRADING</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.</p>
                    </div>
                </div>
            </div>

            <DownloadAppButton />
        </div>

    );
}
 
export default MoreThanBanner;