import React from 'react';
import { useNavigate } from 'react-router-dom';
function Prob()
{
    const nav=useNavigate();
    const Road=() =>{
    nav('/road')
    }
    const Power=() =>{
    nav('/power')
    }
    const Water=() =>{
    nav('/water')
    }
    const Nature=() =>{
    nav('/nature')
    }
    const Logout=() =>{
        nav('/')
        }
    return(
        <>
        <div className='text'>
            <h1><b>Problems around us</b></h1>
        </div>
        <button onClick={Logout}>log out</button><br/>
        <div className='road'>
            <h2>ROAD</h2>
            <img src="road.jpg"width="150"height="150"/>      
            <button className='button'name='button'onClick={Road}>road</button>
        </div>
        <div className='power'>
            <h2>POWER</h2>
            <img src="power.webp"width="150"height="150"/>
            <button className='button'name='button'onClick={Power}>power</button>
        </div>
        <div className='water'>
            <h2>WATER</h2>
            <img src="water.jpg"width="150"height="150"/>
            <button className='button'name='button'onClick={Water}>water</button>
        </div>
        <div className='nature'>
            <h2>NATURE</h2>
            <img src="nature.jpeg"width="150"height="150"/>
            <button className='button'name='button'onClick={Nature}>nature</button>
        </div>

        </>
        
    )
}
export default Prob;