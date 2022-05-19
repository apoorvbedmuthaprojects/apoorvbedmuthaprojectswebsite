import './App.css';
import Video from "./assets/Background.mp4"
import Youtube from "./assets/Subtract.png"
import Spotify from "./assets/Spotify_logo_without_text 1.png"
import { useState } from 'react';
import Content from './Content';
import Sound from 'react-sound';
import BackgroundMusic from "./assets/BackgroundMusic.mp3"
function App() {
  const [currentPage, setPage] = useState("");
  function getPodcastBanner() {
    document.getElementById("Podcast").classList.add("PodcastAnimation");
    setPage("Podcast")
  }
  return (

    <div className='App'>
      <Sound url={BackgroundMusic} autoLoad={true} loop={true} playStatus={'PLAYING'}></Sound>
      <video src={Video} autoPlay loop className='App_backgroundVideo'>
      </video>
      <div className='Banner' id="Podcast" height="100vh">
        <Content content={currentPage}></Content>
      </div>
      <div className='App_content' id="home">
        <div className='App_Title primaryFont'>
          Apoorv Bedmutha
        </div>
        <div className='App_Row'>
          <div className='App_Menu'>
            <div><a href="#home">HOME</a></div>
            <div onClick={getPodcastBanner}>PODCAST</div>
            <div>ABOUT</div>
            <div>YOUTUBE</div>
            <div>BLOGS</div>
            <div>POETRY AND LITERATURE</div>
            <div>WHITE PAPERS</div>
            <div>GITHUB</div>
            <div>PROJECTS</div>
          </div>
          <div className='App_dots'>
            <div className='App_dot'></div>
            <div className='App_dot'></div>
            <div className='App_dot'></div>
            <div className='App_dot'></div>
            <div className='App_dot'></div>
            <div className='App_dot'></div>
            <div className='App_dot'></div>
            <div className='App_dot'></div>
            <div className='App_dot'></div>
            <div className='App_dot'></div>
          </div>
          <div className='App_details'>
            <div className='Details_Head'>New Episode up on Youtube</div>
            <div className='Details_Title'>The Art Of Saying No</div>
            <div className='Details_Brief'>A Brief Introduction to how important is selective participation</div>
            <div className='Details_Logos'>
              <img src={Youtube} alt=""></img>
              <img src={Spotify} className="Details_Logo" alt=""></img>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
