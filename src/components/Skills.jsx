import './Skills.css'

const skills = [
  { name: "Python", level: "Intermediate" },
  { name: "Java", level: "Intermediate" },
  { name: "C", level: "Intermediate" },
  { name: "JavaScript", level: "Intermediate" },
  { name: "React", level: "Intermediate" },
  { name: "Django", level: "Intermediate" },
  { name: "Docker", level: "Beginner" },
  { name: "PyTorch", level: "Beginner" },
  { name: "PostgreSQL", level: "Intermediate" },
  { name: "HTML/CSS", level: "Intermediate" },
]

const Skills = () => {
  return (
    <section className="skills section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <span className="skill-name">{skill.name}</span>
            <span className="skill-level">{skill.level}</span>
          </div>
        ))}
      </div>

      {/* Floating Emojis */}
      <span className="skills-icon icon-1">💻</span>
      <span className="skills-icon icon-2">🧠</span>
      <span className="skills-icon icon-3">⚙️</span>
      <span className="skills-icon icon-4">📦</span>
      <span className="skills-icon icon-5">📊</span>
      <span className="skills-icon icon-6">🧑‍💻</span>
    </section>
  )
}

export default Skills
