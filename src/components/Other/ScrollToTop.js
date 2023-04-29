import { useEffect } from "react";
import { useLocation } from "react-router-dom";

let location = useLocation();

useEffect(()=>{

window.scrollTo(0,0);

},[location])


