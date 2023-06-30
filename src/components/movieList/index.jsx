import React from "react";
import Movie from "../movieCard/";
import Grid from "@mui/material/Grid";

const MovieList = ( {movies, action }) => {
  let movieCards = movies.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Movie key={m.id} movie={m} action={action} />
    </Grid>
  ));
// removed in lab 4.4 
// const MovieList = (props) => {
//   let movieCards = props.movies.map((m) => (
//     <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
//       <Movie key={m.id} movie={m} selectFavourite={props.selectFavourite} />
//     </Grid>
//   ));
  return movieCards;
};

export default MovieList;
