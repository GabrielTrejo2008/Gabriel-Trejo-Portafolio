import type { CSSProperties } from "react";

type Social = {
  name: string;
  hint: string;
  href: string;
  viewBox: string;
  path: string;
};

// Cambia los enlaces y los textos por los tuyos
const socials: Social[] = [
  {
    name: "GitHub",
    hint: "@YOUR_USERNAME",
    href: "https://github.com/GabrielTrejo2008",
    viewBox: "0 0 16 16",
    path: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",
  },
  {
    name: "LinkedIn",
    hint: "Gabriel Trejo",
    href: "https://www.linkedin.com/in/angel-trejo-technology/",
    viewBox: "0 0 24 24",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    name: "Gmail",
    hint: "Send me an email",
    href: "mailto:angelgabrieltrejomartinez@gmail.com",
    viewBox: "0 0 24 24",
    path: "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z",
  },
];

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

        <div className="social-panel">
          <div className="social-panel-title">
            <span>FIND ME ONLINE</span>
          </div>

          <ul className="social-grid">
            {socials.map((social, i) => {
              const isMail = social.href.startsWith("mailto:");

              return (
                <li key={social.name} style={{ "--i": i } as CSSProperties}>
                  <a
                    className="social-card"
                    href={social.href}
                    aria-label={`${social.name}: ${social.hint}`}
                    {...(isMail
                      ? {}
                      : { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    <span className="social-card-icon">
                      <svg
                        viewBox={social.viewBox}
                        width="20"
                        height="20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d={social.path} />
                      </svg>
                    </span>

                    <span className="social-card-text">
                      <span className="social-card-name">{social.name}</span>
                      <span className="social-card-hint">{social.hint}</span>
                    </span>

                    <span className="social-card-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="/images/profile.jpg"
          alt="Portrait of Gabriel Trejo"
        />

        <div className="image-caption">
          <span className="status-dot" />
          <span>Always learning, always growing</span>
        </div>
      </div>
    </section>
  );
}