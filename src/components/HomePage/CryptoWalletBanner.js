import React from 'react';

// Styles
import styles from "../../styles/HomePage/CryptoWalletBanner.module.scss";

// Images
import phoneImage1 from "../../images/crypto-wallet-phone-img-1.png";
import phoneImage2 from "../../images/crypto-wallet-phone-img-2.png";


const CryptoWalletBanner = () => {
    return (
        <div className={`${styles.cryptoWalletBanner} context-wrapper bottom-divider-large`}>
            <div className={`${styles.leftContainer}`}>
                <div className={styles.images}>
                    <img src={phoneImage1} alt="phone-img" />
                    <img src={phoneImage2} alt="phone-img" />
                </div>
                
            </div>
            <div className={styles.rightContainer}>
                <h1 className={`${styles.walletTitle} title-second`}>A crypto wallet from the future</h1>
                <p className={`${styles.walletText} text-main`}>Your Gateway to Secure Crypto Transactions and Beyond. With our state-of-the-art wallet technology, you can safely store, manage, and transact your cryptocurrencies.</p>
                <div className={styles.infoPoints}>
                    <h3><i className='fas fa-arrow-trend-down'></i>Lowest fees in market</h3>
                    <h3><i className='fas fa-bolt'></i>Fast and secure trading</h3>
                    <h3><i className='fas fa-lock'></i>256-bit secure encryption</h3>
                </div>
            </div>
        </div>
    );
}
 
export default CryptoWalletBanner;