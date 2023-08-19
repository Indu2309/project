import React from "react";
import {useNavigate } from 'react-router-dom';
function Road()
{
     const nav=useNavigate();
     const Home=() =>{
     nav('/p1')
     }
    return(
        <>
        <div>
        <img src="road.jpg" width="250px" height="250px"/>
        <h5>A road is a linear way for the conveyance of traffic 
        that mostly has an improved surface for use by vehicles
        (motorized and non-motorized) and pedestrians.</h5>
        </div>
        <div>
         <button className='button'name='button'onClick={Home}>home</button> 
        </div>
        </>
    );
}
export default Road;