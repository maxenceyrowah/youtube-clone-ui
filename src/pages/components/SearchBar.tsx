import * as React from "react";
import { IconButton, InputBase, Divider, Paper, Box } from "@material-ui/core";
import { Mic, Search } from "@material-ui/icons";

const SearchBar: React.FC = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Paper
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 500,
          height: 30,
          borderRadius: "0px",
          boxShadow: 0,
          m: "auto"
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Rechercher"
          inputProps={{ "aria-label": "search on youtube video" }}
        />
        <Divider sx={{ height: 30, m: 0.5 }} orientation="vertical" />
        <IconButton sx={{ p: "10px" }} aria-label="search">
          <Search />
        </IconButton>
      </Paper>
      <IconButton sx={{ ml: "10px" }}>
        <Mic />
      </IconButton>
    </Box>
  );
};

export default SearchBar;
