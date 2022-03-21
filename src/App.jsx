import React from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import Button from "./Button";
import "./App.css";
import Image from "./Image";
import CategorieBar from "./CategorieBar";

class App extends React.Component {
  state = {
    list: [],
    searchedValue: "",
    listOfImageSources: [],
    DownloadLink: "",
    title: "",
    domainName: "https://fast-ocean-30157.herokuapp.com/",
  };

  componentDidMount = () => {
    this.getJsonList("latest");
    var myfn = this.getJsonList;
    var input = document.getElementById("myInput");
    input.addEventListener("keyup", function (e) {
      if (e.code === "Enter") {
        myfn(input.value);
      }
    });
  };

  getJsonList = async (query) => {
    let res = await (await axios.get(this.state.domainName + query)).data;
    this.setState({ list: res });
  };

  getJsonListOfImages = async (query) => {
    let res = await (
      await axios.get(this.state.domainName + "clickedDiv=" + query)
    ).data;
    this.setState({
      listOfImageSources: res,
      DownloadLink: "https://wallpapercave.com/download" + query + "-",
      title: query,
    });
    var Y = document.getElementById("titleOfSearch").offsetTop;
    window.scrollTo(0, Y);
  };

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ searchedValue: value });
  };
  handleUpClick = () => {
    window.scroll(0, 0);
  };
  render() {
    return (
      <div>
        <div className="header">
          <p className="about">by khalid yakhloufi</p>
          <div className="contact" id="social-platforms">
            <a
              class="btn btn-icon btn-facebook"
              href="https://fr-fr.facebook.com/yakhloufi.khalid"
            >
              <i class="fa fa-facebook"></i>
              <span>Facebook</span>
            </a>
            <a
              class="btn btn-icon btn-twitter"
              href="https://fr-fr.facebook.com/yakhloufi.khalid"
            >
              <i class="fa fa-twitter"></i>
              <span>Twitter</span>
            </a>
            <a
              class="btn btn-icon btn-googleplus"
              href="https://fr-fr.facebook.com/yakhloufi.khalid"
            >
              <i class="fa fa-google-plus"></i>
              <span>Google+</span>
            </a>
            <a
              class="btn btn-icon btn-pinterest"
              href="https://fr-fr.facebook.com/yakhloufi.khalid"
            >
              <i class="fa fa-pinterest"></i>
              <span>Pinterest</span>
            </a>
          </div>
        </div>

        <img
          className="websiteTitle"
          src="https://images.cooltext.com/5590762.png"
          width="738"
          height="104"
          alt="Simple Wallpaper"
        />

        <br />

        <br />
        <input
          type="text"
          id="myInput"
          className="search__input"
          placeholder="Search"
          onChange={this.handleChange}
        />
        <br />
        <Button
          handleClick={this.getJsonList}
          query={this.state.searchedValue}
        />
        <br />
        <CategorieBar
          categorieName="cars"
          onClick={() => this.getJsonList("cars")}
        />
        <CategorieBar
          categorieName="animals"
          onClick={() => {
            this.getJsonList("animals");
          }}
        />
        <CategorieBar
          categorieName="anime"
          onClick={() => this.getJsonList("anim")}
        />
        <CategorieBar
          categorieName="brands"
          onClick={() => this.getJsonList("brands")}
        />
        <CategorieBar
          categorieName="cartoons"
          onClick={() => this.getJsonList("cartoons")}
        />
        <CategorieBar
          categorieName="celebrities"
          z
          onClick={() => this.getJsonList("celebrities")}
        />
        <CategorieBar
          categorieName="devices"
          onClick={() => this.getJsonList("devices")}
        />
        <CategorieBar
          categorieName="games"
          onClick={() => this.getJsonList("games")}
        />
        <CategorieBar
          categorieName="movies"
          onClick={() => this.getJsonList("movies")}
        />
        <CategorieBar
          categorieName="music"
          onClick={() => this.getJsonList("music")}
        />
        <CategorieBar
          categorieName="geography"
          onClick={() => this.getJsonList("geography")}
        />
        <CategorieBar
          categorieName="art"
          onClick={() => this.getJsonList("art")}
        />
        <CategorieBar
          categorieName="nature"
          onClick={() => this.getJsonList("nature")}
        />
        <CategorieBar
          categorieName="other"
          onClick={() => this.getJsonList("other")}
        />
        <CategorieBar
          categorieName="pokemon"
          onClick={() => this.getJsonList("pokemon")}
        />
        <CategorieBar
          categorieName="art"
          onClick={() => this.getJsonList("art")}
        />
        <CategorieBar
          categorieName="4K"
          onClick={() => this.getJsonList("4K")}
        />
        <CategorieBar
          categorieName="religion"
          onClick={() => this.getJsonList("religion")}
        />
        <CategorieBar
          categorieName="resolutions"
          onClick={() => this.getJsonList("resolutions")}
        />
        <CategorieBar
          categorieName="space"
          onClick={() => this.getJsonList("space")}
        />
        <CategorieBar
          categorieName="sports"
          onClick={() => this.getJsonList("sports")}
        />
        <CategorieBar
          categorieName="superheroes"
          onClick={() => this.getJsonList("superheroes")}
        />
        <CategorieBar
          categorieName="tvShows"
          onClick={() => this.getJsonList("tvshows")}
        />
        <CategorieBar
          categorieName="iphone"
          onClick={() => this.getJsonList("iphone")}
        />
        <hr />
        <div className="app">
          <MovieCard
            data={this.state.list}
            handleClick={this.getJsonListOfImages}
          />
        </div>
        <h1 id="titleOfSearch">
          {this.state.title.replace(/-/g, " ").replace("/", "")}{" "}
        </h1>
        {this.state.listOfImageSources.map((image) => {
          let link = image.replace("https://wallpapercave.com/w/", "");
          link = link.replace(".jpg", "");
          return (
            <div>
              <Image src={image} download={this.state.DownloadLink + link} />
            </div>
          );
        })}
        <button className="UpBtn" onClick={this.handleUpClick}>
          Scroll Up
        </button>
      </div>
    );
  }
}

export default App;
