import React from "react";
import {useNavigate } from 'react-router-dom';
function Nature()
{
     const nav=useNavigate();
     const Home=() =>{
     nav('/p1')
     }
    return(
        <>
        <div>
        <img src="nature.jpeg" width="250px" height="250px"/>
        <h5>Nature is the ultimate source of our living. Both living
         and non-living things include nature, and everyone is interdependent,
         which helps maintain the ecosystem. Plants, animals, and humans all 
         depend on nature for their survival. It supplies oxygen, sunlight, soil,
          water, and other necessary components.</h5>
        </div>
        <div>
         <button className='button'name='button'onClick={Home}>home</button> 
        </div>
        </>
    );
}
export default Nature;