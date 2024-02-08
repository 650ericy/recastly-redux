import React, { useState, useEffect } from 'react';

//replaced with containers:
import VideoListContainer from '../containers/VideoListContainer';
import VideoPlayerContainer from '../containers/VideoPlayerContainer';
import SearchContainer from '../containers/SearchContainer';

function App({ API_KEY, searchYouTube }) {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [videos, setVideos] = useState([])

  const handleVideoListEntryTitleClick = (video) => {
    setCurrentVideo(video);
  }

  const getYouTubeVideos = (query) => {
    var options = {
      key: API_KEY,
      query: query
    };

    searchYouTube(options, (videos) => {
      setVideos(videos);
      setCurrentVideo(videos[0])
    });
  }

   useEffect(function () {
    getYouTubeVideos('react tutorials');
  }, []);

  //TODO: swap out the React components below for the container components
  //  you wrote in the 'containers' directory.

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 col-md-offset-3">
          <SearchContainer/>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayerContainer/>
        </div>
        <div className="col-md-5">
          <VideoListContainer
          />
        </div>
      </div>
    </div>
  );
}

export default App;
