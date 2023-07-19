import React, { useRef, useState } from 'react';

// Styles
import styles from "../../styles/HomePage/CommentsBanner.module.scss";

// Components
import DownloadAppButton from '../DownloadAppButton';
import CommentCard from './CommentCard';

// Data
import commentData from "../../data/commentData.json";


const CommentBanner = () => {

    const [clickedComment, setClickedComment] = useState(0);

    const cardRef = useRef();

    const carouselButtonHandler = (commentId) => {
        setClickedComment(commentId);
    }


    return (
        <div className={`${styles.commentsBanner} bottom-divider`}>
            <div className={`${styles.titleContainer} context-wrapper`}>
                <h1 className={`${styles.commentsTitle} title-second`}>What our users say?</h1>
                <DownloadAppButton />
            </div>

            <div className={`${styles.commentFrame} context-wrapper`}>
                <div 
                    className={styles.comments}
                    style={{
                        transform: clickedComment === 0 ? `translateX(0px)` : 
                        `translateX(-${clickedComment * (cardRef.current.offsetWidth + 30)}px)` }}
                >
                    {commentData.comments.map((item) => (
                        <CommentCard
                            key={item.commentId}
                            name={item.name}
                            title={item.title}
                            comment={item.comment}
                            commentId={item.commentId}
                            cardRef={cardRef}
                            clickedComment={clickedComment}
                        />
                    ))}
                </div>
            </div>

            <div className={styles.carouselButtons}>
                {commentData.comments.map((item) => (
                    <div
                        key={item.commentId} 
                        className={styles.buttonDot}
                        onClick={() => carouselButtonHandler(item.commentId)}
                        style={{ 
                            backgroundColor: item.commentId === clickedComment ? "white" : "#d4d4d4b0",
                            scale: item.commentId === clickedComment ? "1.1" : "1"
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}
 
export default CommentBanner;