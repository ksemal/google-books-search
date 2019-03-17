import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";

import GridContainer from "components/Grid/GridContainer.jsx";
import Book from "components/Book/Book.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

class Saved extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Here are your saved books</h2>
        <div>
          <GridContainer>
            <Book page="delete" />
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(Saved);
