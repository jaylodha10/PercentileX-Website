import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Legal.css';

export default function PrivacyPolicy() {
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
          <div className="badge-pill">LEGAL</div>
          <h1>Privacy Policy</h1>
          <p className="legal-date">Last updated: July 17, 2026</p>
        </div>

        <div className="legal-body">
          <section>
            <h2>1. Overview</h2>
            <p>
              PercentileX ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, and safeguard information when you use the PercentileX mobile application
              and website (collectively, the "Service").
            </p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <h3>2.1 Information You Provide</h3>
            <p>
              When you register for the waitlist or contact us, we may collect your email address and any
              information you voluntarily provide. We do not require you to create an account to use
              the core features of the app.
            </p>
            <h3>2.2 Automatically Collected Information</h3>
            <p>
              The PercentileX app stores all practice data, mock exam scores, performance metrics, and
              progress tracking <strong>locally on your device</strong> using SQLite. We do not transmit
              this data to any remote server.
            </p>
            <h3>2.3 AI-Generated Content Requests</h3>
            <p>
              When you request AI-generated questions, anonymized prompts may be sent to third-party
              AI providers (Google Gemini, OpenAI). These requests do not contain any personally
              identifiable information.
            </p>
          </section>

          <section>
            <h2>3. How We Use Your Information</h2>
            <ul>
              <li>To provide, maintain, and improve the Service</li>
              <li>To send waitlist updates and product announcements (with your consent)</li>
              <li>To respond to customer support inquiries</li>
              <li>To analyze aggregate usage patterns to improve app performance</li>
            </ul>
          </section>

          <section>
            <h2>4. Data Storage & Security</h2>
            <p>
              All exam preparation data (questions answered, scores, progress) is stored exclusively
              on your local device. API keys used to access AI services are obfuscated at compile-time
              using XOR masking and are never stored in plaintext. We implement industry-standard
              security measures to protect any data transmitted to or from our servers.
            </p>
          </section>

          <section>
            <h2>5. Third-Party Services</h2>
            <p>
              PercentileX integrates with the following third-party services:
            </p>
            <ul>
              <li><strong>Google Firebase / Firestore</strong> — for optional cloud sync features</li>
              <li><strong>Google Gemini API</strong> — for AI question generation</li>
              <li><strong>OpenAI API</strong> — as fallback AI question generation</li>
            </ul>
            <p>
              Each of these services has its own privacy policy. We encourage you to review them.
              We are not responsible for the privacy practices of these third parties.
            </p>
          </section>

          <section>
            <h2>6. Data Retention</h2>
            <p>
              We retain email addresses provided for the waitlist until you request deletion or
              unsubscribe. All on-device data is retained until you uninstall the application or
              manually clear app data from your device settings.
            </p>
          </section>

          <section>
            <h2>7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access personal data we hold about you</li>
              <li>Request correction or deletion of your personal data</li>
              <li>Unsubscribe from marketing communications at any time</li>
              <li>Request a copy of data we hold about you</li>
            </ul>
            <p>To exercise these rights, contact us at <strong>privacy@percentilex.app</strong></p>
          </section>

          <section>
            <h2>8. Children's Privacy</h2>
            <p>
              The Service is not directed to children under the age of 13. We do not knowingly
              collect personal information from children under 13. If you are a parent or guardian
              and believe your child has provided us with personal information, please contact us.
            </p>
          </section>

          <section>
            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material
              changes by posting the new Privacy Policy on this page with an updated date. Your
              continued use of the Service after any changes constitutes your acceptance of the new policy.
            </p>
          </section>

          <section>
            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:<br />
              <strong>Email:</strong> percentilex.contact@gmail.com<br />
              <strong>Address:</strong> Udaipur, Rajasthan, India
            </p>
          </section>
        </div>

        <div className="legal-footer-nav">
          <Link to="/">← Back to Home</Link>
          <Link to="/terms">Terms of Service →</Link>
        </div>
      </div>
    </div>
  );
}
