

import { Button, TextField, ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import { useEffect, useState } from "react";
import "./Search.css";

const Search = () => {
  const [type, setType] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();


  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });

  useEffect(() => {
    window.scroll(0, 0);
    // fetchSearch();
    // eslint-disable-next-line
  }, [type, page]);

  return (
    <div>
      <div className='search'>
        <ThemeProvider theme={darkTheme}>
        <TextField
            style={{ flex: 1 }}
            className="searchBox"
            label="Search"
            variant="filled"
            // onChange={(e) => setSearchText(e.target.value)}
          />
          <Button
            variant="contained"
            style={{ marginLeft: 10 }}
          >
            <SearchIcon fontSize="large" />
          </Button>
        </ThemeProvider>
        
      </div>
    </div>
    
  )
}

export default Search