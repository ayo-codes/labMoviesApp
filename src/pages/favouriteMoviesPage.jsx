import React , { useContext} from "react"; // added useContext in lab4.3
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext"; // added in lab4.3
import { useQueries } from "react-query"; // added in lab4.3
import { getMovie } from "../api/tmdb-api"; // added in lab4.3
import Spinner from "../components/spinner"; // added in lab4.3
import RemoveFromFavouritesIcon from "../components/cardIcons/removeFromFavourites";
import WriteReviewIcon from "../components/cardIcons/writeReview";

const FavouriteMoviesPage = (props) => {
  const { favourites: movieIds } = useContext(MoviesContext);

  // Create an array of queries and run them in parallel.
  const favouriteMovieQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteMovieQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const movies = favouriteMovieQueries.map((q) => q.data);

// const toDo = () => true; // removed in lab4.4 

// removed in lab 4.3 
// const FavouriteMoviesPage = (props) => {
//   const toDo = () => true;
//   // Get movies from local storage.
//   const movies = JSON.parse(localStorage.getItem("favourites")); 

  return (
    <PageTemplate
      title="Favourite Movies"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromFavouritesIcon movie={movie} />
            <WriteReviewIcon movie={movie} />
          </>
        );
      }}
      // selectFavourite={toDo} // removed in lab 4.4 
    />
  );
};

export default FavouriteMoviesPage;
