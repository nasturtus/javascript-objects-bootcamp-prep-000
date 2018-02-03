var playlist = {
  mercedes_sosa: 'todo cambio',
  eugenia_leon: 'el presente'
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}