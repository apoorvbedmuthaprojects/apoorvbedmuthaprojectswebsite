import './App.css';
import Video from "./assets/Background.mp4"
import Youtube from "./assets/Subtract.png"
import Spotify from "./assets/Spotify_logo_without_text 1.png"
import { useState } from 'react';
import Content from './Content';
import Sound from 'react-sound';
import BackgroundMusic from "./assets/BackgroundMusic.mp3"
import Podcast from './Podcast';
function App() {
  const [currentPage, setPage] = useState("");
  function getBanner(page) {
    document.getElementById("Banner").classList.remove("AntiAnimation");
    document.getElementById("Banner").classList.add("Animation");
    setPage(page)
  }
  function backToHome(page){
    document.getElementById("Banner").classList.remove("Animation");
    
    document.getElementById("Banner").classList.add("AntiAnimation");
    setTimeout(()=>setPage(""),4000)
  }
  return (

    <div className='App'>
      <Sound url={BackgroundMusic} autoLoad={true} loop={true} playStatus={'PLAYING'}></Sound>
      <video src={Video} autoPlay loop className='App_backgroundVideo'>
      </video>
      <div className='Banner' id="Banner" height="100vh">
        <Content content={currentPage} backToHome={backToHome}></Content>
      </div>
      <div className='App_content' id="home">
        <div className='App_Title primaryFont'>
          Apoorv Bedmutha
        </div>
        <div className='App_Row'>
          <div className='App_Menu'>
            <div><a href="#home">HOME</a></div>
            <div onClick={()=>getBanner("Podcast")}>PODCAST</div>
            <div onClick={()=>getBanner("About")}>ABOUT</div>
            <div><a href='https://youtube.com/channel/UCgZktIb4RuusN_YkLCuMVeA' target="_blank">YOUTUBE</a></div>
            <div><a href='https://apoorvbedmutha.medium.com' target="_blank">BLOGS</a></div>
            <div><a href='https://www.instagram.com/apoorvoftheapoorvs/' target="_blank">POETRY AND LITERATURE</a></div>
            <div><a href=''>WHITE PAPERS</a></div>
            <div><a href='https://github.com/bedmuthaapoorv' target="_blank">GITHUB</a></div>
            <div><a href='' target="_blank">RESUME</a></div>
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
              <img src={Youtube} alt="" style={{
                height:'6vh'
              }}></img>
              <img src={Spotify} className="Details_Logo" alt="" style={{
                height:'6vh'
              }}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
