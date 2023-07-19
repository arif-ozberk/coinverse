import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import styles from "../styles/DownloadAppButton.module.scss";


const DownloadAppButton = () => {
    return (
        <a href='#download-banner' className={`${styles.downloadAppButton} button-main`} >
            DOWNLOAD APP
        </a>
    );
}
 
export default DownloadAppButton;