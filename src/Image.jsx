import React, { createElement } from "react";
import "./Image.css";
class Image extends React.Component {
  state = {
    isClickedOnce: 0,
  };

  handleDownload = (e) => {
    if (this.state.isClickedOnce == 0) {
      var parentNode = e.target.parentNode;
      var img = e.target;
      console.log(parentNode);
      img.style.setProperty("border-color", "greenyellow");
      img.style.setProperty("border-width", "2px");
      if (window.innerWidth > 400) {
        img.style.setProperty("filter", "blur(3px)");
      }
      var downloadBtn = document.createElement("a");
      downloadBtn.setAttribute("class", "parentOfdownloadIcon");
      downloadBtn.setAttribute("href", this.props.download);
      downloadBtn.setAttribute("id", "downloadBtn");
      var downloadIcon = document.createElement("img");
      downloadIcon.setAttribute(
        "src",
        "https://cdn-icons-png.flaticon.com/512/54/54993.png"
      );
      downloadIcon.setAttribute("class", "downloadIcon");
      downloadBtn.appendChild(downloadIcon);
      parentNode.appendChild(downloadBtn);
      window.scrollTo(0, parentNode.offsetTop - 7);
      this.setState({ isClickedOnce: 1 });
    } else {
      var downloadbtn = e.target.parentNode.querySelector("a");
      downloadbtn.setAttribute("class", "remove");
      setTimeout(() => {
        downloadbtn.remove();
      }, 700);
      var IMG = e.target;
      IMG.style.setProperty("border-color", "black");
      IMG.style.setProperty("border-width", "3px");
      IMG.style.setProperty(
        "filter",
        "drop-shadow(7.071067811865475px 7.0710678118654755px 5px #000000)"
      );
      this.setState({ isClickedOnce: 0 });
    }
  };

  handleMouseOver = (e) => {
    if (window.innerWidth > 400) {
      var clickToDownloadText = e.target.parentNode.querySelector("h2");
      clickToDownloadText.style.setProperty("opacity", "1");
    }
  };

  handleMouseLeave = (e) => {
    if (window.innerWidth > 400) {
      var clickToDownloadText = e.target.parentNode.querySelector("h2");
      clickToDownloadText.style.setProperty("opacity", "0");
    }
  };

  render() {
    return (
      <div className="allImageDiv">
        <p className="description">{this.props.description} </p>
        <div className="imageDiv" onClick={this.handleDownload}>
          <h2 className="clickToDownloadText">
            Click in the picture to Download
          </h2>
          <img
            className="img"
            alt="test"
            src={this.props.src}
            onMouseOver={this.handleMouseOver}
            onMouseLeave={this.handleMouseLeave}
          />
        </div>
        <span className="author imageMetaData" id="test">
          by {this.props.author}
        </span>
        <span>
          <img
            className="likeIcon imageMetaData"
            src="https://cdn-icons-png.flaticon.com/512/6444/6444864.png"
            alt="likes"
          />
          {this.props.likes}
        </span>

        <hr />
      </div>
    );
  }
}

export default Image;
