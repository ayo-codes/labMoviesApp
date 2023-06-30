
import React from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movieDetails/";
import TemplateMoviePage from "../components/templateMoviePage";
import useMovie from "../hooks/useMovie"; // added in as custom hooks 

// removed for lab 3 - retained for learning purposes 
// import { getMovie } from "../api/tmdb-api"; removed for custom hooks lab 3.4
// import Grid from "@mui/material/Grid";
// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
// import { getMovie, getMovieImages } from "../api/tmdb-api";
// import MovieHeader from "../components/headerMovie/";

const MovieDetailsPage = (props) => {
  const { id } = useParams();
  const [movie] = useMovie(id); // added in lab 3.4
  // const [movie, setMovie] = useState(null); //  removed due to custom hook of useMovie

  //  useEffect removed due to custom hook of useMovie
  // useEffect(() => {
  //   getMovie(id).then((movie) => {
  //     setMovie(movie);
  //   });
  // }, [id]);

  return (
    <>
      {movie ? (
        <>
          <TemplateMoviePage movie={movie}>
            <MovieDetails movie={movie} />
          </TemplateMoviePage>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MovieDetailsPage;


// removed and replaced with the code above for lab 3 - retained for learning purposes 
// const styles = {
//   imageListRoot: {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "space-around",
//   },
// };

// // removed in lab 2 
// // const MoviePage = (props) => {
// //   const movie = props.movie;
// //   const images = props.images;

// const MoviePage = (props) => {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     getMovie(id).then((movie) => {
//       setMovie(movie);
//     });
//   }, [id]);

//   useEffect(() => {
//     getMovieImages(id).then((images) => {
//       setImages(images);
//     });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);


  // old method before separation of concerns 
  // useEffect(() => {
  //   fetch(
  //     `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
  //   )
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((movie) => {
  //       // console.log(movie)
  //       setMovie(movie);
  //     });
  // }, [id]);

  // useEffect(() => {
  //   fetch(
  //     `https://api.themoviedb.org/3/movie/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
  //   )
  //     .then((res) => res.json())
  //     .then((json) => json.posters)
  //     .then((images) => {
  //       // console,log(images)
  //       setImages(images);
  //     });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

//   return (
//     <>
//       {movie ? (
//         <>
//           <MovieHeader movie={movie} />
//           <Grid container spacing={5} style={{ padding: "15px" }}>
//             <Grid item xs={3}>
//               <div sx={styles.imageListRoot}>
//                 <ImageList cols={1}>
//                   {images.map((image) => (
//                     <ImageListItem
//                       key={image.file_path}
//                       sx={styles.gridListTile}
//                       cols={1}
//                     >
//                       {/* modified in lab 2 */}
//                      {/* <img
//                         src={`https://image.tmdb.org/t/p/w500/${image}`}
//                         alt={'Image alternative'}
//                       />                     */}
//                                 <img
//               src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
//               alt={image.file_path}
//           />
//                     </ImageListItem>
//                   ))}
//                 </ImageList>
//               </div>
//             </Grid>
//             <Grid item xs={9}>
//               <MovieDetails movie={movie} />
//             </Grid>
//           </Grid>
//         </>
//       ) : (
//         <h2>Waiting for API data</h2>
//       )}
//     </>
//   );
// };

// export default MoviePage;
