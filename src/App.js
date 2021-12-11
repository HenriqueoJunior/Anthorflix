import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ListaFilmes from "./componentes/ListaFilmes";
import Cabecalho from "./componentes/Cabecalho";
import CampoPesquisa from "./componentes/CampoPesquisa";
import AddReviews from "./componentes/AddReviews";
import Filmes from "./componentes/Filmes";
import RemoveReviews from "./componentes/RemoveReviews";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [reviews, setReviews] = useState([]);

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=762032d5`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  const addFilmeReview = (movie) => {
    const newListReview = [...reviews, movie];
    setReviews(newListReview);
  };

  const removeFilmeReview = (movie) => {
    const newListReview = reviews.filter(
      (review) => review.imdbID !== movie.imdbID
    );

    setReviews(newListReview);
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="container-fluid anthor-prime bg-light ">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <Cabecalho />
        <CampoPesquisa
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
      <ListaFilmes
        movies={movies}
        reviewComponent={AddReviews}
        handleReviewClick={addFilmeReview}
      />

      <div className="row">
        <Filmes
          movies={reviews}
          reviewComponent={AddReviews}
          handleReviewClick={removeFilmeReview}
          reviewComponent={RemoveReviews}
        />
      </div>
    </div>
  );
};

export default App;
