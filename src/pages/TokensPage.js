import React, { useEffect, useState } from 'react';

// Styles
import styles from "../styles/TokensPage/TokensPage.module.scss";

// Components
import Footer from '../components/Footer';
import TokenCard from '../components/TokensPage/TokenCard';


const TokensPage = () => {

    const API_URL = "https://api.coinranking.com/v2/coins";

    const [errorMsg, setErrorMsg] = useState(null);
    const [coinData, setCoinData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [coinSelection, setCoinSelection] = useState(["BTC", "ETH", "TRX", "LTC"]);
    const [tokenInput, setTokenInput] = useState("");


    const fetchData = async (coinSelection) => {
        try {
            const response = await fetch(API_URL);
            if(!response.ok) throw Error("Data loading error!");
            const data = await response.json();
            setCoinData([]);
            for(let selection of coinSelection) {
                let filtered = data.data.coins.filter(item => item.symbol === selection);
                setCoinData(prev => [...prev, filtered[0]]);
            }
        }
        catch(error) {
            setErrorMsg(error.message);
        }
        finally {
            setIsLoading(false);
        }
    }


    useEffect(() => {
        setTimeout(() => {
            fetchData(coinSelection);
        }, (Math.random() * 1000) + 1000)
    }, []);


    const refreshBtnHandler = () => {
        setCoinData([]);
        setIsLoading(true);
        setTimeout(() => {
            fetchData(coinSelection);
        }, (Math.random() * 1000) + 1000)
    }


    const closeBtnHandler = (coinCardIndex, coinSymbol) => {
        let filteredSelections = coinSelection.filter(item => item !== coinSymbol);
        setCoinSelection(filteredSelections);
        let filteredCoins = coinData.filter(item => item.uuid !== coinCardIndex);
        setCoinData(filteredCoins);
    }



    return (
        <>
            <div className={`${styles.tokensPage} context-wrapper bottom-divider`}>
                <h1 className={`${styles.tokensTitle} title-main`}>Tokens</h1>
                <p className={`${styles.tokensText} text-main bottom-divider`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, distinctio. Cupiditate, ipsa? Inventore accusamus doloremque iste quos repellat quo praesentium corporis minima, rerum placeat dolores?</p>

                {!isLoading && <i className={`${styles.refreshButton} fas fa-rotate-right`} onClick={refreshBtnHandler}></i>}

                <div className={styles.tokenTitle}>
                    <div className={styles.name}>
                        <h2>NAME</h2>
                    </div>
                    <div className={styles.price}>
                        <h2>PRICE</h2>
                    </div>
                    <div className={styles.change}>
                        <h2>CHANGE</h2>
                    </div>
                    <div className={styles.marketCap}>
                        <h2>MARKET CAP</h2>
                    </div>
                    <div className={styles.website}>
                        <h2>WEBSITE</h2>
                    </div>
                </div>

                {
                    isLoading &&
                    <div className={styles.loader}>
                            <span className={styles.loaderText}>loading</span>
                        <span className={styles.load}></span>
                    </div>
                }

                {!isLoading && errorMsg && <p className={` ${styles.errorMsg}`}>Error Loading Data!</p>}

                {!isLoading && coinSelection.length === 0 ? <p className={`${styles.errorMsg}`}>No Tokens To Display!</p> : ""}

                {!errorMsg && !isLoading && coinData.map((item) => (
                    <TokenCard
                        key={item.uuid} 
                        coinId={item.uuid}
                        coinName={item.name} 
                        coinSymbol={item.symbol} 
                        coinImg={item.iconUrl} 
                        coinPrice={item.price} 
                        coinMarketCap={item.marketCap}
                        coinChange={item.change}
                        coinWebsite={item.coinrankingUrl}
                        closeBtnHandler={closeBtnHandler}
                    />
                ))}

            </div>

            

            <Footer />
        </>
    );
}
 
export default TokensPage;