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
        name: "Cartoon",
        imghref:
          "https://images.unsplash.com/photo-1620336655055-088d06e36bf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNhcnRvb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },

      {
        name: "Nature",
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
        name: "texture and patterns wallpapers",
        imghref:
          "https://images.unsplash.com/photo-1647092076255-6c9e7b773ea2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDYzfGlVSXNuVnRqQjBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "backrounds",
        imghref:
          "https://images.unsplash.com/photo-1499088513455-78ed88b7a5b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "color wallpaper",
        imghref:
          "https://media.istockphoto.com/photos/colored-powder-explosion-on-white-background-picture-id1132442970?b=1&k=20&m=1132442970&s=170667a&w=0&h=qZU1t7UPVUZanRUaPIrTa0IJejHGrNQldpWTl_v92M0=",
      },
      {
        name: "3D render",
        imghref:
          "https://images.unsplash.com/photo-1647351408678-7ce4759a9c1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Hd wallpaper",
        imghref:
          "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Black",
        imghref:
          "https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJsYWNrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "cars wallpaper",
        imghref: "https://i.insider.com/592f4169b74af41b008b5977?width=700",
      },
      {
        name: "Red",
        imghref:
          "https://images.unsplash.com/photo-1530128051436-3ab3663a4683?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJlZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Text",
        imghref:
          "https://images.unsplash.com/photo-1554290712-e640351074bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fHRleHR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Food wallpaper",
        imghref:
          "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGZvb2QlMjB3YWxscGFwZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Blur wallpaper",
        imghref:
          "https://images.unsplash.com/photo-1517842187497-033b8b8cea1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Ymx1ciUyMHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Quotes wallpaper",
        imghref:
          "https://images.unsplash.com/photo-1543616991-75a2c125ff5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHF1b3RlcyUyMHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "indie wallpaper",
        imghref:
          "https://images.unsplash.com/photo-1529912626516-e58b23f44f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTV8fGluZGllJTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
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
        name: "wallpapers",
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
      {
        name: "poster",
        imghref:
          "https://images.unsplash.com/photo-1588438621836-9d7f88b0cd96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHBvc3RlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
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

  handlePreviousPage = async () => {
    if (this.state.pageIncrementer > 1) {
      var nextPage = this.state.pageIncrementer - 1;
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
        <br />
        <br />
        <a
          className="enjoy"
          href="https://khalidoy.github.io/Simple-Wallpaper/"
          onClick={(evt) => {
            evt.preventDefault();
            evt.target.innerHTML = "copied to clipboard !";
            navigator.clipboard
              .writeText(evt.target.getAttribute("href"))
              .then(() => {
                console.log("copied");
              });
          }}
        >
          Click here
        </a>
        <br />
        <br />
        <p>to share this website if you like</p>
        {/* //////////////////////////////// loop that generate images ////////////////////////////////////////////////*/}
        {this.state.listOfImageSources.map((imageObj) => {
          let imgHref = imageObj.urls.regular;
          let downloadLink = imageObj.links.html + "/download?force=true";
          let likes = imageObj.likes;
          let author = imageObj.user.name;

          return (
            <div>
              <Image
                src={imgHref}
                download={downloadLink}
                likes={likes}
                author={author}
              />
            </div>
          );
        })}
        <br />
        {/* //////////////////////////////// prev page button ////////////////////////////////////////////////*/}
        <button className="UpBtn" onClick={this.handlePreviousPage}>
          Prev page
        </button>
        {/* //////////////////////////////// scroll up button ////////////////////////////////////////////////*/}
        <button className="UpBtn" onClick={this.handleUpClick}>
          Scroll Up
        </button>
        {/* //////////////////////////////// next page button ////////////////////////////////////////////////*/}
        <button className="UpBtn" onClick={this.handleNextPage}>
          Next page
        </button>
      </div>
    );
  }
}

export default App;
