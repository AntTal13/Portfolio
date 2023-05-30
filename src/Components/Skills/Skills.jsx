import './Skills.css'

export default function Skills() {
    const skills = [
        {
            src: 'https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor',
            alt: 'JavaScript'
        },
        {
            src: 'https://icongr.am/devicon/python-original.svg?size=128&color=currentColor',
            alt: 'Python'
        },
        {
            src: 'https://icongr.am/devicon/html5-original.svg?size=128&color=currentColor',
            alt: 'HTML'
        },
        {
            src: 'https://icongr.am/devicon/css3-original.svg?size=128&color=currentColor',
            alt: 'CSS'
        },
        {
            src: 'https://icongr.am/devicon/github-original-wordmark.svg?size=128&color=currentColor',
            alt: 'GitHub'
        },
        {
            src: 'https://icongr.am/devicon/react-original.svg?size=128&color=currentColor',
            alt: 'React'
        },
        {
            src: 'https://icongr.am/devicon/django-original.svg?size=128&color=currentColor',
            alt: 'Django'
        },
        {
            src: 'https://icongr.am/devicon/express-original.svg?size=128&color=currentColor',
            alt: 'Express'
        },
        {
            src: 'https://icongr.am/devicon/nodejs-original.svg?size=128&color=currentColor',
            alt: 'Node.js'
        },
        {
            src: 'https://icongr.am/devicon/postgresql-original-wordmark.svg?size=128&color=currentColor',
            alt: 'PostgreSQL'
        },
        {
            src: 'https://icongr.am/devicon/mongodb-original-wordmark.svg?size=128&color=currentColor',
            alt: 'MongoDB'
        },
        {
            src: 'https://icongr.am/devicon/bootstrap-plain-wordmark.svg?size=128&color=currentColor',
            alt: 'Bootstrap'
        },
        {
            src: 'https://icongr.am/devicon/git-original-wordmark.svg?size=128&color=currentColor',
            alt: 'Git'
        },
        {
            src: 'https://icongr.am/devicon/heroku-original.svg?size=128&color=currentColor',
            alt: 'Heroku'
        },
        {
            src: 'https://icongr.am/devicon/visualstudio-plain.svg?size=128&color=currentColor',
            alt: 'VS Code'
        }
    ];
  
    return (
        <div id="skills" className="skills-container">
          <br></br>
          <h1 className="skills-header">SKILLS</h1>
          <div className="skills-icons">
            {skills.map((skill, index) => (
              <div key={index} className="skill-icon">
                <img src={skill.src} alt={skill.alt} />
                <span className="alt-text">{skill.alt}</span>
              </div>
            ))}
            <div className="and-more">
              <p>And more...</p>
            </div>
          </div>
        </div>
    );
  }