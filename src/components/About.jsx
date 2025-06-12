import './About.css'

const About = () => {
  return (
    <section className="about section">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I'm a CSE undergrad from TKMCE, passionate about web, AI, and building creative tools. 
          I love making things that are fun, useful, or just weird enough to be worth it.
        </p>
      </div>

      <div className="about-shapes">
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>

        {/* Funky floating emojis */}
        <span className="about-icon icon-1">💻</span>
        <span className="about-icon icon-2">🌈</span>
        <span className="about-icon icon-3">⚡</span>
        <span className="about-icon icon-4">🎨</span>
      </div>
    </section>
  )
}

export default About
