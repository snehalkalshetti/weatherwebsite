import { useState } from 'react';
import './App.css';
import searchSvg from './assets/search.svg';

const InfoPanel = () => {
    const [cities,setCities]=useState([
        {id:1,name:'Paris'},
        {id:2,name:'New York'},
        {id:3,name:'Mumbai'},
        {id:4,name:'Dubai'},
    ]);
    const [data,setData]=useState([
        {name:'Condition',value:'Moderate Rain'},
        {name:'Max Temperature',value:'23.1'},
        {name:'Min Temperature',value:'19.2'},
        {name:'Rain',value:'96 %'},
    ])
    return (
        <div className='info-container'>
            <div className='search'>
            <input className='search-bar' placeholder='Search' type='text'/>
            <button className='search-button'>
                <img src={searchSvg} height='12px' width='12px' alt='search'></img>
            </button>
            </div>
            {
                cities.map((city)=>(
                    <div key={city.id} className='search-suggestion'>{city.name}</div>
                ))
            }
            <div className='horizontal-divide'></div>
            <h1 className='info-panel-heading'>Weather Details</h1>
            {
                data.map((dataSet)=>(
                    <div className='details-card'>
                        <div className='details-element'>{dataSet.name}</div>
                        <div className='details-element-value'>{dataSet.value}</div>
                    </div>
                ))
            }
        </div>
    );
}
 
export default InfoPanel;