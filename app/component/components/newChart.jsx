import React from "react";
import NewDialogDemo from "./dialog.jsx";

class NewChart extends React.Component {
  state = {
    
  };

  saveInMenu = (params) => {
    this.props.addItem(params);
  };

 
  render() {

    return (
      <div>

          <NewDialogDemo
            saveInMenu={this.saveInMenu.bind(this)}
            title={"New Chart"}
          />
        
       
      </div>
    );
  }
}

export default NewChart;
