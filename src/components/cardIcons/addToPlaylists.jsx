import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAdd  from "@mui/icons-material/PlaylistAdd";

const AddToPlaylistIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const onUserChoice = (e) => {
    e.preventDefault();
    context.addToPlaylists(movie);
    console.log(movie);
  };
  return (
    <IconButton aria-label="add to playlist" onClick={onUserChoice}>
      <PlaylistAdd color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToPlaylistIcon;
