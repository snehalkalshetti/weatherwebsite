import './App.css';
import img1 from './assets/CloudSnow.svg';
import InfoPanel from './info';

function App() {
  return (

    <div className="container" >
      <div className="containerL">
        <InfoPanel />
      </div>

      <div className="containerR">
        <h1 className="text">weather.com</h1>
        <div className='weather-card'>
          <img src={img1} className="icon" />
          <h1 className="degree">29.8&#176;</h1>
          <div className="info">
            <h3 className="city">London</h3>
            <h6 className="date">Sunday 21, Sept 2021</h6>
          </div>
        </div>
      </div>

    </div>


  );
}

export default App;
