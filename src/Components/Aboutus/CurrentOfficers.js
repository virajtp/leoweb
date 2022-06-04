import React, { Component } from "react";
import Exco21_22 from './Exco_21_22';
import Dir21_22 from './Dir_21-22';
import ReactGA from "react-ga";
import $ from "jquery";

    class ExcoDir extends Component {
        
        constructor(props) {
          super(props);
          this.state = {
            foo: "bar",
            officerData: {}
          };
      
          ReactGA.initialize("UA-110570651-1");
          ReactGA.pageview(window.location.pathname);
        }
      
        getofficerData() {
          $.ajax({
            url: "./data.json",
            dataType: "json",
            cache: false,
            success: function(data) {
              this.setState({ officerData: data });
            }.bind(this),
            error: function(xhr, status, err) {
              console.log(err);
              alert(err);
            }
          });
        }
      
        componentDidMount() {
          this.getofficerData();
        }
      
        render() {
            console.log("A-----------" + this.state.officerData.officers)
    return (
        
        <div className="currentOfficers">
            <Exco21_22 data={this.state.officerData.officers} />
            <br/>
            <Dir21_22 data={this.state.officerData.officers} />
        </div>
    );
}
}

export default ExcoDir;