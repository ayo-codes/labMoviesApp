// import React from "react";
// import { createRoot } from "react-dom/client";
// // import HomePage from "./pages/homePage"; // commented out in lab 1 
// import MovieDetailsPage from './pages/movieDetailsPage'

// import sample from './stories/sampleData'

// const movies = [sample, sample, sample, sample, sample, sample, sample];

// const images = [
//   "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
//   "/v1QQKq8M0fWxMgSdGOX1aCv8qMB.jpg",
//   "/2iGN0aKHJYD0xQydlfuCUAcgNbO.jpg",
//   "/rjBwhsOzHKUw2NIOrE7aMqjfe6s.jpg",
// ]

// // commented out in lab 1 and replaced with the one below it 
// // const App = () => {
// //   return (
// //       <HomePage movies={movies} />
// //   );
// // };

// const App = () => {
//   return (
//     <MovieDetailsPage movie={sample} images={images} />
//   );
// };


// const rootElement = createRoot(document.getElementById("root"));
// rootElement.render(<App />);


import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes , Link } from "react-router-dom"; // added link 
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";

const App = () => {
  return (
    <BrowserRouter>
          <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies/favourites">Favourites</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/movies/favourites" element={<FavouriteMoviesPage />}/> {/* added new */}
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/reviews/:id" element={<MovieReviewPage/>} /> {/* added in lab 3 */}
      </Routes>
    </BrowserRouter>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
