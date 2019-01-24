import React from "react";
import SimpleMenu from "./Menu.jsx";

class TitleControl extends React.Component {
  
  
  constructor(props) {
    super(props);

    this.state = {
      
      textFieldValue: props.textFieldValue,
      titleStyle: this.getStyle(props.tabValue),
      colorStyle: props.titleColor,
      chartBackgoudColor:'#fff',
      chartBorderColor:'#dfdfdf',
      
    };
  }
  
  getStyle = (i) => {
    if (i == 1) {
      return "titleStyleCenter";
    } else if (i == 2) {
      return "titleStyleRight";
    } else {
      return "titleStyleLeft";
    }
  }
    
  deleteItem = () => {
    this.props.callbackDelete();
  };

  handleBackgoudColorTitle = color => {
    console.log("handleBackgoudColorTitle",color);
    this.setState({ chartBackgoudColor: color });
    this.props.handleBackgoudColorLayout(color);
  };

  handleBorderColorTitle = color => {
    console.log("handleBorderColorTitle",color)
    this.setState({ chartBorderColor: color });
    this.props.handleBorderColorLayout(color);
  };

  saveInTitle(params) {
    
    this.setState({
      
      textFieldValue: params.textFieldValue,
      titleStyle: this.getStyle(params.tabValue),
      colorStyle: params.titleColor,
      
    });
    
  }

  saveInContent() {
   
    //this.props.saveContent(this.state);
   this.props.saveContentNew(this.state);
   
  }

  render() {
    return (
      <div className={"chartTitle"}>
        <span className={"chartName"}>
          <div
            className={this.state.titleStyle}
            style={{ color: this.state.colorStyle }}
          >
            {this.state.textFieldValue}
          </div>
        </span>
        <div className={"controlBtn"}>
          <SimpleMenu
            handleBackgoudColorTitle={this.handleBackgoudColorTitle.bind(this)}
            handleBorderColorTitle={this.handleBorderColorTitle.bind(this)}
            saveInTitle={this.saveInTitle.bind(this)}
            saveInContent={this.saveInContent.bind(this)}
            title={"Edit style"}
          />
          <i onClick={this.deleteItem}>×</i>
        </div>
      </div>
    );
  }
}

export default TitleControl;
