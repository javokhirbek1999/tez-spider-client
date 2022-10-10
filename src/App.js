import React, {  useState } from 'react'
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
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause'
import SearchIcon from '@mui/icons-material/Search';



function App() {

  const [isPlaying, changeAudioStatus] = useState(false);

  const [previous, setPrev] = useState(null)
  
  const audio = new Audio(null)

  const startAudio = (songLink, key) => {
    
    if (previous != null) {
      previous.pause()
    }

    setPrev(audio)
    
    audio.src = songLink

    audio.play()

    changeAudioStatus(true)
  };

  const pauseAudio = (key) => {

    previous.pause()

    changeAudioStatus(false)
  };
 
  const [songsData, setStats] = useState({
    loading: false,
    data: [],
    count: -1,
  });

  const initialData = Object.freeze({
    url: null,
  });

  const [formData, updateFormData] = useState(initialData);

  const handleChange = (e) => {
    updateFormData({
      query: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStats({
      loading: true
    })

    axiosInstance.get('search?query=' + formData.query).then((res) => {
      console.log(res)
      setStats({
        loading: false,
        data: res.data['Data'],
        count: res.data['Data'] != null ? res.data['Data'].length : 0
      })
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
        {!songsData.loading && songsData.count == -1 ? <h1></h1> : songsData.loading && songsData.data == null ?
          <CircularProgress />: !songsData.loading && songsData.count == 0 ? <h1>NOT FOUND</h1> : songsData.data.map((song, index) => {
            return (
              <Card sx={{ display: 'inline-block', marginInline: 1, marginBlock: 1, width: 300, height: 300 }}>
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
                    <IconButton key={index} aria-label="play/pause">
                      {isPlaying ? <PauseIcon sx={{ height: 38, width: 38 }} onClick={() => pauseAudio(index)} />  : <PlayArrowIcon sx={{ height: 38, width: 38 }} onClick={() => startAudio(song.Link, index)} />}
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