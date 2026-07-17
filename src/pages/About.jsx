import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Legal.css';

export default function About() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="legal-page">
      <nav className="legal-nav">
        <Link to="/" className="brand-logo">
          <img src="/assets/app_logo.png" alt="PercentileX" />
          <span>PercentileX</span>
        </Link>
      </nav>

      <div className="legal-container">
        <div className="legal-header">
          <div className="badge-pill">ABOUT US</div>
          <h1>About PercentileX</h1>
          <p className="legal-date">Your AI-powered sanctuary for serious CAT aspirants.</p>
        </div>

        <div className="legal-body">
          <section>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <img src="/assets/app_logo.png" alt="PercentileX Logo" style={{ width: '120px', height: '120px', borderRadius: '24px' }} />
              <h2 style={{ marginTop: '20px', borderBottom: 'none' }}>PercentileX</h2>
              <p>Version 1.0.0</p>
            </div>
          </section>

          <section>
            <h2>Our Mission</h2>
            <p>
              PercentileX is an AI-powered preparation ecosystem built specifically for CAT aspirants. We combine adaptive testing, detailed analytics, and intelligent study planning to help you reach your dream percentile.
            </p>
            <p>
              We believe that every aspirant deserves a personalized, data-driven approach to crack the Common Admission Test. By leveraging state-of-the-art AI, we provide 5,000+ custom-tailored practice variants across VARC, DILR, and Quants, ensuring you're always challenged at the right level.
            </p>
          </section>

          <section>
            <h2>The Technology</h2>
            <p>
              Our platform uses advanced dual LLM integration (Gemini & GPT-4o) to generate infinite practice questions. Everything from mock scores to performance tracking is stored securely on your local device for maximum privacy and offline capability.
            </p>
          </section>

          <section>
            <h2>Connect With Us</h2>
            <p>
              Have a suggestion or just want to say hi? Reach out to us at <strong>percentilex.contact@gmail.com</strong>
            </p>
          </section>
        </div>

        <div className="legal-footer-nav">
          <Link to="/">← Back to Home</Link>
          <Link to="/privacy">Privacy Policy →</Link>
        </div>
      </div>
    </div>
  );
}
