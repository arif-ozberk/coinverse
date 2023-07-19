import React from 'react';

// Styles
import styles from "../../styles/AboutPage/Timeline.module.scss";


const Timeline = () => {
    return (
        <div className={`${styles.timelineContainer} context-wrapper bottom-divider-large`}>
            <div className={styles.timelineLeft}>
                <h2 className='title-second'>Timeline</h2>
                <p className='text-main'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
            </div>

            <div className={styles.timelineRight}>
                <div className={styles.timePoint}>
                    <div className={styles.bulletPoint}></div>
                    <h3>2014</h3>
                    <h4>DEVELOPMENT</h4>
                    <p className='text-main'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vivamus at mattis bibendum congue cras id interdum. Risus leo et.</p>
                </div>
                <div className={styles.timePoint}>
                    <div className={styles.bulletPoint}></div>
                    <h3>2016</h3>
                    <h4>INITIAL ANNOUNCEMENT</h4>
                    <p className='text-main'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vivamus at mattis bibendum congue cras id interdum. Risus leo et.</p>
                </div>
                <div className={styles.timePoint}>
                    <div className={styles.bulletPoint}></div>
                    <h3>2018</h3>
                    <h4>BETA RELEASE</h4>
                    <p className='text-main'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vivamus at mattis bibendum congue cras id interdum. Risus leo et.</p>
                </div>
                <div className={styles.timePoint}>
                    <div className={styles.bulletPoint}></div>
                    <h3>2023</h3>
                    <h4>OFFICIAL LAUNCH</h4>
                    <p className='text-main'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vivamus at mattis bibendum congue cras id interdum. Risus leo et.</p>
                </div>
            </div>
        </div>
    );
}
 
export default Timeline;