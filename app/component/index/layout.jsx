import React from "react";
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import BarChartContainer from "./BarChartContainer.jsx";
import PieChartContainer from "./PieChartContainer.jsx";
import LineChartContainer from "./LineChartContainer.jsx";
import ScatterPlotContainer from "./ScatterPlotContainer.jsx";
import AreaChartContainer from "./AreaChartContainer.jsx";

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "#f5f5f5",

  // styles we need to apply on draggables
  ...draggableStyle
});

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "#f5f5f5",
  padding: grid,
  width: 360
});

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  demo: {
    backgroundColor: "#f5f5f5",
    padding: 15
  },
  paper: {
    padding: theme.spacing.unit * 2,
    height: 320,
    width: 332,
    color: theme.palette.text.secondary,
    boxSizing: "border-box"
  }
});

class Layout extends React.Component {
  constructor(props) {
    // props
    super(props);

    this.state = {
      direction: "row",
      justify: "flex-start",
      alignItems: "flex-start",
      items: [

        {
          id: `draggable-1`,
          content: <LineChartContainer />,
        },
        {
          id: `draggable-2`,
          content: <BarChartContainer />,
        },
        {
          id: `draggable-3`,
          content: <ScatterPlotContainer />,
        },
        {
          id: `draggable-4`,
          content: <AreaChartContainer />,
        }
  
      ]
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }
  onDragStart ()  {
    /*...*/
  };
  onDragUpdate () {
    /*...*/
  }
  onDragEnd (result) {
    // the only one that is required
 
    if (!result.destination) {
      return;
    }
    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items,
    });
  }

  changeComponents(){

    
  }

  render() {
    const { alignItems, direction, justify,items } = this.state;
    const { classes } = this.props;


    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable" >
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
            
            {items.map((i, index) => (
                <Draggable key={i.id} draggableId={i.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
             <Grid item>
               <Paper
                 className={classes.paper}
                 style={{
                  paddingTop: 10,
                  paddingBottom: 10
                }}
              >
                {i.content}
              </Paper>
            </Grid>                      
                      
                    </div>
                  )}
                </Draggable>
              ))}
              {/* <Draggable draggableId="draggable-1" index={0}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                    >
                    
                    <Grid item>
                      <Paper
                        className={classes.paper}
                        style={{
                          paddingTop: 10,
                          paddingBottom: 10
                        }}
                      >
                        <LineChartContainer />
                      </Paper>
                    </Grid>
                    </div>
                  
                )}

              </Draggable>
              <Draggable draggableId="draggable-2" index={1}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                  >
                  <Grid item>
                    <Paper
                      className={classes.paper}
                      style={{
                        paddingTop: 10,
                        paddingBottom: 10
                      }}
                    >
                      <BarChartContainer />
                    </Paper>
                  </Grid>
                  </div>
                )}
              </Draggable> */}

              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      
      // <DragDropContext onDragEnd={this.onDragEnd}>
      //     <Grid
      //       className={classes.demo}
      //       container
      //       spacing={16}
      //       alignItems={alignItems}
      //       direction={direction}
      //       justify={justify}
      //     >
      //       <Grid item>
      //         <Paper
      //           className={classes.paper}
      //           style={{
      //             paddingTop: 10,
      //             paddingBottom: 10
      //           }}
      //         >
      //           <LineChartContainer />
      //         </Paper>
      //       </Grid>

      //       <Grid item>
      //         <Paper
      //           className={classes.paper}
      //           style={{
      //             paddingTop: 10,
      //             paddingBottom: 10
      //           }}
      //         >
      //           <BarChartContainer />
      //         </Paper>
      //       </Grid>
            
      //       <Grid item>
      //         <Paper
      //           className={classes.paper}
      //           style={{
      //             paddingTop: 10,
      //             paddingBottom: 10
      //           }}
      //         >
      //           <ScatterPlotContainer />
      //         </Paper>
      //       </Grid>
            
      //       <Grid item>
      //         <Paper
      //           className={classes.paper}
      //           style={{
      //             paddingTop: 10,
      //             paddingBottom: 10
      //           }}
      //         >
      //           <AreaChartContainer />
      //         </Paper>
      //       </Grid>
            
      //       <Grid item>
      //         <Paper
      //           className={classes.paper}
      //           style={{
      //             paddingTop: 10,
      //             paddingBottom: 10
      //           }}
      //         >
      //           <PieChartContainer />
      //         </Paper>
      //       </Grid>
          
      //     </Grid>
      //   </DragDropContext>
    
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Layout);
