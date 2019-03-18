import React from "react";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";

import GridItem from "components/Grid/GridItem.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

import team1 from "assets/img/avatar.jpg";

import CardMedia from "@material-ui/core/CardMedia";

function Book(props) {
  const { classes } = props;
  const imageClasses = classNames(
    classes.imgRaised,

    classes.imgFluid
  );
  return (
    <GridItem xs={12} sm={12} md={12} className="divider">
      <GridItem xs={2} sm={2} md={2} className="float">
        <img src={props.image} alt="book_image" className={imageClasses} />
      </GridItem>
      <GridItem xs={10} sm={10} md={10} align="left">
        <h4 className={classes.cardTitle}>
          Title: {props.title}
          <br />
          <small className={classes.smallTitle}>
            Authors: {props.authors.map(author => author)}
          </small>
        </h4>
        <p className={classes.description}>{props.description}</p>
        <a href={props.link}>Link to preview</a>
        {props.page === "delete" ? (
          <button className="delete" onClick={() => this.deleteBook()}>
            Delete
          </button>
        ) : (
          <button className="save">Save</button>
        )}
      </GridItem>
    </GridItem>
  );
}
export default withStyles(teamStyle)(Book);
