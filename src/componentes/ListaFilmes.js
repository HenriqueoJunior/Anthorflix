import React from "react";

const ListaFilmes = (props) => {
  const ReviewComponent = props.reviewComponent;
  return (
    <div className="row bg-dark">
      {props.movies.map((movie, index) => (
        <div className="image-container d-flex justify-content-start m-5 col-md-2">
          <img src={movie.Poster} alt="movie"></img>
          <div className="overlay d-flex align-items-center justify-content-center" onClick={() => props.handleReviewClick(movie)}> 
            {movie.Title}
            <br />
            {movie.Year}
            <ReviewComponent />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListaFilmes;
