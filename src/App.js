import React, {  useState, useRef, useCallback } from 'react'
import './App.css';
import axiosInstance from './axios';
import { Paper } from '@material-ui/core';
import MusicNote from '@mui/icons-material/MusicNote';
import SurfingIcon from '@mui/icons-material/Surfing';
import { Button, TextField, CircularProgress } from '@material-ui/core';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause'
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SearchIcon from '@mui/icons-material/Search';
import ReactAudioPlayer from 'react-audio-player';


function App() {
  const theme = useTheme();

  const [audioStatus, changeAudioStatus] = useState(false);
  const myRef = useRef();

  const startAudio = () => {
    myRef.current.play();

    changeAudioStatus(true);
  };

  const pauseAudio = () => {
    console.log("here");
    myRef.current.pause();
    changeAudioStatus(false);
  };
 
  const [statsData, ] = useState({
    loading: true,
    data: [],
  });

  const initialData = Object.freeze({
    url: null,
  });

  const [formData, updateFormData] = useState(initialData);
  const [songs, setSongsData] = useState([])

  const handleChange = (e) => {
    updateFormData({
      query: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosInstance.get('?query=' + formData.query).then((res) => {
      console.log(res)
      setSongsData(res.data['Data'])
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
          <SearchIcon />
        </Button>
        </>
      <div id="results-container" component={Paper}>
        <>
        { statsData.loading && songs == null || statsData.loading && songs.length == 0 ?
          <CircularProgress />: songs.map((song, index) => {
            return (
              <Card key={index} sx={{ display: 'inline-block', marginInline: 1, marginBlock: 1, width: 300, height: 300 }}>
                <Box sx={{ display: 'inline-block', flexDirection: 'column' }}>
                  <CardContent sx={{  }}>
                    <Typography component="div" variant="h6">
                      {song.Subtitle.split("-")[song.Subtitle.split("-").length-1].substr(0,20)}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                      {song.Title.split('-')[0].substr(0,30)}
                    </Typography>
                  </CardContent>
                  <Box sx={{ display: 'inline-block', alignItems: 'center', pl: 1, pb: 1 }}>
                    <IconButton aria-label="play/pause">
                      <audio 
                        ref={myRef}
                        src={song.Link} 
                      />
                      {audioStatus ? (<PauseIcon sx={{ height: 38, width: 38 }} onClick={() => pauseAudio} />)  : (<PlayArrowIcon sx={{ height: 38, width: 38 }} onClikc={() => startAudio} />)}
                     </IconButton>
                  </Box>
                </Box>
                <CardMedia
                  component="img"
                  sx={{ width: 300, height: 150 }}
                  image="https://freewareshome.com/wp-content/uploads/2022/08/apple-music-4d84eb1deedb9217bf940603688603b0.png"
                  alt={song.Subtitle}
                />
              </Card>
            );
      }) 
        }
        </>
      </div>
    </div>
  );
}

export default App;