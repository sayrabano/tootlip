import React, { Component } from "react";

//defining navbar componenets
export default class Navbar extends React.Component {
  render() {
    return (
      // navbar container
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark opacity">
          <div className="container-fluid">
            <a className="navbar-brand">
              {/* getting title through props */}
              {this.props.title} {this.props.element}
            </a>
          </div>
        </nav>
      </div>
    );
  }
}
