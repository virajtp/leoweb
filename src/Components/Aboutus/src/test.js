import React,{useState,useEffect} from 'react';
// import './App.css';


function Testdb() {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('resumeData.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="App">
        <h1>hiiiiiiiii</h1>
     {
       data && data.length>0 && data.map((item)=><p>{item.Name}</p>)
     }
    </div>
  );
}

export default Testdb;