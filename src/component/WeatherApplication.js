import React, {Component} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/WeatherApplication.module.css'
import axios from 'axios'
import windSpeedImage from '../images/windSpeedImage.png'
import humidityImage from '../images/humidityImage.png'
import precipitationImage from '../images/precipitationImage.png'
import locationIndicatorImage from '../images/locationIndicatorImage.png'

class WeatherApplication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entryLocation: "India",
            entryLatitude:"",
            entryLongitude:"",
            loading: false,
            city:"",
            region:"",
            country:"",
            temperatureCelsius: "",
            temperatureFahrenheit: "",
            temperatureOutput:"",
            temperatureSymbol:"",
            weatherCondition: "",
            weatherConditionImage: "",
            humidity: "",
            windSpeed: "",
            precipitation:"",
            dateTime:""
        }
        this.inputRef = React.createRef();
        this.inputLocation = this.inputLocation.bind(this);
        this.getDefaultUserLocation = this.getDefaultUserLocation.bind(this);
        this.fetchWeatherInformation = this.fetchWeatherInformation.bind(this);
        this.fetchCelsiusTemperature = this.fetchCelsiusTemperature.bind(this);
        this.fetchFahrenheitTemperature = this.fetchFahrenheitTemperature.bind(this);
        this.navigateHomePage = this.navigateHomePage.bind(this);
        this.refreshApplicationPage = this.refreshApplicationPage.bind(this);
    }

    componentDidMount() {
        // Using a free IP geolocation service (example: ipinfo.io)
        this.inputRef.current.focus();
        this.fetchWeatherInformation();
        this.getDefaultUserLocation()
        .then(position => {
            this.setState({
                entryLatitude: position.coords.latitude,
                entryLongitude: position.coords.longitude,
                entryLocation: this.state.entryLatitude+","+this.state.entryLongitude,
                loading: false,
            });
            console.log(position.coords.latitude);
            const weatherData = axios.get("https://api.weatherapi.com/v1/current.json?key=62a958ab0bfe40e0bd850224231212&q=+"+position.coords.latitude+","+position.coords.longitude+"&aqi=no");
            weatherData.then((response) => 
            this.setState({
                entryLocation: response.data.location.name,
                city: response.data.location.name,
                region: response.data.location.region,
                country: response.data.location.country,
                temperatureCelsius: response.data.current.temp_c,
                temperatureFahrenheit: response.data.current.temp_f,
                temperatureOutput: response.data.current.temp_c,
                temperatureSymbol:"°C",
                weatherCondition: response.data.current.condition.text,
                humidity: response.data.current.humidity,
                windSpeed: response.data.current.wind_kph,
                precipitation: response.data.current.precip_mm,
                weatherConditionImage: response.data.current.condition.icon,
                dateTime: response.data.location.localtime
            })
            ).catch((error) =>{
                console.log(error);
            })
        })
        .catch(error => {
            console.error('Error fetching location:', error);
        });
    }

    getDefaultUserLocation() {
        return new Promise((resolve, reject) => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              position => {
                resolve(position);
              },
              error => {
                reject(error);
              }
            );
          } else {
            reject(new Error('Geolocation is not supported by this browser.'));
          }
        });
      }

    inputLocation = (event) =>  {
        this.setState ({
            entryLocation: event.target.value
        })
    }

    fetchWeatherInformation() {
        const weatherData = axios.get("https://api.weatherapi.com/v1/current.json?key=62a958ab0bfe40e0bd850224231212&q=+"+this.state.entryLocation+"&aqi=no");
        weatherData.then((response) => 
        this.setState({
            city: response.data.location.name,
            region: response.data.location.region,
            country: response.data.location.country,
            temperatureCelsius: response.data.current.temp_c,
            temperatureFahrenheit: response.data.current.temp_f,
            temperatureOutput: response.data.current.temp_c,
            temperatureSymbol:"°C",
            weatherCondition: response.data.current.condition.text,
            humidity: response.data.current.humidity,
            windSpeed: response.data.current.wind_kph,
            precipitation: response.data.current.precip_mm,
            weatherConditionImage: response.data.current.condition.icon,
            dateTime: response.data.location.localtime
        })
        ).catch((error) =>{
            console.log(error);
        })
    }

    fetchCelsiusTemperature() {
        this.setState({
            temperatureOutput: this.state.temperatureCelsius,
            temperatureSymbol: "°C"
        })
    }

    fetchFahrenheitTemperature() {
        this.setState({
            temperatureOutput: this.state.temperatureFahrenheit,
            temperatureSymbol: "°F"
        })
    }

    navigateHomePage() {
        this.props.navigate("/");
    }

    refreshApplicationPage() {
        window.location.reload();
    }

    render() {
      return (
            <React.Fragment>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <div className={styles.body}>
                <div className={styles.box} >
                    <div className={styles.topContainer}>
                        <div className={styles.topInnerLeftContainer}>
                            <p className={styles.timeDisplayDesign}>{this.state.dateTime.split(' ')[1]}</p>
                            <div className={styles.locationDisplayContainer}>
                                <img className={styles.locationIndicatorIconDesign} src={locationIndicatorImage}/>
                                <span className={styles.locationValueDesign}>{" "}{this.state.city}, {this.state.country}</span>
                            </div>
                        </div>
                        <div className={styles.inputFieldContainer}>
                            <input type="text" ref={this.inputRef} className={styles.searchBarDesign} value={this.state.location} onChange={this.inputLocation}/>
                            <div className={styles.inputFieldButtonContainer}>
                                <button className={styles.searchButtonDesign} onClick={this.fetchWeatherInformation}></button>
                                <button className={styles.refreshButtonDesign} onClick={this.refreshApplicationPage}></button>
                                <button className={styles.homePageButtonDesign} onClick={this.navigateHomePage}></button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.centerContainer}>
                        <div className={styles.centerOutsideContainer}>
                            <div className={styles.centerInnerLeftContainer}>
                                <img className={styles.weatherConditionImageDesign} src={this.state.weatherConditionImage} />
                                <p className={styles.weatherConditionValueDesign}>{this.state.weatherCondition} Weather</p>
                            </div>
                            <div className={styles.centerInnerRightContainer}>
                                <div className={styles.temperatureDisplayDesign}>{this.state.temperatureOutput}<span className={styles.temperatureSymbolDesign}>{this.state.temperatureSymbol}</span></div>
                                <div className={styles.centerInnerRightContainerButtonBox}>
                                    <button className={styles.celsiusButtonDesign} onClick={this.fetchCelsiusTemperature}>Celsius(C)</button>
                                    <button className={styles.fahrenheitButtonDesign} onClick={this.fetchFahrenheitTemperature}>Fahrenheit(F)</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.bottomContainer}>
                        <div className={styles.windSpeedContainer}>
                            <img className={styles.weatherParameterImageDesign} src={windSpeedImage} />
                            <p>{this.state.windSpeed}km/hr</p>
                            <b>Wind Speed</b>
                        </div>
                        <div className={styles.humidityContainer}>
                            <img className={styles.weatherParameterImageDesign} src={humidityImage} />
                            <p>{this.state.humidity}%</p>
                            <b>Humidity</b>
                        </div>
                        <div className={styles.precipitationContainer}>
                            <img className={styles.weatherParameterImageDesign} src={precipitationImage}/>
                            <p>{this.state.precipitation}mm</p>
                            <b>Precipitation</b>
                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
            
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
  
export default addHookTo(WeatherApplication);