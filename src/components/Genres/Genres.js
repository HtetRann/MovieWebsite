import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import Chip from '@mui/material/Chip';

const Genres = ({
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    type,
    setPage,
}) => {

  const handleAdd = (genre) => {
      setSelectedGenres([...selectedGenres, genre]);
      setGenres(genres.filter((g) => g.id !== genre.id));
      setPage(1);
    };

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };
  
    const fetchGenres = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
          setGenres(data.genres);
          console.log(setGenres(data.genres));
    };

    useEffect(() => {
      fetchGenres();

      return () =>{
        setGenres({});
      };
    }, []);
    
return (

    
    
    <div style={{ padding: "6px 0" }}>
      
          <Chip
          style={{ margin: 2 }}
          label={genres.name}
          key={genres.id}
          color="primary"
          clickable
          size="small"
          onDelete={() => handleRemove(genres)}
        />
      
        <Chip
          style={{ margin: 2 }}
          label={genres.name}
          key={genres.id}
          clickable
          size="small"
          onClick={() => handleAdd(genres)}
      />
    </div>
  );
};

export default Genres;