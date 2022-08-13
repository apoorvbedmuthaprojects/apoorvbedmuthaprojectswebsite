import "./App.css"
import JOSMLogo from "./assets/JOSM_logo.png"
import GPodcasts from "./assets/GooglePodcasts.png"
import Youtube from "./assets/Youtube.png"
import AppleMusic from "./assets/AppleMusic.png"
import Spotify from "./assets/Spotify.png"
import Cross from "./assets/Cross.png"
export default function Podcast(props) {
    console.log(props)
    function backToHome(){
        props.backToHome("Podcast");
    }
    return <div className="primaryFont podcastContainer">
        <img src={Cross} className="podcastContainer__Cross" onClick={backToHome}></img>
        <div className="podcastFlex">
            <div className="podcastFlex__FlexLeft">
                <img src={JOSMLogo} className="JOSMlogo" alt=""></img>
                <div className="FlexLeft_BigText">One <br></br> Percent <br></br> Better <br></br> Everyday</div>
            </div>
            <div className="podcastFlex__FlexRight">
                <div className="FlexRight__TopBox">
                    <div className="TopBox_Content">
                        Calm yet Dynamic Podcast focused on
                        <br />making better choices in life everyday.
                        <br />Well studied and personally tested
                        <br />techniques that will make our life
                        <br />
                        <div className="RalewayBold">One Percent Better</div>
                    </div>
                </div>
                <div className="FlexRight__Notif">
                    Season 2<br></br>underway
                </div>
                <div className="FlexRight__Platforms">
                    <img src={GPodcasts} alt=""></img>
                    <img src={Youtube} alt=""></img>
                    <img src={AppleMusic} alt=""></img>
                    <img src={Spotify} alt=""></img>
                </div>
            </div>
        </div>
    </div>
}