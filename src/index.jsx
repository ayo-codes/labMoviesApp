import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes , Link } from "react-router-dom"; // added link 
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from "./components/siteHeader";
import UpcomingPage from "./pages/upcomingPage";
import { QueryClientProvider, QueryClient } from "react-query"; // added in lab4.2 for caching
import { ReactQueryDevtools } from 'react-query/devtools'; // added in lab4.2 for caching
import MoviesContextProvider from "./contexts/moviesContext"; // added in lab4.3 for contexts
 
// added in lab 4.2 for caching
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});


const App = () => {
  return (
  <QueryClientProvider client={queryClient}>          {/* Added in lab 4.2 for caching */}
    <BrowserRouter>      
         {/* Older site header below removed in lab 3.5 */}
          {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies/favourites">Favourites</Link>
        </li>
      </ul> */}
      <SiteHeader />  {/* New site header added in lab 3.5 */}
        <MoviesContextProvider>
          <Routes>
            <Route path="/movies/favourites" element={<FavouriteMoviesPage />}/> {/* added new */}
            <Route path="/movies/upcoming" element={<UpcomingPage />}/> {/* added new */}
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/reviews/:id" element={<MovieReviewPage/>} /> {/* added in lab 3 */}
          </Routes>
        </MoviesContextProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} /> {/* Added in lab 4.2 for caching */}
  </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);


// old page retained for learning purposes
// import React from "react";
// import { createRoot } from "react-dom/client";
// import HomePage from "./pages/homePage"; // commented out in lab 1 
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