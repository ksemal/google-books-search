import React from "react";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import GridItem from "components/Grid/GridItem.jsx";
import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";
import API from "../../utils/API";

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /* initial state */
    };
  }

  saveBook = event => {
    event.preventDefault();
    API.saveBook({
      title: this.props.title,
      authors: this.props.authors,
      description: this.props.description,
      link: this.props.link,
      image: this.props.image
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(classes.imgRaised, classes.imgFluid);

    return (
      <GridItem xs={12} sm={12} md={12} className="divider">
        <GridItem xs={2} sm={2} md={2} className="float">
          <img
            src={this.props.image}
            alt="book_image"
            className={imageClasses}
          />
        </GridItem>
        <GridItem xs={10} sm={10} md={10} align="left">
          <h4 className={classes.cardTitle}>
            Title: {this.props.title}
            <br />
            <small className={classes.smallTitle}>
              Authors: {this.props.authors.map(author => author)}
            </small>
          </h4>
          <p className={classes.description}>{this.props.description}</p>
          <a href={this.props.link} target="_blank">
            Link to preview
          </a>
          {this.props.page === "delete" ? (
            <button className="delete" onClick={() => this.deleteBook()}>
              Delete
            </button>
          ) : (
            <button className="save" onClick={this.saveBook.bind(this)}>
              Save
            </button>
          )}
        </GridItem>
      </GridItem>
    );
  }
}
export default withStyles(teamStyle)(Book);
