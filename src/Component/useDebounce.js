import {useEffect, useState} from "react"

function useDebounce({value, time}){
 const [debounceValue, SetdebounceValue] = useState(value);

 useEffect (()=>{
    const timeID = setTimeout(()=>{
       SetdebounceValue(value);
    }, time)

    return ()=>{
      clearTimeout(timeID);
    }
 },[value]);

 return debounceValue;
}

export default useDebounce;