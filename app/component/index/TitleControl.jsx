import React from "react";
import SimpleMenu from './Menu.jsx';

function TitleControl(props) {
    let deleteItem = function (){
        props.callbackDelete();
    }

    let setItem = function (){
        props.callbackSet();
    }
    
    let saveItem = function (){
        props.callbackSave();
    }

    return (
                
        <div className={"chartTitle"}> 
            <span className={"chartName"}>
            <div>
            {props.title}
            </div>
            </span>
            <div className={"controlBtn"}>
            <SimpleMenu />
            <i onClick={() => deleteItem()}>×</i>
            </div>
        </div>
       
        
    );
}
export default TitleControl;