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

//   handleChange = key => (event, value) => {
//     this.setState({
//       [key]: value,
//     });
//   };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="left" spacing={Number(spacing)}>
              <Grid item>
                <Paper className={classes.paper} />
              </Grid>
              <Grid item>
                <Paper className={classes.paper} />
              </Grid>
              <Grid item>
                <Paper className={classes.paper} />
              </Grid>
              <Grid item>
                <Paper className={classes.paper} />
              </Grid>
              <Grid item>
                <Paper className={classes.paper} />
              </Grid>
            {/* {[0, 1, 2].map(value => (
              <Grid key={value} item>
                <Paper className={classes.paper} />
              </Grid>
            ))} */}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);
