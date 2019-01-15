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
          backgroudColor:'',
          borderColor:'',
          value:0,
          titleStyle:"titleStyleLeft",
          colorStyle:'',
          backgroudColorStyle:'',
          borderColorStyle:'',
        }; 
      };



      deleteItem = () =>{
        this.props.callbackDelete();
      };

      handleColorTitle = (color) =>{
          console.log("Title####",color.hex)
          this.setState({color: color.hex});       
      };

      handleBackgoudColorTitle = (color) =>{
        console.log("handleBackgoudColorTitle",color)
        this.setState({backgroudColor: color.hex});       
      };
      handleBorderColorTitle = (color) =>{
        console.log("handleBorderColorTitle",color)
        this.setState({borderColor: color.hex});        
      };

      handleTabsTitle = (value) =>{

        console.log("Title####",value)
        this.setState({value: value});
        //this.props.onTitle(value);

      };

      saveInTitle(){
        
       let {value } = this.state;

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

        this.setState({
            colorStyle: this.state.color
        })
      }

      saveInContent(){
 console.log("#####",this.state.backgroudColor,"#####",this.state.borderColor,)
         this.setState({
            backgroudColorStyle: this.state.backgroudColor,
            borderColorStyle: this.state.borderColor,
         })
       }

    render() {
        return (
                    
            <div className={"chartTitle"}> 
                <span className={"chartName"}>
                    <div className={this.state.titleStyle} style={{color:this.state.colorStyle,backgroundColor:this.state.backgroudColorStyle,border:'1px solid'+this.state.borderColorStyle}}>
                        {this.props.title}
                    </div>
                </span>
                <div className={"controlBtn"}>
                <SimpleMenu 
                    handleTabsTitle={this.handleTabsTitle.bind(this)} 
                    handleColorTitle={this.handleColorTitle.bind(this)} 
                    handleBackgoudColorTitle={this.handleBackgoudColorTitle.bind(this)} 
                    handleBorderColorTitle={this.handleBorderColorTitle.bind(this)} 
                    saveInTitle={this.saveInTitle.bind(this)} 
                    saveInContent={this.saveInContent.bind(this)} 
                    title={"Edit style"}
                />
                <i onClick={() => deleteItem()}>×</i>
                </div>
            </div>
        
            
        );
    }

}

export default TitleControl;