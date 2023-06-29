import React from "react";
import { createRoot } from "react-dom/client";
// import HomePage from "./pages/homePage"; // commented out in lab 1 
import MovieDetailsPage from './pages/movieDetailsPage'

import sample from './stories/sampleData'

const movies = [sample, sample, sample, sample, sample, sample, sample];

const images = [
  "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
  "/v1QQKq8M0fWxMgSdGOX1aCv8qMB.jpg",
  "/2iGN0aKHJYD0xQydlfuCUAcgNbO.jpg",
  "/rjBwhsOzHKUw2NIOrE7aMqjfe6s.jpg",
]

// commented out in lab 1 and replaced with the one below it 
// const App = () => {
//   return (
//       <HomePage movies={movies} />
//   );
// };

const App = () => {
  return (
    <MovieDetailsPage movie={sample} images={images} />
  );
};


const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
