export default function About() {
  return (
    <section className="section about" id="about">
      <div className="section-heading">
        <span className="eyebrow">GET TO KNOW ME</span>
        <h2>About <span className="gradient-text">Me</span></h2>
      </div>

      <div className="about-grid">
        <div className="about-text">
          <h3>My Journey in ¡Supérate!</h3>

          <p>
            Throughout my three-year journey in the ¡Supérate!
            program, I have developed technical, academic, and
            professional skills that have helped me grow both
            personally and professionally.
          </p>

          <p>
            I have learned the importance of teamwork, discipline,
            communication, problem-solving, and continuous learning.
            Each project has given me an opportunity to apply my
            knowledge and improve my abilities.
          </p>

          <p>
            My goal is to continue developing my skills in technology
            and contribute to projects that create a positive impact.
          </p>
        </div>

        <div className="stats-grid">
          <article className="stat-card">
            <strong>3</strong>
            <span>Years of Learning</span>
          </article>

          <article className="stat-card">
            <strong>3</strong>
            <span>Program Projects</span>
          </article>

          <article className="stat-card">
            <strong>3+</strong>
            <span>Courses</span>
          </article>

          <article className="stat-card">
            <strong>∞</strong>
            <span>Willingness to Learn</span>
          </article>
        </div>
      </div>
    </section>
  );
}