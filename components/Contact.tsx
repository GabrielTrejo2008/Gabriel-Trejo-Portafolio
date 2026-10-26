export default function Contact() {
  const email = "YOUR_EMAIL@example.com";

  const subject = encodeURIComponent("Professional Inquiry");
  const body = encodeURIComponent(
    "Hello, I visited your portfolio and would like to contact you."
  );

  return (
    <section className="section contact" id="contact">
      <div className="section-heading">
        <span className="eyebrow">LET'S CONNECT</span>
        <h2>Get in <span className="gradient-text">Touch</span></h2>

        <p>
          I am open to learning opportunities, collaborations,
          and professional connections.
        </p>
      </div>

      <div className="contact-card">
        <div>
          <span className="contact-icon">@</span>
          <h3>Email Me</h3>
          <p>Feel free to reach out for professional inquiries.</p>
        </div>

        <a
          className="button button-primary"
          href={`mailto:${email}?subject=${subject}&body=${body}`}
        >
          Send an Email ↗
        </a>

        <a
          href="https://github.com/YOUR_USERNAME"
          target="_blank"
          rel="noreferrer"
        >
          Visit my GitHub ↗
        </a>

        <a
          href="https://www.linkedin.com/in/YOUR_PROFILE/"
          target="_blank"
          rel="noreferrer"
        >
          Connect on LinkedIn ↗
        </a>
      </div>
    </section>
  );
}