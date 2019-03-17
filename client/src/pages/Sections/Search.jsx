import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Book from "components/Book/Book.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class Search extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Search for a book by name</h2>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <CustomInput
              labelText="Book title"
              id="title"
              formControlProps={{
                fullWidth: true
              }}
            />
            <Button color="primary">Search</Button>
          </GridItem>
          <div className={classes.section}>
            <h2 className={classes.title}>Here is what we found</h2>
            <div>
              <GridContainer>
                <Book page="save" />
              </GridContainer>
            </div>
          </div>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(productStyle)(Search);
