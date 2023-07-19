import React from 'react';

// Styles
import styles from "../../styles/HomePage/DownloadBanner.module.scss";

// Images
import appStoreImage from "../../images/app-store-phone-img.png";
import playStoreImages from "../../images/play-store-phone-img.png";


const DownloadBanner = () => {
    return (
        <div id="download-banner" className={`${styles.downloadBanner} context-wrapper bottom-divider`}>
            <h1 className={`${styles.downloadTitle} title-second`}>Download our app</h1>
            <div className={styles.cardContainer}>
                <div className={styles.downloadCard}>
                    <h2>Download for iOS</h2>
                    <p className='text-main'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla integer in pellentesque tortor semper elementum.
                    </p>
                    <a 
                        href="https://www.apple.com/app-store/" 
                        target='_blank' 
                        className={`${styles.storeButton} button-main`}
                    ><i className='fa-brands fa-apple'></i> APP STORE</a>
                    <img src={appStoreImage} alt="phone-img" />
                </div>

                <div className={styles.downloadCard}>
                    <h2>Download for Android</h2>
                    <p className='text-main'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla integer in pellentesque tortor semper elementum.
                    </p>
                    <a 
                        href="https://play.google.com/" 
                        target='_blank'
                        className={`${styles.storeButton} button-main`}
                    ><i className='fa-brands fa-google-play'></i> PLAY STORE</a>
                    <img src={playStoreImages} alt="phone-img" />
                </div>

            </div>
        </div>
    );
}
 
export default DownloadBanner;