import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

var VideoListContainer = (state) => {
  return {
    videos: state.videoList
  };
};

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

const mapDispatchToProps = (dispatch) => {
  return { handleVideoListEntryTitleClick: (video) => dispatch(changeVideo(video)) };
};
export default connect(VideoListContainer, mapDispatchToProps)(VideoList);
