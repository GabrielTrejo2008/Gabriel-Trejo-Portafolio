const projects = [
  {
    year: "First year",
    title: <a href="https://make.powerapps.com/e/Default-d8e3bd44-0bba-426b-952d-ada7bb17393c/canvas/?action=edit&app-id=%2Fproviders%2FMicrosoft.PowerApps%2Fapps%2F10f582e7-c1a7-4ead-8f6f-ff2335e7a04a">Transportech</a>,
    description:
      "A project developed during my first year in ¡Supérate!, where I practiced the fundamentals of technology, planning, and teamwork.",
    role:
      "My role was to contribute to the assigned tasks, collaborate with my teammates, and apply the knowledge acquired during the program.",
    technologies: ["Figma, PowerApps"],
  
  },
  {
    year: "Second year",
    title: <a href="https://expo-2025-no-uva.vercel.app/">noUva</a>,
    description:
      "A collaborative project focused on applying technical skills to design and develop a solution to a specific problem.",
    role:
      "I contributed to the development process by completing my assigned responsibilities, solving problems, and coordinating with the team.",
    technologies: ["JavaScript", "Python", "Php", "Tailwind css", "HTML", "MySql"],
  
  },
  {
    year: "Third year",
    title: <a href="https://drive.google.com/file/d/12sGUr8g2MHsiJhdEGKokMH2Qd5UjZgTF/view?usp=sharing">Routify</a>,
    description:
      "A project that demonstrates the knowledge and skills I developed throughout my three-year learning journey.",
    role:
      "My contributions included participating in project planning, developing assigned features, and presenting our work and results.",
    technologies: ["React", "Node.js", "TypeScript", "Tailwind css", "MySql", "Prisma"],
  },
];

function EvidenceLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  if (!href) {
    return (
      <span className="evidence-pending">
        {label}: Add link
      </span>
    );
  }

  return (
    <a href={href} target="_blank" rel="noreferrer">
      {label} ↗
    </a>
  );
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-heading">
        <span className="eyebrow">WHAT I HAVE BUILT</span>
        <h2>Featured <span className="gradient-text">Projects</span></h2>
        <p>
          Three years of learning, collaboration, and practical experience.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.year}>
            <div className="project-top">
              <span className="project-year">{project.year}</span>
              <span className="project-icon">↗</span>
            </div>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tags">
              {project.technologies.map((technology) => (
                <span className="tag" key={technology}>
                  {technology}
                </span>
              ))}
            </div>

            <div className="project-role">
              <h4>My Role & Contributions</h4>
              <p>{project.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}