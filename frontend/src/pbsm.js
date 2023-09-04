import {React,  useEffect,  useState } from "react";
import axios from 'axios';

export  const Problem = () => {
    const[i,si]=useState([]);
    useEffect(()=>
      {
        axios.get("https://server-0k4e.onrender.com/pso")
        .then( (result)=>
          {
            si(result.data);
          })
      })
        return(
            <>
                <div>
                 {
                i.map((data)=>
                (
                    <>
                      <div className="ammu">
                     
                    {data.About}<br/>
                    {data.Matter}
                    </div>
                    </>
                ))
                 }
                </div>
              


               
            </>
        )
}




