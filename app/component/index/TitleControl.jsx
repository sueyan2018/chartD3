import React from "react";
import SimpleMenu from './Menu.jsx';

class TitleControl extends React.Component {
//function TitleControl(props) {
    // let deleteItem = function (){
    //     props.callbackDelete();
    // }

    // let setItem = function (){
    //     props.callbackSet();
    // }
    
    // let saveItem = function (){
    //     props.callbackSave();
    // }

      constructor(props) {
        super(props);
    
        this.state = {
          color:'',
          value:0,
          titleStyle:"titleStyleLeft"
        }; 
      };



      deleteItem = () =>{
        this.props.callbackDelete();
      };

      handleColorTitle = (color) =>{
          console.log("Title####",color)
          this.setState({color: color.hex});      
      };
    
      handleTabsTitle = (value) =>{
        console.log("Title####",value)
        this.setState({value: value}); 
        this.props.onTitle(value);
        

        if(value==1){
            this.setState({
                titleStyle: "titleStyleCenter"
            })
        }else if (value==2){
            this.setState({
                titleStyle: "titleStyleRight"
            })
        }else{
            this.setState({
                titleStyle: "titleStyleLeft"
            })
        }
        

      };


    render() {
        return (
                    
            <div className={"chartTitle"}> 
                <span className={"chartName"}>
                    <div className={this.state.titleStyle}>
                        {this.props.title}
                    </div>
                </span>
                <div className={"controlBtn"}>
                <SimpleMenu handleTabsTitle={this.handleTabsTitle.bind(this)} handleColorTitle={this.handleColorTitle.bind(this)} title={"Edit style"}/>
                <i onClick={() => deleteItem()}>×</i>
                </div>
            </div>
        
            
        );
    }

}

export default TitleControl;