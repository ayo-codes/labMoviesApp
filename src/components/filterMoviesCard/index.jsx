import React from "react"; // removed useEffect and useState in lab 4.2
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SortIcon from '@mui/icons-material/Sort';

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { getGenres } from "../../api/tmdb-api";
import { useQuery } from "react-query"; // added in lab 4.2 for caching
import Spinner from "../spinner";

const styles = {
  root: {
    maxWidth: 345,
  },
  media: { height: 300 },

  formControl: {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
};
// removed in lab 2 
// export default function FilterMoviesCard(props) {
//   const genres = [
//     {id: 1, name: "Animation"},
//     {id: 2, name: "Comedy"},
//     {id: 3, name: "Thriller"}
//   ]

export default function FilterMoviesCard(props) {
  const { data, error, isLoading, isError } = useQuery("genres", getGenres);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const genres = data.genres;
  if (genres[0].name !== "All") {
    genres.unshift({ id: "0", name: "All" });
  }

  const handleUserImput = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); // NEW
  };

  const handleTextChange = (e, props) => {
    handleUserImput(e, "title", e.target.value);
  };

  const handleGenreChange = (e) => {
    handleUserImput(e, "genre", e.target.value);
  };


  // removed in lab 4.2 to allow for caching 
  // const [genres, setGenres] = useState([{ id: '0', name: "All" }])

  // useEffect(() => {
  //   getGenres().then((allGenres) => {
  //     setGenres([genres[0], ...allGenres]);
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])


  // old method before separation of concerns changed in lab 2 
  // useEffect(() => {
  //   fetch(
  //     "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
  //       import.meta.env.VITE_TMDB_KEY
  //   )
  //     .then(res => res.json())
  //     .then(json => {
  //       // console.log(json.genres) 
  //       return json.genres
  //     })
  //     .then(apiGenres => {
  //       setGenres([genres[0], ...apiGenres]);
  //     });
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // removed in lab 4.2 to allow for caching 
  // const handleChange = (e, type, value) => {
  //   e.preventDefault()
  //   props.onUserInput(type, value)
  // }

  // const handleTextChange = e => {
  //   handleChange(e, "title", e.target.value)
  // }

  // const handleGenreChange = e => {
  //   handleChange(e, "genre", e.target.value)
  // };
  return (
    <>
    <Card sx={styles.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <FilterAltIcon fontSize="large" />
          Filter the movies.
        </Typography>
        <TextField
          sx={styles.formControl}
          id="filled-search"
          label="Search field"
          type="search"
          value={props.titleFilter} // added in lab 2
          variant="filled"
          onChange={handleTextChange} // added in lab 2
        />
        <FormControl sx={styles.formControl}>
          <InputLabel id="genre-label">Genre</InputLabel>
          <Select
            labelId="genre-label"
            id="genre-select"
            value={props.genreFilter} // added in lab 2
            onChange={handleGenreChange} // added in lab 2
          >
            {genres.map((genre) => {
              return (
                <MenuItem key={genre.id} value={genre.id}>
                  {genre.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </CardContent>
    </Card>
    <Card sx={styles.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h1">
            <SortIcon fontSize="large" />
            Sort the movies.
          </Typography>
        </CardContent>
      </Card>
      </>
  );
}
