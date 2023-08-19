import React, { useEffect, useState } from "react";
import axios from 'axios';
export const Input=()=>
{
    const [name,setname]=useState([]);
    const [dis,setdis]=useState([]);
    const [gmail,setgmail]=useState([]);
    const [mail,setmail]=useState([]);
    const [data,setdata]=useState([]);
    const Show=async()=>{
        const res = await axios.get("http://localhost:8000/output/"+name)
        {
            if(res.data)
            {
                setdis(res.data.Name)
                setmail(res.data.Gmail)
            }
            else{alert("alot found");}
        }
    }
    const Submit=async()=>
    {
        try
        {
            const res=await axios.post("http://localhost:8000/input/"+name+"/"+gmail)
            {
                if(res.data)
                {
                    alert("saved");
                }
                else
                {
                    alert("try again");
                }
            }
        }
        catch(e)
        {
            console.log(e)
        }
    }
    useEffect(()=>{
        axios.get("http://localhost:8000/all")
        .then((result)=>
        {
            setdata(result.data);
        })
    })
    return (
        <>
        <input type="text" onChange={(e)=>setname(e.target.value)}></input>
        <label>Gmail:<input type='gmail' onChange={(e)=>setgmail(e.target.value)}/></label>
        <button onClick={Submit}>Submit</button><br/>
        <button onClick={Show}>show</button>{dis}<br/>{mail}
        <div>
            {
                data.map((siddu)=>
                (
                    <>
                    {siddu.Name}<br/>
                    {siddu.Gmail}<br/><br/>
                    </>
                ))
            }
        </div>
        
        </>
    )
}