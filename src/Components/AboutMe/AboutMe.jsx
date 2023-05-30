import './AboutMe.css'

export default function AboutMe() {
    return (
      <>
        <div id="aboutme" className="about-me-container">
          <br></br>
          <h1 className="aboutmetitle">Who is Anthony?</h1>
          <div className="content">
            <div className="image-container">
              <img
                id="picture"
                src="https://i.imgur.com/iQk9o5a.jpeg"
                alt=""
              ></img>
            </div>
            <div className="text-container">
                <p>
                    For as long as I can remember, I have been drawn to puzzles and problem-solving games. Shamelessly, I still wake up every morning and get a round of Wordle in!
                </p>
                <p>
                    While I have been extremely fortunate to land several career-worthy positions along my professional development, I always felt like something was missing. I finally took the leap and joined General Assembly's Software Engineering Immersive course. It was here that I was able to craft my own skills and, finally, expand on that problem-solver that has existed at my core.
                </p>
                <p>
                    Please, enjoy my projects below and I hope we can connect in the future!
                </p>
            </div>
          </div>
        </div>
      </>
    );
  }