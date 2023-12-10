import React, { useState } from 'react';
import './App.css';
import RegistrationComponent from './RegisterComponent';
import LoginComponent from './LoginComponent';
//import AddComponent from './AddComponent';
//import EditComponent from './EditComponent';
//import DeleteComponent from './DeleteComponent';
import ListComponent from './ListingComponent';

function App() {
  const [username, setUsername] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  //const [songs, setSongs] = useState([]);

  /*const handleSongAddition = (newSong) => {
    //used chatGPT to find this concise way to add new song to the existing song list
    setSongs(prevSongs => [...prevSongs, newSong]);
  }; */

  /*
  const handleSongEdit = (editedSong) => {
    setSongs(prevSongs => prevSongs.map(song => song.id === editedSong.id ? editedSong : song));
  };

  const handleSongDelete = (deletedSongId) => {
    setSongs(prevSongs => prevSongs.filter(song => song.id !== deletedSongId));
  };
  */

  if (!isAuthenticated) {
    return (
      <div className="App">

        <LoginComponent onLogin={(user) => {
          setIsAuthenticated(true);
          setUsername(user.username);
        }} />

        <RegistrationComponent
          onRegister={(user) => {
            setUsername(user.username);
            setIsAuthenticated(true);
          }}
          onError={setErrorMessage}
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    );
  }

  return (
    <div className="App container">
      <header className="App-header mt-4">
        <h1>SongStars</h1>
        {username && <p>Welcome, {username}!</p>}
      </header>

      <ListComponent loggedInUsername={username} />

    </div>
  );
}


export default App;

