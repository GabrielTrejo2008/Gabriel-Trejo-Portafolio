"use client";

import { useRef } from "react";

const technologies = [
  { name: "HTML5", icon: "5", category: "Frontend", color: "#ff7043" },
  { name: "CSS3", icon: "3", category: "Frontend", color: "#4299ff" },
  { name: "JavaScript", icon: "JS", category: "Programming", color: "#f5dc55" },
  { name: "Python", icon: "Py", category: "Programming", color: "#63b3ed" },
  { name: "SQL", icon: "▤", category: "Database", color: "#b28aff" },
  { name: "Git", icon: "G", category: "Tools", color: "#ff7043" },
  { name: "GitHub", icon: "GH", category: "Tools", color: "#a4ffbe" },
  { name: "React", icon: "⚛", category: "Frontend", color: "#61dafb" },
  { name: "Next.js", icon: "N", category: "Framework", color: "#ffffff" },
  { name: "Figma", icon: "F", category: "UI/UX Design", color: "#ff8b70" },
  { name: "Canva", icon: "C", category: "Design", color: "#69d5e8" },
  { name: "Office 365", icon: "O", category: "Productivity", color: "#ff7043" },
];

export default function TechStack() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const moveCarousel = (direction: number) => {
    if (!carouselRef.current) return;

    carouselRef.current.scrollBy({
      left: direction * 280,
      behavior: "smooth",
    });
  };

  return (
    <section className="section" id="skills">
      <div className="section-heading reveal">
        <span className="eyebrow">MY TOOLKIT</span>

        <h2>
          Technologies & <span className="green-text">Skills</span>
        </h2>

        <p>
          Tools and technologies I have learned throughout my journey.
        </p>
      </div>

      <div className="tech-carousel-header">
        <span className="tech-counter">
          <span className="online-dot" />
          MY TECHNOLOGY STACK
        </span>

        <div className="carousel-controls">
          <button
            type="button"
            onClick={() => moveCarousel(-1)}
            aria-label="Previous technologies"
          >
            ←
          </button>

          <button
            type="button"
            onClick={() => moveCarousel(1)}
            aria-label="Next technologies"
          >
            →
          </button>
        </div>
      </div>

      <div className="tech-carousel-wrapper">
        <div className="tech-carousel" ref={carouselRef}>
          {technologies.map((tech, index) => (
            <article
              className="tech-card"
              key={tech.name}
              style={
                {
                  "--tech-color": tech.color,
                  "--card-index": index,
                } as React.CSSProperties
              }
            >
              <div className="tech-card-top">
                <span className="tech-category">{tech.category}</span>
                <span className="tech-arrow">↗</span>
              </div>

              <div className="tech-icon">{tech.icon}</div>

              <h3>{tech.name}</h3>

              <div className="tech-card-bottom">
                <span className="tech-status" />
                <span>Technology</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="carousel-caption">
        <span>SCROLL TO EXPLORE</span>
        <span className="caption-line" />
        <span>{technologies.length} TECHNOLOGIES</span>
      </div>

      <div className="about-strip reveal" id="about">
        <div>
          <span className="eyebrow">MY JOURNEY</span>
          <h3>Three years of learning and growing.</h3>
        </div>

        <p>
          Throughout the ¡Supérate! program, I have developed my
          technical knowledge, communication, teamwork, and
          problem-solving skills. I am motivated to keep learning
          and building meaningful digital projects.
        </p>
      </div>
    </section>
  );
}