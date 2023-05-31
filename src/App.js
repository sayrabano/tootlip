//importing required compenents
import React from "react";
import ToolTip from "./components/ToolTip";
import "./App.css";
import Navbar from "./components/Navbar";
//using classbased compenents
export default class App extends React.Component {
  //constructor
  constructor() {
    super();
    this.state = {
      hovering: false,
      position: "left",
    };
  }

  //function for buttonHandleclick
  handleButtonClick = (pos) => {
    this.setState({
      position: pos,
    });
  };

  //function mouseEnter on buuton
  handleMouseEnter = () => {
    this.setState({ hovering: true });
  };

  //function mouseLeave on buuton
  handleMouseLeave = () => {
    this.setState({ hovering: false });
  };
  render() {
    return (
      <div className="App">
        <Navbar
          title="ToolTipApp"
          element={
            <div className="btn-position">
              <button
                className={this.state.position === "top" ? "btn active" : "btn"}
                onClick={(e) => {
                  this.handleButtonClick("top");
                }}
              >
                Top
              </button>
              &nbsp;&nbsp;
              <button
                className={
                  this.state.position === "left" ? "btn active" : "btn"
                }
                onClick={(e) => {
                  this.handleButtonClick("left");
                }}
              >
                Left
              </button>
              &nbsp;&nbsp;
              <button
                className={
                  this.state.position === "right" ? "btn active" : "btn"
                }
                onClick={(e) => {
                  this.handleButtonClick("right");
                }}
              >
                Right
              </button>
              &nbsp;&nbsp;
              <button
                className={
                  this.state.position === "bottom" ? "btn active" : "btn"
                }
                onClick={(e) => {
                  this.handleButtonClick("bottom");
                }}
              >
                Bottom
              </button>
            </div>
          }
        />

        {/* button container to handle mouse hovering on it  */}
        <div id="button-container">
          <button
            className="btn hover-btn"
            onMouseOver={this.handleMouseEnter}
            onMouseOut={this.handleMouseLeave}
          >
            &#9829; Hover Over Me...
          </button>
          {/* setting postion of tooltip */}
          {this.state.hovering && <ToolTip position={this.state.position} />}
        </div>
      </div>
    );
  }
}
