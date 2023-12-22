import {React, Component} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/AboutPage.module.css'
import aboutUsImage from '../images/aboutUsImage.jpg'

class AboutPage extends Component {
    constructor(props) {
        super(props);
        this.navigateHomePage = this.navigateHomePage.bind(this);
    }

    navigateHomePage() {
        this.props.navigate("/");
    }

    render() {
        return(
            <div className={styles.body}>
                <div className={styles.box}>
                    <div className={styles.aboutPageImagecontainer}>
                        <img className={styles.aboutPageImageDesign} src={aboutUsImage}/>
                        <p className={styles.aboutPageHeadingDesign}>ABOUT US</p>
                    </div>
                    <div className={styles.appInformationContainer}>
                        <h3 className={styles.appInformationDesign}>Description:-</h3>
                        <p className={styles.appInformationDesign}>Welcome to WeatherGo, your go-to application for accurate and up-to-date weather information. At WeatherGo, we are passionate about providing you with the most comprehensive and reliable weather data, ensuring you are well-prepared for whatever Mother Nature has in store.</p>
                        <h3 className={styles.appInformationDesign}>Features and Updates:-</h3>
                        <p className={styles.appInformationDesign}>⦿ Precision, Accurate, Real-Time Weather Updates. </p>
                        <p className={styles.appInformationDesign}>⦿ User-Friendly Interface and Key Weather Forecast Indicators.</p>
                        <p className={styles.appInformationDesign}>⦿ Global Coverage Weather Updates and Severe Weather Alerts.</p>
                    </div>
                </div>
                <button className={styles.homePageButtonDesign} onClick={this.navigateHomePage}></button>
            </div>
        );
    }
}

function addHookTo(Component) {
    function CompWithHook(props) {
      const navigate = useNavigate();
  
      return <Component {...props} navigate={navigate} />;
    }
  
    return CompWithHook;
}

export default addHookTo(AboutPage);