import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getMovies } from "../api/tmdb-api";
import { useQuery } from "react-query"; // added in lab 4.2 for caching
import Spinner from "../components/spinner";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites"; // added in lab4.4 

const HomePage = (props) => {
  const { data, error, isLoading, isError } = useQuery("discover", getMovies);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data ? data.results : [];


  // const [movies, setMovies] = useState([]); // removed in lab 4.2


  // Redundant, but necessary to avoid app crashing. removed in lab 4.4
  // const favourites = movies.filter(m => m.favourite)
  // localStorage.setItem('favourites', JSON.stringify(favourites))

  // const addToFavourites = (movieId) => true; // true added in lab 4.2 to allow for caching
  
  // removed in lab 4.2 to allow for caching
  // {
  //   const updatedMovies = movies.map((m) =>
  //     m.id === movieId ? { ...m, favourite: true } : m
  //   );
  //   setMovies(updatedMovies);
  // };

  // useEffect(() => {
  //   getMovies().then(movies => {
  //     setMovies(movies);
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // old method before separation of concerns
  // useEffect(() => {
  //   fetch(
  //     `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&page=1`
  //   )
  //     .then((res) => res.json())
  //     .then((json) => {
  //       return json.results;
  //     })
  //     .then((movies) => {
  //       setMovies(movies);
  //     });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <PageTemplate
      title='Discover Movies'
      movies={movies}
      action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />  // render prop
      }}
      // selectFavourite={addToFavourites} // removed in lab 4.4
    />
  );
};
export default HomePage;

// old code before refactoring , kept in for learning purposes lab 2
// import React , {useState, useEffect } from "react";
// import Header from "../components/headerMovieList";
// import FilterCard from "../components/filterMoviesCard";
// import Grid from "@mui/material/Grid";
// import MovieList from "../components/movieList";
// import Fab from "@mui/material/Fab";
// import Drawer from "@mui/material/Drawer";

// const styles = {
//   root: {
//     padding: "20px",
//   },
//   fab: {
//     marginTop: 8,
//     position: "fixed",
//     top: 2,
//     right: 2,
//   },
// };

// // removed in lab 2 
// // const MovieListPage = (props) => {
// //   const movies = props.movies;

// const MovieListPage = (props) => {
//   const [movies, setMovies] = useState([]);
//   const [titleFilter, setTitleFilter] = useState("");
//   const [genreFilter, setGenreFilter] = useState("0");
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const genreId = Number(genreFilter);

//   let displayedMovies = movies
//     .filter((m) => {
//       return m.title.toLowerCase().search(titleFilter.toLowerCase()) !== -1;
//     })
//     .filter((m) => {
//       return genreId > 0 ? m.genre_ids.includes(genreId) : true;
//     });

//   const handleChange = (type, value) => {
//     if (type === "title") setTitleFilter(value);
//     else setGenreFilter(value);
//   };


//   // New function to allow for adding favourite movies
//   const addToFavourites = (movieId) => {
//     const updatedMovies = movies.map((m) =>
//       m.id === movieId ? { ...m, favourite: true } : m
//     );
//     setMovies(updatedMovies);
//   };

//   useEffect(() => {
//     fetch(
//       `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&page=1`
//     )
//       .then((res) => res.json())
//       .then((json) => {
//         console.log(json);
//         return json.results;
//       })
//       .then((movies) => {
//         setMovies(movies);
//       });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
//   return (
//     <>
//     <Grid container sx={styles.root}>
//       <Grid item xs={12}>
//         <Header title={"Home Page"} />
//       </Grid>
//       <Grid item container spacing={5}>
//         {/* <MovieList movies={movies}></MovieList> */}
//         {/* added selectFavourite in lab 2 for favourite movies */}
//         <MovieList movies={displayedMovies} selectFavourite={addToFavourites} ></MovieList> 
//       </Grid>
//     </Grid>
//     <Fab
//           color="secondary"
//           variant="extended"
//           onClick={() => setDrawerOpen(true)}
//           sx={styles.fab}
//         >
//           Filter
//       </Fab>
//       <Drawer
//         anchor="left"
//         open={drawerOpen}
//         onClose={() => setDrawerOpen(false)}
//       >
//         <FilterCard
//           onUserInput={handleChange}
//           titleFilter={titleFilter}
//           genreFilter={genreFilter}
//         />
//       </Drawer>
//     </>
    
//   );
// };
// export default MovieListPage;
