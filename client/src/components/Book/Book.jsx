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
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <GridItem xs={12} sm={12} md={12}>
      <GridItem xs={2} sm={2} md={2} className="float">
        <img src={team1} alt="book_image" className={imageClasses} />
      </GridItem>
      <GridItem xs={10} sm={10} md={10} align="left">
        <CardMedia
          src="assets/img/avatar.jpg"
          title="Live from space album cover"
        />
        <h4 className={classes.cardTitle}>
          Title
          <br />
          <small className={classes.smallTitle}>Authors</small>
        </h4>
        <p className={classes.description}>
          You can write here details about one of your team members. You can
          give more details about what they do. Feel free to add some for people
          to be able to follow them outside the site.
        </p>
        <a href="">Link to book</a>
        <button className="view">View</button>
        {props.page === "delete" ? (
          <button className="delete" onClick={() => this.deleteBook()}>
            Delete
          </button>
        ) : (
          <button className="save">Save</button>
        )}
      </GridItem>
      <hr />
    </GridItem>
  );
}
export default withStyles(teamStyle)(Book);
