import React, { Component } from "react";
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "./images/userImage.png";
import { colors, Grid, Row } from '@material-ui/core';
import logo from './images/leologo.png';
import Tabs from './Tabs';

export default class AboutUs extends Component {
  render() {
    return (
      <div className="aboutus">
        <div className="positions">
          <Tabs/>
        </div>
      </div>
    );
  }
}