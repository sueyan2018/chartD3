import React from "react";
import SimpleMenu from './Menu.jsx';

class TitleControl extends React.Component {

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
          title:this.props.title,
          titleName:this.props.title,
        }; 
      };



      deleteItem = () =>{
        this.props.callbackDelete();
      };

      handleTitle = (title) =>{
        console.log("handleTitle",title)
        this.setState({title: title});       
      };

      handleTabsTitle = (value) =>{

        console.log("Title####",value)
        this.setState({value: value});
        //this.props.onTitle(value);

      };

      handleColorTitle = (color) =>{
          console.log("Title####",color.hex)
          this.setState({color: color.hex});       
      };      

      handleBackgoudColorTitle = (color) =>{
        console.log("handleBackgoudColorTitle",color);
        this.props.handleBackgoudColorLayout(color);
        //this.setState({backgroudColor: color.hex});       
      };

      handleBorderColorTitle = (color) =>{
        console.log("handleBorderColorTitle",color)
        this.props.handleBorderColorLayout(color);
        //this.setState({borderColor: color.hex});        
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
            colorStyle: this.state.color,
            titleName:this.state.title
        })
      }

      saveInContent(){
        //console.log("#####",this.state.backgroudColor,"#####",this.state.borderColor,)
        this.props.saveContent();
        //  this.setState({
        //     backgroudColorStyle: this.state.backgroudColor,
        //     borderColorStyle: this.state.borderColor,
        //  })
       }

    render() {
        return (
                    
            <div className={"chartTitle"}> 
                <span className={"chartName"}>
                    <div className={this.state.titleStyle} style={{color:this.state.colorStyle}}>
                        {this.state.titleName}
                    </div>
                </span>
                <div className={"controlBtn"}>
                <SimpleMenu 
                    handleTitle={this.handleTitle.bind(this)} 
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