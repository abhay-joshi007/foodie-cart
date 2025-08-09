import { useEffect, useState } from "react";
import { CON_MENU } from "./constants";
const useRestaurant=(resid)=>{
    const[resinfo,setresinfo]=useState(null);
    useEffect(()=>{
    fetchdata();
    },[]);
    // fetch data from API
    const fetchdata=async()=>{
    const data=await fetch(CON_MENU+resid);
    const json=await data.json();
    console.log(json);
    setresinfo(json.data);
};
return resinfo;
};
export default useRestaurant;