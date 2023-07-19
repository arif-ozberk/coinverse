import React from 'react';

// Styles
import styles from "../../styles/HomePage/CommentsBanner.module.scss";


const CommentCard = ({ name, title, comment, cardRef, clickedComment, commentId }) => {
    return (
        <div 
            className={styles.commentCard} 
            ref={cardRef}
            style={{ opacity: clickedComment === commentId ? 1 : 0.3}}
        >
            <p className='text-main'>"{comment}"</p>
            <h2>{name}</h2>
            <h3>{title}</h3>
        </div>
    );
}
 
export default CommentCard;