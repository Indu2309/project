import React from "react";
import {useNavigate } from 'react-router-dom';
function Water()
{
     const nav=useNavigate();
     const Home=() =>{
     nav('/p1')
     }
    return(
        <>
        <div>
        <img src="water.jpg" width="250px" height="250px"/>
        <h5>Wasting water may limit its availability to other communities,
         especially in areas where water shortage is common. An arid ecosystem
         may suffer when water is wasted. This wasted water could have been better 
         used elsewhere. Excess energy will be used in sewage treatment plants to 
         treat wasted water.</h5>
        </div>
        <div>
         <button className='button'name='button'onClick={Home}>home</button> 
        </div>
        </>
    );
}
export default Water;