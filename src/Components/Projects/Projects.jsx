import './Projects.css'

export default function Projects() {
    return (
      <div id="projects" className="projects-container">
        <br></br>
        <h1 className="projects-header">PROJECTS</h1>
        <div className="project-wrapper">
          <div className="project-card">
            <h2 className="project-title">Trekspert</h2>
            <p className="project-description">Have you ever wanted to go for a run or take a walk, but had no idea what the weather looked like? What was your first course of action?
            Probably went to your Weather App, then had to access your Running App moments later.
            Is that really so bad? ... no ...
            But, wouldn't it be nicer to have one app that could do it all?
            Welcome to Trekspert!</p>
            <div className="project-buttons">
              <a href="https://trekspert.herokuapp.com/">See Live</a>
              <a href="https://github.com/AntTal13/Trekspert">Source Code</a>
            </div>
          </div>
          <div className="project-one-image">
            <img src="https://i.imgur.com/IwuQ9M6.png" alt="Project Image" />
          </div>
        </div>
        <div className="project-wrapper">
          <div className="project-card">
            <h2 className="project-title">MyPlace</h2>
            <p className="project-description">MyPlace is an application that provides a proven concept on Apartment Management. "HoneyBadger Towers" provides functionality to a single user, as well as added functionality for an Administrator.</p>
            <div className="project-buttons">
              <a href="https://myplace13.herokuapp.com/">See Live</a>
              <a href="https://github.com/AntTal13/MyPlace">Source Code</a>
            </div>
          </div>
          <div className="project-two-image">
            <img src="https://i.imgur.com/3aU89tC.jpeg" alt="Project Image" />
          </div>
        </div>
        <div className="project-wrapper">
          <div className="project-card">
            <h2 className="project-title">Track Your League</h2>
            <p className="project-description">Want to be able to see your league's current standings? How about the stats from your last game? Well, look no further!
            Track Your League allows you the ability to create your team's roster, add stats for your own players, and then see the current state of your league in our "Team Standings" page. Now you'll have a one-stop-shop to stay up to date with your team!</p>
            <div className="project-buttons">
              <a href="https://track-your-league-3623.herokuapp.com/">See Live</a>
              <a href="https://github.com/AntTal13/Track-Your-League">Source Code</a>
            </div>
          </div>
          <div className="project-three-image">
            <img src="https://i.imgur.com/X7EqsfA.jpeg" alt="Project Image" />
          </div>
        </div>
        <div className="project-wrapper">
          <div className="project-card">
            <h2 className="project-title">Blackjack</h2>
            <p className="project-description">Blackjack is a card game where players compete against the house (casino) rather than each other.
            The objective is to get a hand total of 21 or as close to it as possible. The catch is the dealer's hand must be less than the player's in order to win. Be careful to not total more than 21 in a hand! Whoever does first... YOU LOSE!</p>
            <div className="project-buttons">
              <a href="https://anttal13.github.io/Blackjack-AT/">See Live</a>
              <a href="https://github.com/AntTal13/Blackjack-AT">Source Code</a>
            </div>
          </div>
          <div className="project-four-image">
            <img src="https://i.imgur.com/MIWf3WI.jpeg" alt="Project Image" />
          </div>
        </div>
      </div>
    );
  }