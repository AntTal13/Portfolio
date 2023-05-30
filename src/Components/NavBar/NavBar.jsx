import './NavBar.css'

export default function NavBar() {
    return (
      <nav className="navbar">
        <div className="name-component">
            <a className="name" href="#home">Anthony Talarico</a>
        </div>
        <div className="right-components">
          <a href="#aboutme">About Me</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contactme">Contact Me</a>
        </div>
      </nav>
    );
  }