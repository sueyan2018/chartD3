// import React from 'react';

// class Index extends React.Component {
//     render() {
//         return (
//             <div>
//                 这是首页
//             </div>
//         );
//     }
// }

// export default Index;

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import BarChartContainer from "./BarChartContainer.jsx";
import PieChartContainer from "./PieChartContainer.jsx";
import LineChartContainer from "./LineChartContainer.jsx";
import ScatterPlotContainer from "./ScatterPlotContainer.jsx";
import AreaChartContainer from "./AreaChartContainer.jsx";
import Layout from "./layout.jsx";


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
        };
    }

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
        <div>
            
        <Layout />
        </div>
    //   <Grid container className={classes.root} spacing={16}>
    //     <Grid item xs={12}>
    //       <Grid container className={classes.demo} justify="left" spacing={Number(spacing)}>
    //           <Grid item>
    //             <BarChartContainer /> />
    //           </Grid>
    //           <Grid item>
    //             <PieChartContainer />
    //           </Grid>
    //           <Grid item>
    //           <LineChartContainer />
    //           </Grid>
    //           <Grid item>
    //           <ScatterPlotContainer />
    //           </Grid>
    //           <Grid item>
    //           <AreaChartContainer />
    //           </Grid>
    //       </Grid>
    //     </Grid>
    //   </Grid>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);
