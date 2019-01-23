
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import BasicLayout from "./layout.jsx";


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spacing: '16',
      items: [0, 1, 2, 3, 4].map(function (i, key, list) {

        let getCharType = (n) => {
          switch (n % 5) {
            case 0:
              return "line";
            case 1:
              return "bar";
            case 2:
              return "point";
            case 3:
              return "pie"
            case 4:
              return "percent"
          }
        }

        return {
          i: i.toString(),
          x: i * 2,
          y: 0,
          w: 2,
          h: 3,
          add: i === (list.length - 1).toString(),
          chartType: getCharType(i),
        };
      })
    };
  }

  render() {

    let _this = this;

    let onLayoutChange = function (layout) {
      //console.log(layout);
      //console.log(_this.state.items);
      let itmes = _this.state.items.map(function (value) {
        return value;
      });

      //console.log('map遍历:'+index+'--'+value);
      layout.map(function (valueL, indexL) {
        if (indexL < itmes.length) {
          itmes[indexL].h = valueL.h;
          itmes[indexL].w = valueL.w;
        } else {
          itmes.push(valueL);
        }
      });
      _this.setState({ items: itmes });
    }

    let onRemoveItem = function (i) {
      //console.log("removing", i);
      _this.setState({ items: _.reject(_this.state.items, { i: i }) });
      //console.log(_this.items.length);
    }

    return (
      <div>

        <BasicLayout
          onLayoutChange={onLayoutChange}
          items={this.state.items}
          onRemoveItem={onRemoveItem}
        />

      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);
