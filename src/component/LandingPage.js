import React from 'react';
import styles from "../styles/LandingPage.module.css";
import { useNavigate } from 'react-router-dom';
import applicationIcon from '../images/applicationImage.jpg'
import applicationHeaderImage from '../images/applicationHeaderImage.png'
function LandingPage(props) {
    const navigate = useNavigate();
    const nextPage = () => navigate("/weatherApplication");
    const homePage = () => navigate("/")
    const contactsPage = () => navigate("/contacts")
    const aboutPage = () => navigate("/about")
    return (
        <div className={styles.bdy}>
            <nav className={styles.navigationBar}>
                <div className={styles.navigationBarLeftContainer}>
                    <img className={styles.websiteIconDesign} src={applicationIcon}/>
                    <h1 className={styles.websiteNameDesign}>WeatherGo</h1>
                </div>
                <div className={styles.navigationBarRightContainer}>
                    <button className={styles.navigationBarRightContainerButtonsDesign} onClick={homePage}>Home</button>
                    <button className={styles.navigationBarRightContainerButtonsDesign} on onClick={aboutPage}>About Us</button>
                    <button className={styles.navigationBarRightContainerButtonsDesign} onClick={contactsPage}>Contacts</button>
                </div>
            </nav>
            <div className={styles.box}>
                <img className={styles.websiteImageDesign} src={applicationHeaderImage} />
                <h1 className={styles.appNameDesign}>WeatherGo</h1>
                <p className={styles.appDescriptionDesign}>A web-based application that helps to provide weather information of different locations.</p>
                <div>
                    <button className={styles.nextButtonDesign} onClick={nextPage}>Get Started</button>
                </div>
            </div>
            <div>
                <p className={styles.footerDescriptionDesign}>Ⓒ Soumyarup Chatterjee</p>
            </div>
        </div>
    )
}
export default LandingPage;