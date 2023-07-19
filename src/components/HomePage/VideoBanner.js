import React from 'react';

// Styles
import styles from "../../styles/HomePage/VideoBanner.module.scss";

// Images
import videoImage from "../../images/video-banner-img.jpg";


const VideoBanner = () => {
    return (
        <div className={`${styles.videoBanner} context-wrapper bottom-divider-large`}>
            <div className={styles.leftContainer}>
                <h1 className='title-second'>Get started today</h1>
                <p className='text-main'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, inventore.</p>
                <div className={styles.videoPoints}>
                    <h3><i className='fas fa-download'></i>1. Downlaod Coinverse</h3>
                    <h3><i className='fas fa-user'></i>2. Create a free account</h3>
                    <h3><i className='fas fa-money-bill'></i>3. Start trading</h3>
                </div>
            </div>
            <div className={styles.rightContainer}>
                <img src={videoImage} alt="video-img" />
                <div className={styles.videoFilter}></div>
                <div className={styles.playCircle}></div>
                <a href='https://www.youtube.com/watch?v=41JCpzvnn_0' target='_blank' className='fas fa-play'></a>
            </div>
        </div>
    );
}
 
export default VideoBanner;