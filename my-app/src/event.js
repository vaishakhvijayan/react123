import React from "react";
function Event(){
    const football=()=>{
        alert("great");
    }
    return(
        <div>
           < button onClick={football}>click</button>
        </div>
    )
}
export default Event