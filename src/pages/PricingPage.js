import React from 'react';

// Styles
import styles from "../styles/PricingPage/PricingPage.module.scss";

// Components

import Footer from '../components/Footer';


const PricingPage = () => {
    return (
        <>
            <div className={`${styles.pricingPage} context-wrapper bottom-divider`}>
                <h1 className={`${styles.pricingTitle} title-main`}>Pricing</h1>
                <p className={`${styles.pricingText} text-main`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum repellendus cum magnam maxime totam qui. Et!</p>

                <div className={styles.pricingIcons}>
                    <div className={styles.iconCard}>
                        <i className='fas fa-sitemap'></i>
                        <h2>SEND & RECEIVE</h2>
                    </div>
                    <div className={styles.iconCard}>
                        <i className='fas fa-chart-column'></i>
                        <h2>TRADING CHARTS</h2>
                    </div>
                    <div className={styles.iconCard}>
                        <i className='fas fa-wallet'></i>
                        <h2>WALLET</h2>
                    </div>
                    <div className={styles.iconCard}>
                        <i className='fas fa-rotate'></i>
                        <h2>REAL TIME TRADING</h2>
                    </div>
                </div>

                <div className={styles.pricingContainer}>
                    <div className={styles.pricingCard}>
                        <p className={styles.tag}>BASIC</p>
                        <h1 className={styles.price}>$ 9.00 USD</h1>
                        <p className={`${styles.priceText} text-main`}>Lorem ipsum dolor sit amet, ametor consectetur adipiscing elit. Et nibh.</p>
                        <h3 className={styles.featuresTitle}>FEATURES</h3>
                        <ul className={styles.features}>
                            <li>Trading up to $100K per month</li>
                            <li>Send and receive over 85 tokens</li>
                            <li>Real time crypto trading</li>
                            <li>iOS and Android App</li>
                        </ul>
                        <button className={`${styles.addToCartBtn} button-main`}>ADD TO CART</button>
                    </div>

                    <div className={styles.pricingCard}>
                        <p className={styles.tag}>PRO</p>
                        <h1 className={styles.price}>$ 18.00 USD</h1>
                        <p className={`${styles.priceText} text-main`}>Lorem ipsum dolor sit amet, ametor consectetur adipiscing elit. Et nibh.</p>
                        <h3 className={styles.featuresTitle}>FEATURES</h3>
                        <ul className={styles.features}>
                            <li>Everything included in Basic</li>
                            <li>Trading up to $1MM per month</li>
                            <li>Windows & macOS App</li>
                            <li>Premium Support</li>
                        </ul>
                        <button className={`${styles.addToCartBtn} button-main`}>ADD TO CART</button>
                    </div>

                    <div className={styles.pricingCard}>
                        <p className={styles.tag}>EXPERT</p>
                        <h1 className={styles.price}>$ 99.00 USD</h1>
                        <p className={`${styles.priceText} text-main`}>Lorem ipsum dolor sit amet, ametor consectetur adipiscing elit. Et nibh.</p>
                        <h3 className={styles.featuresTitle}>FEATURES</h3>
                        <ul className={styles.features}>
                            <li>Everything included in Expert</li>
                            <li>Trading up to $10MM per month</li>
                            <li>Windows & macOS App</li>
                            <li>Dedicated Support</li>
                        </ul>
                        <button className={`${styles.addToCartBtn} button-main`}>ADD TO CART</button>
                    </div>
                </div>


            </div>

            <Footer />
        </>
    );
}
 
export default PricingPage;