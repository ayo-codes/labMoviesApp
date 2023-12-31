import { Link } from "react-router-dom"; // manages the links
import React , { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
// import IconButton from "@mui/material/IconButton"; // removed in lab 4.4
import img from '../../images/film-poster-placeholder.png'
import Avatar  from "@mui/material/Avatar"; // added during add to favourites
import { MoviesContext } from "../../contexts/moviesContext";

const styles = {
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

// added in lab 4.3 for context 
export default function MovieCard({ movie , action }) {      // Destructure props added action in lab 4.4
  const { favourites, addToFavourites ,addToPlaylists , myPlaylistMovies } = useContext(MoviesContext);

  if (favourites.find((id) => id === movie.id)) {
    movie.favourite = true;
  } else {
    movie.favourite = false
  }

  // if (myPlaylistMovies.find((id) => id === movie.id)) {
  //   movie.myPlaylistMovies = true;
  // } else {
  //   movie.myPlaylistMovies = false
  // }

  //   removed in lab 4.4 
  const handleAddToPlaylists = (e) => {
    e.preventDefault();
    addToPlaylists(movie);
  };


  // removed in lab 4.4 
  // const handleAddToFavourite = (e) => {
  //   e.preventDefault();
  //   addToFavourites(movie);
  // };

// removed in lab 4.3 for global context
// export default function MovieCard(props) {
//   const movie = props.movie;

//   // added an event handler to help with adding favourites
//   const handleAddToFavourite = (e) => {
//     e.preventDefault();
//     props.selectFavourite(movie.id);
//   };

  return (
    <Card sx={styles.card}>
      {/* line below modified in lab 2 add to favourites */}
      {/* <CardHeader sx={styles.header} title={movie.title} /> */}
      <CardHeader
      sx={styles.header}
      avatar={
        movie.favourite ? (
          <Avatar sx={styles.avatar}>
            <FavoriteIcon />
          </Avatar>
        ) : null
      }
      title={
        <Typography variant="h5" component="p">
          {movie.title}{" "}
        </Typography>
      }
    />

      <CardMedia
        sx={styles.media}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {movie.release_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {movie.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {/* added the event handler to the onClick */}
        {/* removed iconButton in lab4.4 and added in action */}
        {/* <IconButton aria-label="add to favorites" onClick={handleAddToFavourite}>
          <FavoriteIcon color="primary" fontSize="large" />
        </IconButton> */}
        {action(movie)}
        <Link to={`/movies/${movie.id}`}> {/*wrapped in internal link in lab 2*/} 
        <Button variant="outlined" size="medium" color="primary">
          More Info ...
        </Button>
        </Link>

      </CardActions>
    </Card>
  );
}
