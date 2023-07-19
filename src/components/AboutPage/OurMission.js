import React from 'react';

// Styles
import styles from "../../styles/AboutPage/OurMission.module.scss";

// Images
import missionImage from "../../images/our-mission-img.png";


const OurMission = () => {
    return (
        <div className={`${styles.ourMissionBanner} context-wrapper bottom-divider-large`}>
            <div className={styles.missionContext}>
                <h1 className={`${styles.missionTitle} title-second`}>Our mission</h1>
                <p className={`${styles.missionText} text-main`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient lorem purus justo, ultricies. Sollicitudin odio elementum urna placerat lacus, vulputate. Non malesuada viverra et ultrices cras. Tincidunt tempor, blandit augue ac feugiat. Praesent arcu tempus ullamcorper quisque in. Magna fermentum, lacus, fermentum arcu.</p>
                <p className={`${styles.missionText} text-main`}>Vulputate pellentesque proin facilisis dignissim gravida sed faucibus nunc. Nunc eget pharetra, in vitae porta lacus. Elit in nisl, in quis nulla tellus suscipit id. Semper velit odio cras pretium tristique habitant. Elit eu penatibus congue orci turpis. Enim diam id.</p>

                <h1 className={`${styles.storyTitle} title-second`}>Our story</h1>
                <p className={`${styles.storyText} text-main`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient lorem purus justo, ultricies. Sollicitudin odio elementum urna placerat lacus, vulputate. Non malesuada viverra et ultrices cras. Tincidunt tempor, blandit augue ac feugiat. Praesent arcu tempus ullamcorper quisque in. Magna fermentum, lacus, fermentum arcu.</p>
                <p className={`${styles.storyText} text-main`}>Vulputate pellentesque proin facilisis dignissim gravida sed faucibus nunc. Nunc eget pharetra, in vitae porta lacus. Elit in nisl, in quis nulla tellus suscipit id. Semper velit odio cras pretium tristique habitant. Elit eu penatibus congue orci turpis.</p>
            </div>
            <img className={styles.missionImage} src={missionImage} alt="mission-img" />
        </div>
    );
}
 
export default OurMission;