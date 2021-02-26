import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Layla', duration: '6:30' },
    { title: 'The Thrill Is Gone', duration: '11:06' },
    { title: 'Money For Nothing', duration: '8:23' },
    { title: 'Stairway To Heaven', duration: '10:59' }
  ];
};

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
