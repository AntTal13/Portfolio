import AboutMe from "../Components/AboutMe/AboutMe";
import ContactMe from "../Components/ContactMe/ContactMe";
import Footer from "../Components/Footer/Footer";
import Home from "../Components/Home/Home";
import NavBar from "../Components/NavBar/NavBar";
import Projects from "../Components/Projects/Projects";
import Skills from "../Components/Skills/Skills";
import './MainPage.css'

export default function MainPage() {
    return (
      <>
        <NavBar />
        <div className="portolio">
          <Home />
          <AboutMe />
          <Skills />
          <Projects />
          <ContactMe />
          <Footer />
        </div>
      </>
    );
  }