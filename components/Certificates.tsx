"use client";

import { useState, useEffect, useRef } from "react";
import type { TouchEvent } from "react";

type Certificate = {
  title: string;
  provider: string;
  description: string;
  file: string;
};

const certificates: Certificate[] = [
  {
    title: "SQL",
    provider: "midudev",
    description: "SQL course completed",
    file: "https://www.aprendesql.dev/certificado/23c27aa0-1729-4003-83f4-267152d3b43b",
  },
  {
    title: "Financial education program",
    provider: "Capacitate para el empleo",
    description: "Learned how to manage my own money with budgets.",
    file: "https://drive.google.com/file/d/1w0j1_aakuacM4GhGh6nMvml3AcqBeKcG/view?usp=sharing",
  },
  {
    title: "Microsoft-Excel-Expert",
    provider: "Microsoft",
    description: "I learned and improved how I use excel in a professional way",
    file: "https://drive.google.com/file/d/1YBhJHLiRlkplOZ-SfKOV9vvInxUbNQxn/view?usp=sharing",
  },
  {
    title: "Cybersecurity",
    provider: "Capacitate para el empleo",
    description: "I learned how to provide security and confidence in IT.",
    file: "https://drive.google.com/file/d/1m_kHtvGtNnuCb730bF_JFf-TzXXZxviE/view?usp=sharing",
  },
];

function getPerView(): number {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 700) return 1;
  if (window.innerWidth < 1050) return 2;
  return 3;
}

export default function Certificates() {
  const [index, setIndex] = useState<number>(0);
  const [perView, setPerView] = useState<number>(getPerView);
  const touchStartX = useRef<number | null>(null);

  const maxIndex = Math.max(0, certificates.length - perView);

  useEffect(() => {
    const onResize = () => setPerView(getPerView());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Evita quedarse en una posición inválida al cambiar de tamaño
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  return (
    <section className="section" id="certificates">
      <div className="section-heading">
        <span className="eyebrow">CONTINUOUS LEARNING</span>

        <h2>
          Courses & <span className="gradient-text">Certificates</span>
        </h2>

        <p>Certifications that represent my learning and professional growth.</p>
      </div>

      <div className="carousel">
        <button
          type="button"
          className="carousel-arrow carousel-arrow-left"
          onClick={prev}
          aria-label="Previous certificates"
        >
          ‹
        </button>

        <div
          className="carousel-viewport"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
          >
            {certificates.map((certificate) => (
              <div
                className="carousel-slide"
                key={certificate.title}
                style={{ flex: `0 0 ${100 / perView}%` }}
              >
                <article className="certificate-card">
                  <span className="certificate-label">COMPLETION CERTIFICATE</span>

                  <h3>{certificate.title}</h3>
                  <p>{certificate.provider}</p>
                  <p>{certificate.description}</p>

                  <a
                    className="button button-secondary"
                    href={certificate.file}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate ↗
                  </a>
                </article>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="carousel-arrow carousel-arrow-right"
          onClick={next}
          aria-label="Next certificates"
        >
          ›
        </button>
      </div>

      <div className="carousel-dots">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            type="button"
            key={i}
            className={`carousel-dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}