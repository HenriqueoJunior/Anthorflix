import React from "react";
import Notas from "./Notas";

const ListaFilmes = (props) => {
  const ReviewComponent = props.reviewComponent;
  return (
    <div>
      <div className="row bg-dark">
        <h4 className="text-light">Salvos</h4>

        {props.movies.map((movie, index) => (
          <div className="image-container d-flex justify-content-start m-5 col-md-5">
            <img src={movie.Poster} alt="movie"></img>
            <div
              className="overlay d-flex align-items-center justify-content-center"
              onClick={() => props.handleReviewClick(movie)}
            >
              {movie.Title}
              <br />
              {movie.Year}
            <ReviewComponent />
            </div>
            <Notas />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaFilmes;
