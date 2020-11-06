import React from 'react';
import moviePlaceholder from "../images/movie-production.jpg";

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
   
  if (vote >= 8) {
    return 'green';
  } else if(vote >= 6) {
    return "gold"
  } else {
    return "crimson"
  }
}

export default function Movie({title, overview, poster_path,release_date, vote_average}) {
  return (
    <div className="movie">
        <img src={ poster_path ? IMG_PATH + poster_path : moviePlaceholder} alt={title} />
        <div className="movie-info">
          <h3>{title}</h3>
          <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
        </div>
      <div className="movie-overlay">
        <h4>Description:</h4>
        <p>{overview}</p>
        <br />
        <h4>Release:</h4>
        <p>{release_date}</p>
      </div>
    </div>
  );
}
