import React from "react";
function  Event1 (){
 const football=(name)=>{
    alert("my name is"+name);
 }
 return(
    <div>
        <button onClick={()=>football("vaishakh")}>click</button>
    </div>
 )
}
export default Event1;