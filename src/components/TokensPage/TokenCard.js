import React, { useState, useEffect } from 'react';

// Styles
import styles from "../../styles/TokensPage/TokensPage.module.scss";


const TokenCard = ({ coinName, coinSymbol, coinImg, coinPrice, coinMarketCap, coinChange, coinWebsite, closeBtnHandler, coinId }) => {

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    numberWithCommas(coinMarketCap);


    return (
        <div className={styles.tokenCard}>
            <i className={`${styles.closeButton} fas fa-close`} onClick={() => closeBtnHandler(coinId, coinSymbol)}></i>

            <div className={styles.name}>
                <img src={coinImg} alt="coin-symbol-img" />
                <h2>{coinName}</h2>
                <p className={styles.coinSymbol}>{coinSymbol}</p>
            </div>

            <div className={styles.price}>
                <h1 className={styles.responsiveTitles}>PRICE</h1>
                <h2>${numberWithCommas(Number(coinPrice).toFixed(2))}</h2>
            </div>

            <div className={styles.change}>
                <h1 className={styles.responsiveTitles}>CHANGE</h1>
                <h2 style={{ color: Number(coinChange) > 0 ? "green" : "red" }}>{coinChange}%</h2>
            </div>

            <div className={styles.marketCap}>
                <h1 className={styles.responsiveTitles}>MARKET CAP</h1>
                <h2>${numberWithCommas(coinMarketCap)}</h2>
            </div>

            <div className={styles.website}>
                <a href={coinWebsite} target='_blank'>Visit Website</a>
            </div>
        </div>
    );
}
 
export default TokenCard;