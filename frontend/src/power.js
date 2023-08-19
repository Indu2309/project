import React from "react";
import {useNavigate } from 'react-router-dom';
function Power()
{
     const nav=useNavigate();
     const Home=() =>{
     nav('/p1')
     }
    return(
        <>
        <div>
        <img src="power.webp" width="250px" height="250px"/>
        <h5>A power cut, sometimes called a power outage or blackout, 
        is a word for when the electric power does not work in an area. 
        It is sometimes caused by a power line (or electricity cable) falling down, 
        but may also happen due to routine maintenance.</h5>
        </div>
        <div>
         <button className='button'name='button'onClick={Home}>home</button> 
        </div>
        </>
    );
}
export default Power;