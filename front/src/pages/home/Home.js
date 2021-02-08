import React from 'react';
import Slider from "./components/Slider";
import SpeakBox from "./components/SpeakBox";
export default function Home(){
    
    return <div id="contentHome">
        <Slider></Slider>
        <SpeakBox></SpeakBox>
        <h3>Previous rulings</h3>
        <div id="peopleBox">
            <div className="personBox">
                <span className="resumeIcon">Up/Down</span>
                <h4>Kanye West</h4>
                <p>Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.</p>
                <div className="report">
                    <button>View full report</button>
                    <div className="time">
                        1 month ago in Enterteiment
                    </div>
                </div>
                <div className="voteActions">
                    <div className="up">
                        <span>Icon</span>
                        <span>65%</span>
                    </div>
                    <div className="down">
                        <span>Icon</span>
                        <span>35%</span>
                    </div>
                </div>
            </div> {/* End person box */}
            <div className="personBox">
                <span className="resumeIcon">Up/Down</span>
                <h4>Kanye West</h4>
                <p>Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.</p>
                <div className="report">
                    <button>View full report</button>
                    <div className="time">
                        1 month ago in Enterteiment
                    </div>
                </div>
                <div className="voteActions">
                    <div className="up">
                        <span>Icon</span>
                        <span>65%</span>
                    </div>
                    <div className="down">
                        <span>Icon</span>
                        <span>35%</span>
                    </div>
                </div>
            </div> {/* End person box */}
            <div className="personBox">
                <span className="resumeIcon">Up/Down</span>
                <h4>Kanye West</h4>
                <p>Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.</p>
                <div className="report">
                    <button>View full report</button>
                    <div className="time">
                        1 month ago in Enterteiment
                    </div>
                </div>
                <div className="voteActions">
                    <div className="up">
                        <span>Icon</span>
                        <span>65%</span>
                    </div>
                    <div className="down">
                        <span>Icon</span>
                        <span>35%</span>
                    </div>
                </div>
            </div> {/* End person box */}
            <div className="personBox">
                <span className="resumeIcon">Up/Down</span>
                <h4>Kanye West</h4>
                <p>Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.</p>
                <div className="report">
                    <button>View full report</button>
                    <div className="time">
                        1 month ago in Enterteiment
                    </div>
                </div>
                <div className="voteActions">
                    <div className="up">
                        <span>Icon</span>
                        <span>65%</span>
                    </div>
                    <div className="down">
                        <span>Icon</span>
                        <span>35%</span>
                    </div>
                </div>
            </div> {/* End person box */}
        </div> {/* End people box */}
        <div id="submitPerson">
            <div className="invitation">
                Is there anyone else you would want us to add?
            </div>
            <button>Submit a name</button>
        </div>
    </div>
}