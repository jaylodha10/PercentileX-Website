import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Legal.css';

export default function TermsOfService() {
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
          <h1>Terms of Service</h1>
          <p className="legal-date">Last updated: July 17, 2026</p>
        </div>

        <div className="legal-body">
          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using the PercentileX application or website (collectively,
              the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not
              agree to these Terms, please do not use the Service.
            </p>
          </section>

          <section>
            <h2>2. Description of Service</h2>
            <p>
              PercentileX is an AI-powered CAT (Common Admission Test) exam preparation platform that
              provides practice questions, simulated mock exams, performance analytics, and percentile
              estimation tools. The Service is designed for educational purposes for students preparing
              for MBA entrance examinations in India.
            </p>
          </section>

          <section>
            <h2>3. User Accounts & Eligibility</h2>
            <p>
              You must be at least 13 years of age to use the Service. By using the Service, you
              represent that you are at least 13 years old and have the legal capacity to enter into
              these Terms. If you are under 18, you represent that your parent or guardian has
              reviewed and agreed to these Terms.
            </p>
          </section>

          <section>
            <h2>4. Permitted Use</h2>
            <p>You may use the Service solely for lawful, personal, non-commercial educational purposes. You agree not to:</p>
            <ul>
              <li>Reproduce, distribute, or sell any content from the Service without written permission</li>
              <li>Reverse engineer, decompile, or disassemble any portion of the Service</li>
              <li>Use the Service to transmit spam, malware, or other harmful content</li>
              <li>Attempt to gain unauthorized access to any systems or networks</li>
              <li>Use automated tools to scrape or harvest content from the Service</li>
              <li>Misrepresent your identity or impersonate any person or entity</li>
            </ul>
          </section>

          <section>
            <h2>5. Intellectual Property</h2>
            <p>
              All content within the Service, including but not limited to questions, explanations,
              UI designs, graphics, and code, is owned by PercentileX or its licensors and is
              protected by applicable intellectual property laws. AI-generated questions are created
              on demand and are not reproductions of copyrighted exam materials.
            </p>
          </section>

          <section>
            <h2>6. AI-Generated Content Disclaimer</h2>
            <p>
              The Service uses third-party AI models (Google Gemini, OpenAI) to generate practice
              questions and explanations. While we strive for accuracy, AI-generated content may
              contain errors or inaccuracies. PercentileX does not guarantee the correctness of any
              AI-generated content and is not liable for any harm resulting from reliance on such content.
              Always verify important answers with official study materials.
            </p>
          </section>

          <section>
            <h2>7. Percentile Estimates</h2>
            <p>
              Percentile predictions provided by the Service are estimates based on historical CAT
              score distributions and are for guidance purposes only. Actual CAT results may differ
              significantly. PercentileX makes no guarantee of exam performance or admission outcomes.
            </p>
          </section>

          <section>
            <h2>8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, PercentileX shall not be liable for
              any indirect, incidental, special, consequential, or punitive damages, including but not
              limited to loss of data, loss of profits, or failure to achieve expected exam results,
              arising from your use of the Service.
            </p>
          </section>

          <section>
            <h2>9. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to the Service at any time,
              without notice, for conduct that we believe violates these Terms or is harmful to other
              users, us, or third parties. Upon termination, all licenses granted to you will cease.
            </p>
          </section>

          <section>
            <h2>10. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India,
              without regard to its conflict of law provisions. Any disputes arising under these Terms
              shall be subject to the exclusive jurisdiction of the courts located in Udaipur, Rajasthan.
            </p>
          </section>

          <section>
            <h2>11. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will provide notice of
              significant changes by updating the date at the top of this page. Your continued use
              of the Service after changes are posted constitutes your acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2>12. Contact Information</h2>
            <p>
              For questions about these Terms, please contact us at:<br />
              <strong>Email:</strong> legal@percentilex.app<br />
              <strong>Address:</strong> Udaipur, Rajasthan, India
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
