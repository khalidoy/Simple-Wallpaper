import React from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import Button from "./Button";
import "./App.css";
import Image from "./Image";
import CategorieBar from "./CategorieBar";

class App extends React.Component {
  state = {
    categories: [
      {
        name: "cars",
        imghref: "https://i.insider.com/592f4169b74af41b008b5977?width=700",
      },
      {
        name: "nature",
        imghref:
          "https://img.freepik.com/photos-gratuite/prise-vue-au-grand-angle-seul-arbre-poussant-sous-ciel-assombri-pendant-coucher-soleil-entoure-herbe_181624-22807.jpg",
      },
      { name: "art", imghref: "https://wallpaperaccess.com/full/1151322.jpg" },
      {
        name: "android wallpapers",
        imghref:
          "https://images.unsplash.com/photo-1492760864391-753aaae87234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "color wallpaper",
        imghref:
          "https://media.istockphoto.com/photos/colored-powder-explosion-on-white-background-picture-id1132442970?b=1&k=20&m=1132442970&s=170667a&w=0&h=qZU1t7UPVUZanRUaPIrTa0IJejHGrNQldpWTl_v92M0=",
      },
      {
        name: "Hd company wallpaper",
        imghref:
          "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "animals",
        imghref:
          "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "cool wallpapers",
        imghref:
          "https://media.istockphoto.com/photos/circle-audio-wave-picture-id1305272283?b=1&k=20&m=1305272283&s=170667a&w=0&h=D0Xv0LkCtWtWGGCJSRtfNYc3PxylaSFi_VS1GMhcduk=",
      },
      {
        name: "HD awesome wallpapers",
        imghref:
          "https://images.unsplash.com/photo-1551505593-8b841137e9ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "desktop wallpapers",
        imghref:
          "https://images.unsplash.com/photo-1431440869543-efaf3388c585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "iphone wallpaper",
        imghref:
          "https://images.unsplash.com/photo-1547496832-84e64458210a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "space",
        imghref:
          "https://media.istockphoto.com/photos/background-of-galaxy-and-stars-picture-id1035676256?b=1&k=20&m=1035676256&s=170667a&w=0&h=NOtiiFfDhhUhZgQ4wZmHPXxHvt3RFVD-lTmnWCeyIG4=",
      },
    ],
    searchedValue: "",
    listOfImageSources: [],
    title: "",
    mainQuery: "",
    totalResults: 0,
    totalPages: 0,
    pageIncrementer: 1,
    apiUrlCall:
      "https://api.unsplash.com/search/photos?client_id=WVMhgChtZLtfoKzyyOcdoIljo-qswtWcg7vPYCq0R-A&page=1&per_page=30&query=",
  };

  componentDidMount = () => {
    var myfn = this.getJsonListOfImages;
    var input = document.getElementById("myInput");
    input.addEventListener("keyup", function (e) {
      if (e.code === "Enter") {
        myfn(input.value);
      }
    });
  };

  getJsonListOfImages = async (query) => {
    let res = await await (await axios.get(this.state.apiUrlCall + query)).data;
    console.log(res);
    this.setState({
      listOfImageSources: res.results,
      mainQuery: query,
      pageIncrementer: 1,
      title:
        "showing " +
        res.total +
        " results of " +
        query +
        " ( " +
        res.total_pages +
        "pages ) (page 1)",
      totalResults: res.total,
      totalPages: res.total_pages,
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

  handleNextPage = async () => {
    if (this.state.pageIncrementer < this.state.totalPages) {
      var nextPage = this.state.pageIncrementer + 1;
      var newApiUrl =
        "https://api.unsplash.com/search/photos?client_id=WVMhgChtZLtfoKzyyOcdoIljo-qswtWcg7vPYCq0R-A&page=" +
        nextPage +
        "&per_page=30&query=" +
        this.state.mainQuery;

      let res = await await (await axios.get(newApiUrl)).data;
      this.setState({
        listOfImageSources: res.results,
        pageIncrementer: nextPage,
        title:
          "showing " +
          res.total +
          " results of " +
          this.state.mainQuery +
          " ( " +
          res.total_pages +
          "pages ) (page " +
          nextPage +
          ")",
      });
      var Y = document.getElementById("titleOfSearch").offsetTop;
      window.scrollTo(0, Y);
    } else {
      this.setState({ pageIncrementer: 0 });
    }
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
        {/* //////////////////////////////// header end and start of the input ////////////////////////////////////////////////*/}
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
          handleClick={() => this.getJsonListOfImages(this.state.searchedValue)}
        />
        <br />
        {/* //////////////////////////////// start of categorie CARDS  ////////////////////////////////////////////////*/}
        <hr />
        <div className="app">
          <MovieCard
            data={this.state.categories}
            handleClick={this.getJsonListOfImages}
          />
        </div>
        {/* //////////////////////////////// title of search  ////////////////////////////////////////////////*/}
        <h1 id="titleOfSearch">{this.state.title}</h1>
        {/* //////////////////////////////// loop that generate images ////////////////////////////////////////////////*/}
        {this.state.listOfImageSources.map((imageObj) => {
          let imgHref = imageObj.urls.regular;
          let downloadLink = imageObj.links.html + "/download?force=true";

          return (
            <div>
              <Image src={imgHref} download={downloadLink} />
            </div>
          );
        })}
        {/* //////////////////////////////// scroll up button ////////////////////////////////////////////////*/}
        <button className="UpBtn" onClick={this.handleUpClick}>
          Scroll Up
        </button>
        <button className="UpBtn" onClick={this.handleNextPage}>
          next page
        </button>
      </div>
    );
  }
}

export default App;
