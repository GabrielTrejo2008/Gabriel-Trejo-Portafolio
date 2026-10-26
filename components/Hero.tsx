export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-content">
        <span className="eyebrow">WELCOME TO MY PORTFOLIO</span>

        <h1>
          Hi, I'm <span className="gradient-text">Gabriel Trejo</span>
        </h1>

        <h2>Future Cybersecurity Engineer</h2>

        <p>
          I am a motivated student passionate about technology,
          software development, and creating digital solutions.
          I enjoy learning new skills and working with others
          to turn ideas into meaningful projects.
        </p>

        <div className="hero-buttons">
          <a className="button button-primary" href="#projects">
            Explore My Projects ↗
          </a>

          <a className="button button-secondary" href="#contact">
            Contact Me
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/YOUR_PROFILE/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <a href="mailto:YOUR_EMAIL@example.com">
            Email ↗
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="/images/profile.jpg"
          alt="Portrait of the portfolio owner"
        />

        <div className="image-caption">
          <span className="status-dot" />
          <span>Always learning, always growing</span>
        </div>
      </div>
    </section>
  );
}