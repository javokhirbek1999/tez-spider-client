import React, {  useState } from 'react'
import './App.css';
import axiosInstance from './axios';
import {  Paper } from '@material-ui/core';
// import { Link as MatUIlink } from '@material-ui/core';
// import { NavLink } from 'react-router-dom';
import MusicNote from '@mui/icons-material/MusicNote';
import SurfingIcon from '@mui/icons-material/Surfing';
import { Button, TextField, CircularProgress } from '@material-ui/core';



function App() {


  const [statsData, ] = useState({
    loading: true,
    data: [],
  });

  const initialData = Object.freeze({
    url: null,
  });

  const [formData, updateFormData] = useState(initialData);
  const [shortURL, setShortURL] = useState("")

  const handleChange = (e) => {
    updateFormData({
      url: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosInstance.post('urls/', {
      url: formData.url,
    }).then((res) => {
      setShortURL(res.data.shortURL)
    });
  }

  return (
    <div className="App">
        <> 
        <h1>Listen <MusicNote/> while surfing <SurfingIcon/></h1>
        <TextField id="outlined-basic" label="Search Music/Artist" variant="outlined" onChange={handleChange}/>
        <Button 
          href="#"
          color="primary"
          variant="contained"
          id="url-button"
          type="submit"
          onClick={handleSubmit}
        >
          Go
        </Button>
        </>
      <div id="results-container" component={Paper}>
        <>
        { statsData.loading && shortURL === ""?
          <CircularProgress />: <a href={shortURL} target="_blank" rel="noreferrer"><h1>{shortURL.substr(8,)}</h1></a>
        }
        </>
      </div>

    </div>
  );
}

export default App;