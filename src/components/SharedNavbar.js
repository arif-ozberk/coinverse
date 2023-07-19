import React, { useState } from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

// Styles
import styles from "../styles/SharedNavbar/SharedNavbar.module.scss";

// Images
import logoImage from "../images/logo-img.png";




const SharedNavbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const hamburgerHandler = () => {
        setIsOpen(isOpen => !isOpen);
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };


    return (
        <div>
            <header className={`${styles.navbarWrapper} context-wrapper bottom-divider`}>
                <nav>
                    <div className={styles.navbarLogo}>
                        <img src={logoImage} alt="navbar-logo-img" />
                        <h1>Coinverse</h1>
                    </div>

                    <ul className={`${styles.navbarLinks} ${isOpen ? styles.navbarLinksActive : ""}`}>
                        <i className={`fas fa-close`} onClick={() => setIsOpen(isOpen => false)}></i>
                        <li onClick={scrollToTop}><Link to='/' onClick={() => setIsOpen(false)}>HOME</Link></li>
                        <li onClick={scrollToTop}><Link to='/aboutPage' onClick={() => setIsOpen(false)}>ABOUT</Link></li>
                        <li onClick={scrollToTop}><Link to='/pricingPage' onClick={() => setIsOpen(false)}>PRICING</Link></li>
                        <li onClick={scrollToTop}><Link to='/tokensPage' onClick={() => setIsOpen(false)}>TOKENS</Link></li>
                        <a 
                            href='#download-banner' 
                            className={styles.sideBarDownload} 
                            onClick={() => setIsOpen(false)}
                        >DOWNLOAD APP</a>
                    </ul>
                </nav>

                <div className={styles.navbarButtons}>
                    <a href='#download-banner' className={styles.downloadButton}>DOWNLOAD APP</a>
                    <div onClick={hamburgerHandler} className={styles.hamburgerButton}>
                        <div className={styles.stickWrapper}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </header>

            <Outlet />
        </div>
    );
}
 
export default SharedNavbar;