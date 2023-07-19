import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import styles from "../styles/Footer.module.scss";

// Images
import logoImage from "../images/logo-img.png";


const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };


    return (
        <div className={styles.footerBackground}>
            <div className={`${styles.footerContext} context-wrapper`}>
                <section className={styles.footerTop}>
                    <div className={styles.footerLogo}>
                        <img src={logoImage} alt="logo-image" />
                        <h1>Coinverse</h1>
                    </div>

                    <div className={styles.socials}>
                        <a href="https://www.instagram.com/arif.ozberk.24/" target='_blank'><i className='fa-brands fa-instagram'></i></a>
                        <a href="https://www.instagram.com/arif.ozberk.24/" target='_blank'><i className='fa-brands fa-twitter'></i></a>
                        <a href="https://www.instagram.com/arif.ozberk.24/" target='_blank'><i className='fa-brands fa-facebook'></i></a>
                        <a href="https://www.linkedin.com/in/arif-azmak/" target='_blank'><i className='fa-brands fa-linkedin'></i></a>
                        <a href="https://www.instagram.com/arif.ozberk.24/" target='_blank'><i className='fa-brands fa-youtube'></i></a>
                    </div>
                </section>

                <section className={styles.footerMiddle}>
                    <div className={styles.menu}>
                        <h3>MENU</h3>
                        <ul>
                            <li onClick={scrollToTop} ><Link to='/' >HOME</Link></li>
                            <li onClick={scrollToTop} ><Link to='/aboutPage' >ABOUT</Link></li>
                            <li onClick={scrollToTop} ><Link to='/pricingPage' >PRICING</Link></li>
                            <li onClick={scrollToTop} ><Link to='/tokensPage' >TOKENS</Link></li>
                        </ul>
                    </div>
                    <div className={styles.download}>
                        <h3>DOWNLOAD OUR APPLICATION</h3>
                        <p className='text-main'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla integer inoerer.</p>
                        <div className={styles.buttons}>
                            <a 
                                className={`${styles.downloadButton} button-main`} 
                                href="https://www.apple.com/app-store/" 
                                target='_blank'
                            ><i className='fa-brands fa-apple'></i>APP STORE</a>
                            <a 
                                className={`${styles.downloadButton} button-main`} 
                                href="https://play.google.com/" 
                                target='_blank'
                            ><i className='fa-brands fa-google-play'></i>PLAY STORE</a>
                        </div>
                    </div>
                </section>

                <section className={styles.footerBottom}>
                    <p>COPYRIGHT &copy; 2023 | COINVERSE</p>
                </section>
            </div>
        </div>
    );
}
 
export default Footer;