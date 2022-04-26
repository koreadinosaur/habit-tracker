import React, { PureComponent } from "react";

class Nav extends PureComponent {
  render() {
    console.log("nav");
    return (
      <div className="nav">
        <span>Habit Tracker</span>
        <span className="nav-counter">{this.props.totalCount}</span>
      </div>
    );
  }
}

export default Nav;
