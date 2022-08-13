import About from './About';
import './App.css';
import Podcast from './Podcast';
export default function Content(props){
switch(props.content){
    case "": return <div></div>
    case "Podcast": return <Podcast backToHome={props.backToHome} />
    case "About": return <About backToHome={props.backToHome} ></About>
}
}