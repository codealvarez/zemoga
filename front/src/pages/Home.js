export default function Home(){
    return <div id="contentHome">
        <div id="slider">
            <div className="infoBox">
                <span>What's your opinion on</span>
                <h3>Pope Francis?</h3>
                <p>He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up) </p>
                <div className="moreInfo">
                    <span>W</span>
                    More information
                </div>
                <p>What's your veredict</p>
                <div className="voteBox">
                    <div className="up"></div>
                    <div className="down"></div>
                </div>
            </div>
            <div className="closingBox">
                <div className="closing">Closing in</div>
                <div className="days">22 days</div>
            </div>
        </div>
        <div id="speakBox">
            <div className="left">
                Sepack out. Be heard.
                <span>Be counted</span>
            </div>
            <div className="right">
                Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.
            </div>
        </div>
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