import Cross from "../src/assets/Cross.png"
export default function About(props) {
    function backToHome() {
        props.backToHome("About");
    }
    return <div className="primaryFont AboutContainer">
        
        <div onClick={() => backToHome()}>
            <img className="podcastContainer__Cross" src={Cross} />
            </div>
            <div className="podcastContainer__LargeText">Apoorv Bedmutha</div>
        <div className="AboutFlex">
            <div className="AboutFlex__Photo"></div>
            <div className="AboutFlex__Middle">
                <div className="Middle__BlankSpace"></div>
                <div className="Middle__Description">
                    Is professionally a
                    <strong> Full Stack Designer / Developer </strong>
                    dedicated towards developing
                    <strong> interactive and flawless web applications</strong>,
                    By nature, I am more inclined towards
                    minimalism in design.<br></br>
                    Previously held titles such as
                    <strong> Software Developer, UI designer and Graphic Designer.</strong><br></br>
                    Currently, developing cool things @ <strong>Xoriant Solutions.</strong><br></br>
                    With <strong>multiple awards </strong>, my work ethic
                    speaks for me. <br></br>
                    Passionately, I run a podcast which
                    goes by the name
                    <strong> Journal of Small Musings </strong> about which
                    you may find more about here.<br></br>
                    <strong> Design. Develop. Deliver.</strong> </div>
            </div>
            <div className="AboutFlex__SkillsAndAwards">
                <div className="SkillsAndAwards__LowerShape">
                    <div className="LowerShape__Skills">
                        <strong>
                            Skills <br></br>
                            <br></br>
                            Java<br></br>
                            React<br></br>
                            AWS<br></br>
                            Mockito<br></br>
                            CSS<br></br>
                            SCSS<br></br>
                            Redux<br></br>
                            SQL<br></br>
                            Hibernate<br></br>
                            REST APIs<br></br>
                        </strong>
                        and more.

                    </div>
                    <div className="LowerShape__BlankSpace">

                    </div>
                </div>
                <div className="SkillsAndAwards__UpperShape"></div>
            </div>
                <div className="AboutFlex__Awards">
        <strong>
                Awards<br></br>
                <br></br>
                3 Incompany Appreciations<br></br>
                and<br></br>
                1 Best Performer Award
                </strong>
            </div>
        </div>

    </div>
}