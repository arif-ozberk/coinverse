import React from 'react';

// Styles
import styles from "../../styles/AboutPage/AboutHero.module.scss";


const AboutHero = () => {
    return (
        <div className={`${styles.aboutHero} context-wrapper bottom-divider-large`}>
            <h1 className={`${styles.heroTitle} title-main`}>About Coinverse</h1>
            <p className={`${styles.heroText} text-main bottom-divider`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean dis placerat. Scelerisque imperdiet vitae dolor non aliquam. Malesuada.</p>

            <h2 className={`${styles.cardsTitle} title-second`}>What drives Coinverse</h2>
            <div className={styles.aboutCards}>
                <div className={styles.row}>
                    <div className={styles.aboutCard}>
                        <i className='fas fa-users'></i>
                        <div className={styles.cardContext}>
                            <h3>OPEN SOURCE</h3>
                            <p className='text-main'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.</p>
                        </div>
                    </div>
                    <div className={styles.aboutCard}>
                        <i className='fas fa-earth-americas'></i>
                        <div className={styles.cardContext}>
                            <h3>DECENTRALIZED</h3>
                            <p className='text-main'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.</p>
                        </div>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.aboutCard}>
                        <i className='fas fa-magnifying-glass'></i>
                        <div className={styles.cardContext}>
                            <h3>TRANSPARENT</h3>
                            <p className='text-main'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.</p>
                        </div>
                    </div>
                    <div className={styles.aboutCard}>
                        <i className='fas fa-compass'></i>
                        <div className={styles.cardContext}>
                            <h3>COMMUNITY DRIVEN</h3>
                            <p className='text-main'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default AboutHero;