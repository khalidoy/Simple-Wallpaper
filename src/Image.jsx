import React from "react";
import "./Image.css";
class Image extends React.Component {
  render() {
    return (
      <div className="imgBigDiv">
        <img
          className="img"
          alt="test"
          src={this.props.src}
          onClick={() => window.open(this.props.src, "_blank")}
        />
        <br />

        <a className="donwloadBTN" href={this.props.download} target="blank">
          Download
        </a>
        <hr />
      </div>
    );
  }
}

export default Image;
