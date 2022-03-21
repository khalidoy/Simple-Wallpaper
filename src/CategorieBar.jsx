import React from "react";
import "./CategorieBar.css";

class CategorieBar extends React.Component {
  state = {};
  render() {
    return (
      <div className="categorieClass">
        <a onClick={this.props.onClick}>{this.props.categorieName}</a>
      </div>
    );
  }
}

export default CategorieBar;
