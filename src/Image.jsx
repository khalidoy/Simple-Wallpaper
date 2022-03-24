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
        <div className="imageMetaData">
          <span className="author">by {this.props.author} </span>

          <a className="donwloadBTN" href={this.props.download} target="blank">
            Download
          </a>
          <span>
            <img
              className="likeIcon"
              src="https://cdn-icons-png.flaticon.com/512/6444/6444864.png"
              alt="likes"
            />
            {this.props.likes}
          </span>
        </div>
        <hr />
      </div>
    );
  }
}

export default Image;
