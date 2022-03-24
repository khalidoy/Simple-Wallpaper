import React from "react";
import "./MovieCard.css";

class MovieCard extends React.Component {
  render() {
    return (
      <div>
        <tr>
          {this.props.data.map((categorieDiv, id) => (
            <div className="table">
              <td key={id}>
                <button
                  onClick={() => {
                    this.props.handleClick(categorieDiv.name);
                  }}
                >
                  <div class="myCard" key={id}>
                    <h3 class="title">{categorieDiv.name} </h3>
                    <img
                      class="categorieDivIMG"
                      src={categorieDiv.imghref}
                      alt="loading ..."
                    />
                  </div>
                </button>
              </td>
            </div>
          ))}
        </tr>
      </div>
    );
  }
}

export default MovieCard;
