import { Avatar, Box, Button, Card, CardContent, CardMedia, Container, Paper, Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import YTSearch from "youtube-api-search";
import YouTube from 'react-youtube';

const Home = () => {
  const [video, setVideos] = useState([]);

  useEffect(() => {
    YTSearch(
      { key: process.env.REACT_APP_API_KEY, term: "music" },
      (videos) => {
        console.log('Videos',videos)
        setVideos(videos);
      }
    );
  }, []);
  useState(() => {
    console.log(video);
  }, [video]);
  
  return <Box>
    {
      <Container sx={{width:"1200px"}}>
        <Stack direction="row" gap={1} sx={{flexWrap:'wrap'}}>
      {video.map((item)=>(
        <Card sx={{width:{xs:"40vw",md:'42vw',lg:'25vw'},height:{sm:"36vw",md:'36vw',lg:'23vw'},borderRadius:'10px',
        boxShadow:'0px 0px 0px 0px rgba(0, 0, 0, 0)',bgcolor: "background.default",backgroundColor:'background.default'
        }}>
        <CardMedia component='img' sx={{width:{xs:"40vw",md:'42vw',lg:'25vw'},height:{sm:"22vw",md:'22vw',lg:'13vw'}}}src={item.snippet.thumbnails.default.url}/>
        <CardContent sx={{bgcolor: "background.default"}}>
          <Stack direction="row" gap={1} >
            <Avatar sx={{width: '32px', height: '32px' }}>
              {/* {item.snippet.title[0]} */}
              H
              </Avatar>
              <Box >
                <Typography sx={{fontWeight:'bold'}}>{item.snippet.title}</Typography>
              </Box>
          </Stack>
        </CardContent>
       </Card>
       ))}
       </Stack>
      </Container>
      }
  </Box>;
};

export default Home;
