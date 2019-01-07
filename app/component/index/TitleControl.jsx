import React from "react";

function TitleControl(props) {
    let deleteItem = function (){
        props.callbackDelete();
    }
    console.log(props.callbackDelete);
    
    return (
         
        
        <div className={"chartTitle"}> 
            <span className={"chartName"}>
            <div>
            LineChart
            </div>
            </span>
            <div className={"controlBtn"}>
            <i>set</i>
            <i>big</i>
            <i onClick={() => deleteItem()}>*</i>
            </div>
        </div>
       
        
    );
}
export default TitleControl;