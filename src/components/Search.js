import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box } from "@mui/material";

function Searchbar() {
  return (
    <Box
      sx={{
        height: 300,
        width: "100%",
      }}
    >
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} label="freeSolo" />}
      />
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
    </Box>
  );
}

export default Searchbar;

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { ingredient: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
];
