import React from 'react';

// Styles
import styles from "../../styles/AboutPage/OurTeam.module.scss";

// Images
import profImage1 from "../../images/team-card-prof-img-1.jpeg";
import profImage2 from "../../images/team-card-prof-img-2.jpeg";
import profImage3 from "../../images/team-card-prof-img-3.jpeg";


const OurTeam = () => {
    return (
        <div className={`${styles.ourTeamContainer} context-wrapper bottom-divider`}>
            <h2 className='title-second'>Our Team</h2>
            <div className={styles.cardContainer}>
                <div className={styles.teamCard}>
                    <div className={styles.cardTitle}>
                        <img src={profImage1} alt="profile-img" />
                        <div className={styles.name}>
                            <h3>JOHN CARTER</h3>
                            <h4>CEO & CO-FOUNDER</h4>
                        </div>
                    </div>
                    <p className='text-main'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mi aliquet eget id bibendum risus. Velit fermentum mi proin sit morbi</p>
                    <div className={styles.socials}>
                        <a href="#"><i className='fa-brands fa-facebook'></i></a>
                        <a href="#"><i className='fa-brands fa-twitter'></i></a>
                        <a href="#"><i className='fa-brands fa-linkedin'></i></a>
                    </div>
                </div>

                <div className={styles.teamCard}>
                    <div className={styles.cardTitle}>
                        <img src={profImage2} alt="profile-img" />
                        <div className={styles.name}>
                            <h3>SOPHIE MOORE</h3>
                            <h4>COMMUNITY LEAD</h4>
                        </div>
                    </div>
                    <p className='text-main'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mi aliquet eget id bibendum risus. Velit fermentum mi proin sit morbi</p>
                    <div className={styles.socials}>
                        <a href="#"><i className='fa-brands fa-facebook'></i></a>
                        <a href="#"><i className='fa-brands fa-twitter'></i></a>
                        <a href="#"><i className='fa-brands fa-linkedin'></i></a>
                    </div>
                </div>

                <div className={styles.teamCard}>
                    <div className={styles.cardTitle}>
                        <img src={profImage3} alt="profile-img" />
                        <div className={styles.name}>
                            <h3>ALEX TURNER</h3>
                            <h4>OPERATIONS</h4>
                        </div>
                    </div>
                    <p className='text-main'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mi aliquet eget id bibendum risus. Velit fermentum mi proin sit morbi</p>
                    <div className={styles.socials}>
                        <a href="#"><i className='fa-brands fa-facebook'></i></a>
                        <a href="#"><i className='fa-brands fa-twitter'></i></a>
                        <a href="#"><i className='fa-brands fa-linkedin'></i></a>
                    </div>
                </div>

            </div>
        </div>
    );
}
 
export default OurTeam;