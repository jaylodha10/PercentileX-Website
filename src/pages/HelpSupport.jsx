import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Legal.css';

export default function HelpSupport() {
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
          <div className="badge-pill">SUPPORT</div>
          <h1>Help & Support</h1>
          <p className="legal-date">We're here to help you ace the CAT</p>
        </div>

        <div className="legal-body">
          <section>
            <h2>Frequently Asked Questions</h2>
            <h3>How do I reset my mock scores?</h3>
            <p>
              Currently, mock scores are permanent to track your authentic progress. You can take a new mock test instead.
            </p>
            
            <h3>How does Mentor AI work?</h3>
            <p>
              Mentor AI analyzes your past accuracy and time spent across topics to curate specialized daily study plans, pinpointing your weak areas for targeted improvement.
            </p>
            
            <h3>Can I use PercentileX offline?</h3>
            <p>
              Some features like viewing downloaded practice questions work offline. However, uploading mock data and generating new AI practice questions require an active internet connection.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you couldn't find the answer to your question, feel free to reach out to us directly. Our support team is always ready to assist you.
            </p>
            
            <div style={{ marginTop: '20px' }}>
              <strong>Email Support:</strong>
              <p>percentilex.contact@gmail.com</p>
              
              <strong>Live Chat:</strong>
              <p>Available in the mobile app (Usually responds in 2 hours)</p>
            </div>
          </section>
        </div>

        <div className="legal-footer-nav">
          <Link to="/">← Back to Home</Link>
          <Link to="/about">About PercentileX →</Link>
        </div>
      </div>
    </div>
  );
}
