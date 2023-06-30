import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getUpcomingMovies } from "../api/tmdb-api";
import { useQuery } from "react-query"; // added in lab 4.2 for caching
import Spinner from "../components/spinner";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites"; // added in lab4.4 

const UpcomingPage = (props) => {
  const { data, error, isLoading, isError } = useQuery("upcoming", getUpcomingMovies);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data ? data.results : [];

  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}
      action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />  // render prop
      }}
    />
  );
};
export default UpcomingPage;

// old version of upcomingPage
// import React, { useState, useEffect } from "react";
// import PageTemplate from '../components/templateMovieListPage';
// import { getUpcomingMovies } from "../api/tmdb-api";

// const UpcomingPage = (props) => {
//   const [movies, setMovies] = useState([]);
//   const favourites = movies.filter(m => m.favourite)
//   localStorage.setItem('favourites', JSON.stringify(favourites))

//   const addToFavourites = (movieId) => {
//     const updatedMovies = movies.map((m) =>
//       m.id === movieId ? { ...m, favourite: true } : m
//     );
//     setMovies(updatedMovies);
//   };

//   useEffect(() => {
//     getUpcomingMovies().then(movies => {
//       setMovies(movies);
//     });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <PageTemplate
//       title='Upcoming Movies'
//       movies={movies}
//       selectFavourite={addToFavourites}
//     />
//   );
// };
// export default UpcomingPage;


