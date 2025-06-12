import './Contact.css'

const Contact = () => {
  return (
    <section className="contact section">
      <h2>Get in Touch</h2>
      <div className="contact-wrapper">
        <div className="contact-left">
          <div className="contact-item">
            <span className="contact-label">Email:</span>
            <a href="mailto:anand.gopan08@gmail.com" className="contact-link">
              anand.gopan08@gmail.com
            </a>
          </div>
          <div className="social-links">
            <a href="https://github.com/ml-agg08" className="social-link" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/anand-gopan-g-14b829303/" className="social-link" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://drive.google.com/file/d/1s0LFsG9qSNUqsLHGPgLJ5Vq6CGcWWSiv/view?usp=sharing" className="social-link" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </div>
        </div>
        <div className="contact-right">
          <div className="emoji">💌</div>
          <div className="emoji">💬</div>
          <div className="emoji">🪐</div>
          <div className="emoji">📬</div>
        </div>
      </div>
    </section>
  )
}

export default Contact
