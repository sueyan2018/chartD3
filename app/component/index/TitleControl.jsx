import React from "react";

function TitleControl(props) {
    let deleteItem = function (){
        props.callbackDelete();
    }

    let setItem = function (){
        props.callbackSet();
    }
  
    return (
                
        <div className={"chartTitle"}> 
            <span className={"chartName"}>
            <div>
            {props.title}
            </div>
            </span>
            <div className={"controlBtn"}>
            <i onClick={() => setItem()}>set</i>
            <i>big</i>
            <i onClick={() => deleteItem()}>*</i>
            </div>
        </div>
       
        
    );
}
export default TitleControl;