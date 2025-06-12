import './Hero.css'

const Hero = () => {
  return (
    <section className="hero section">
      <div className="hero-content">
        <h1>Hey, I’m Anand</h1>
        <p className="subtitle">A full stack developer & maker — I use tech to solve real-world problems and bring ideas to life.</p>

        <div className="cta-buttons">
          <a href="https://drive.google.com/file/d/1s0LFsG9qSNUqsLHGPgLJ5Vq6CGcWWSiv/view?usp=sharing" className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Resume</a>
          <a href="https://github.com/ml-agg08" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Check GitHub</a>
          <a href="https://www.linkedin.com/in/anand-gopan-g-14b829303/" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>
        </div>
      </div>

      <div className="hero-icons">
        <span className="icon">🚀</span>
        <span className="icon">💡</span>
        <span className="icon">🧠</span>
        <span className="icon">🛠️</span>
        <span className="icon">🎨</span>
        <span className="icon">👾</span>
      </div>

      <div className="hero-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </section>
  )
}

export default Hero
