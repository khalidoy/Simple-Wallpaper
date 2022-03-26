import React, { createElement } from "react";
import "./Image.css";
class Image extends React.Component {
  state = {
    isClickedOnce: 0,
  };

  handleDownload = (e) => {
    if (this.state.isClickedOnce == 0) {
      var parentNode = e.target.parentNode;
      var downloadBtn = document.createElement("a");
      downloadBtn.setAttribute("class", "parentOfdownloadIcon");
      downloadBtn.setAttribute("href", this.props.download);
      var downloadIcon = document.createElement("img");
      downloadIcon.setAttribute(
        "src",
        "https://cdn-icons-png.flaticon.com/512/54/54993.png"
      );
      downloadIcon.setAttribute("class", "downloadIcon");

      downloadBtn.appendChild(downloadIcon);

      parentNode.appendChild(downloadBtn);
      console.log(parentNode);
      this.setState({ isClickedOnce: 1 });
    }
  };

  render() {
    return (
      <div className="allImageDiv">
        <p className="description">{this.props.description} </p>
        <div className="imageDiv" onClick={this.handleDownload}>
          <img className="img" alt="test" src={this.props.src} />
        </div>

        <span className="author imageMetaData" id="test">
          by {this.props.author}
        </span>
        <a
          className="donwloadBTN imageMetaData"
          href={this.props.download}
          target="blank"
        >
          Download
        </a>
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
