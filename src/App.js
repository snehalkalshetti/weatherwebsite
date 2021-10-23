import './App.css';
import img1 from './assets/CloudSnow.svg';
import InfoPanel from './info';

function App() {
  return (
    <>
   <div class="container" >
       
       <div class="containerL">
        <InfoPanel/>
       </div>
    
       <div class="containerR">
       <h1 class="text">weather.com</h1>
       {/* <div class="icon"> */}
         <img src={img1} class="icon"/>
          {/* </div> */}
       <h1 class="degree">29.8&#176;</h1>
        <div class="info">
            <h3 class="city">London</h3> 
            <h6 class="date">Sunday 21,Sept 2021</h6>
        </div>
       </div>

   </div>
    

    </>
    
  );
}

export default App;
