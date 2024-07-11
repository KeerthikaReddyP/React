import { useState,useEffect } from "react";
import { RESTAURANT_MENU_URL } from "./constants";

const useRestaurantMenu=(resId)=>{
    const [resInfo,setResInfo]=useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async ()=>{
        const data=await fetch(RESTAURANT_MENU_URL+resId);
        const jsonData=await data.json();

        setResInfo(jsonData);
    };

    return resInfo;
}

export default useRestaurantMenu;