import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import GalleryView from "../Gallery_View/GalleryView";
import { CircularProgress, Grid } from "@material-ui/core";

class HomeImages extends Component {

  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      imagesDB: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getImgData() {
    $.ajax({
      url: "./imagesDB.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ imagesDB: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getImgData();
  }

  render() {
    console.log("B-----------" + this.state.imagesDB.images)
    return (
      !this.state.imagesDB.images ? <CircularProgress /> : (
        <div className="homeImages">
          <GalleryView images={this.state.imagesDB.images.home} width={"100%"} dots={true} heights={650}/>
        </div>
      )
    );
  }
}

export default HomeImages;