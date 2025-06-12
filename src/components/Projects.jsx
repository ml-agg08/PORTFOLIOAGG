import './Projects.css'

const projects = [
  {
    title: "Hall Permissions System",
    description: "A paperless venue approval system deployed on Koyeb to streamline event permissions on campus.",
    tags: ["Django", "HTML", "CSS", "JavaScript"]
  },
  {
    title: "HatchHub",
    description: "A matchmaking and idea validation platform for student innovators and collaborators.",
    tags: ["React", "Django", "PostgreSQL"]
  },
  {
    title: "PGWatch2 Enhancements",
    description: "Improved PGWatch2 with database summaries and a dark/light theme toggle. Dockerized for ease of deployment.",
    tags: ["CherryPy", "React", "Go", "Docker"]
  },
  {
    title: "GitPath",
    description: "A developer productivity tool that analyzes GitHub repos and offers personalized tech insights.",
    tags: ["React", "GitHub API"]
  },
  {
    title: "SillySanta & Bigraph LLM",
    description: "Used a fine-tuned BERT model to classify Santa letters and built a character-level language model.",
    tags: ["Flask", "PyTorch", "BERT"]
  },
  {
    title: "Titanic Classification Model",
    description: "Built a logistic regression model from scratch to predict Titanic survival outcomes.",
    tags: ["Machine Learning", "Logistic Regression"]
  }
]

const Projects = () => {
  return (
    <section className="projects section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, tagIndex) => (
                <span className="tag" key={tagIndex}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Visible Floating Emojis */}
      <span className="project-icon icon-1">💻</span>
      <span className="project-icon icon-2">🧠</span>
      <span className="project-icon icon-3">🚀</span>
      <span className="project-icon icon-4">🔍</span>
      <span className="project-icon icon-5">⚙️</span>
      <span className="project-icon icon-6">🎯</span>
    </section>
  )
}

export default Projects
