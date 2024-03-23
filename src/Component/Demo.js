import React, {useState, useEffect} from "react";
import useDebounce from "./useDebounce";
import './App.css';

function Demo(){
const [searchTerm, setSearchTerm] = useState("");
const [filteredData, setFilteredData] = useState([]);
const data = ["Pen","Pencil","Book","Web","Dev","Ab Kya"];

const debounce = useDebounce({value: searchTerm, time:1000});

const handleChange =(e)=>{
  setSearchTerm(e.target.value.toLowerCase());
}

useEffect(()=>{
  const filterdta = ()=>{
    setFilteredData(data.filter(item =>{
      return item.toLowerCase().includes(searchTerm);
    }));
  }

  if(debounce){
    filterdta();
  }else {
    setFilteredData(data);
  }
},[debounce])

console.log("After  1 seconds : debounce -", debounce);

  return(
    <div>
    <div className="Pdfbar">
      <input  className="Pdfsearchbar"  type="text" placeholder="Search" value={searchTerm} onChange={handleChange}></input>
    </div>  
      <ul className = "pdflist">
        {filteredData.map((item, index)=>(
                  <li key={index}>{item}</li>        
        ))}
      </ul>
    </div>
  )
}

export default Demo;