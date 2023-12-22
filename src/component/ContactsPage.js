import {React, Component} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/ContactsPage.module.css'
import contactsImage from '../images/contactsImage.jpg'

class ContactsPage extends Component {
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
                    <div className={styles.userImagecontainer}>
                        <img className={styles.userImageDesign} src={contactsImage}/>
                        <p className={styles.adminHeadingDesign}>ADMIN</p>
                    </div>
                    <div className={styles.userInformationContainer}>
                        <p className={styles.userInformationDesign}>⦿ Name: Soumyarup Chatterjee</p>
                        <p className={styles.userInformationDesign}>⦿ Email: soumyarupchatterjee111@gmail.com</p>
                        <p className={styles.userInformationDesign}>⦿ LinkedIn URL: https://www.linkedin.com/in/soumyarup-chatterjee-303186191/</p>
                        <p className={styles.userInformationDesign}>⦿ Github URL: https://github.com/SoumyarupChattejeeCSE</p>
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

export default addHookTo(ContactsPage);