import React from 'react';

// Styles
import styles from "../../styles/HomePage/BrandsBanner.module.scss";


const BrandsBanner = () => {
    return (
        <div className={`${styles.brandsBanner} context-wrapper bottom-divider-large`}>
            <h2>CRYPTO APP HAS BEEN FEATURED ON</h2>
            <div className={styles.companyContainer}>
                <h1><i className='fa-brands fa-twitch'></i> Twitch</h1>
                <h1><i className='fa-brands fa-telegram'></i> Telegram</h1>
                <h1><i className='fa-brands fa-discord'></i> Discord</h1>
                <h1><i className='fa-brands fa-vimeo'></i> Vimeo</h1>
                <h1><i className='fa-brands fa-bitbucket'></i> Bitbucket</h1>
            </div>
        </div>
    );
}
 
export default BrandsBanner;