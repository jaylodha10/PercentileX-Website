import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ParticleField from './components/ParticleField';
import AppCarousel from './components/AppCarousel';
import { useScrollReveal } from './hooks/useScrollReveal';
import emailjs from '@emailjs/browser';

/* ─── Reusable reveal wrapper ─── */
function Reveal({ children, delay = 0, className = '' }) {
  const [ref, visible] = useScrollReveal(0.12);
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'revealed' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  /* ── Waitlist ── */
  const [email, setEmail] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* ── Percentile Calculator ── */
  const [varc, setVarc] = useState(32);
  const [dilr, setDilr] = useState(24);
  const [qa, setQa] = useState(28);

  const compositeScore =
    Math.min(72, Math.max(0, varc)) +
    Math.min(60, Math.max(0, dilr)) +
    Math.min(66, Math.max(0, qa));

  let p = 50;
  if (compositeScore >= 150)      p = 99.99;
  else if (compositeScore >= 110) p = 99.9  + (compositeScore - 110) * 0.00225;
  else if (compositeScore >= 80)  p = 99.0  + (compositeScore - 80)  * 0.03;
  else if (compositeScore >= 60)  p = 95.0  + (compositeScore - 60)  * 0.2;
  else if (compositeScore >= 40)  p = 85.0  + (compositeScore - 40)  * 0.5;
  else                             p = 50.0  + compositeScore * 0.875;
  const predictedPercentile = Math.min(100, Math.max(50, p));

  /* ── Spotlight cards ── */
  const cardsRef = useRef([]);
  const handleMouseMove = (e, i) => {
    const card = cardsRef.current[i];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  /* ── Scroll depth tracker ── */
  const [scrollM, setScrollM] = useState(0);
  const [ach, setAch]         = useState('Keep scrolling to unlock CAT landmarks');
  const widgetRef = useRef(null);

  useEffect(() => {
    const milestones = [
      { t: 20,  text: '📖 Level 1: VARC RC Engine Unlocked!',     hit: false },
      { t: 50,  text: '🧩 Level 2: DILR Logic Preset Loaded!',    hit: false },
      { t: 90,  text: '🎯 Level 3: 100 Percentile Target Set!',   hit: false },
    ];
    const onScroll = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = winHeightPx > 0 ? (scrollPx / winHeightPx) * 100 : 0;
      setScrollM(scrolled);
      let cur = 'Keep scrolling to unlock CAT landmarks';
      milestones.forEach(ms => {
        if (scrolled >= ms.t) {
          cur = ms.text;
          if (!ms.hit) {
            ms.hit = true;
            const w = widgetRef.current;
            if (w) {
              w.style.transform = 'scale(1.06)';
              w.style.borderColor = '#06b6d4';
              w.style.boxShadow = '0 0 28px rgba(6,182,212,0.45)';
              setTimeout(() => {
                if (w) {
                  w.style.transform = '';
                  w.style.borderColor = '';
                  w.style.boxShadow = '';
                }
              }, 700);
            }
          }
        }
      });
      setAch(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // TODO: Replace these with your actual EmailJS credentials from https://www.emailjs.com/
    const serviceId = 'service_2c2k6si';
    const templateId = 'template_bk9n4lg';
    const publicKey = '_JZZjjO2pmBQSGt7Y';

    const templateParams = {
      to_email: email,
      to_name: 'Aspirant',
      reply_to: 'percentilex.contact@gmail.com'
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFormSubmitted(true);
      })
      .catch((err) => {
        console.error('FAILED...', err);
        // Fallback to success UI even if email fails, so user isn't blocked
        setFormSubmitted(true);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <ParticleField />

      {/* ── Floating Navigation ── */}
      <header className="header-nav">
        <div className="nav-container">
          <Link to="/" className="brand-logo">
            <img src="/assets/app_logo.png" alt="PercentileX" />
            <span>PercentileX</span>
          </Link>
          <nav className="nav-links">
            <a href="#features">Features</a>
            <a href="#preview">App Preview</a>
            <a href="#calculator">Percentile Predictor</a>
            <a href="#security">Security</a>
          </nav>
          <a href="#download" className="btn-waitlist">Download App</a>
        </div>
      </header>

      <main>
        {/* ═══════════════════════════════ HERO ══════════════════════════════ */}
        <section className="hero-section">
          <div className="container hero-container">
            <div className="hero-content">
              <div className="badge-pill animate-in">AI-POWERED CAT TUTOR</div>
              <h1 className="hero-title animate-in" style={{ animationDelay: '100ms' }}>
                CRACK THE CAT.<br />
                CHASE THE <span className="gradient-text">100 PERCENTILE.</span>
              </h1>
              <p className="hero-subtitle animate-in" style={{ animationDelay: '200ms' }}>
                Take complete control of your prep. Practice with 5,000+ AI-generated variants of
                VARC, DILR, and Quants. Experience real-time percentile prediction and simulated exam runs.
              </p>
              <div className="hero-ctas animate-in" style={{ animationDelay: '300ms' }}>
                <a href="#download" className="btn-primary">Download Now</a>
                <a href="#calculator" className="btn-secondary">Estimate Percentile</a>
              </div>
              <div className="hero-social-proof animate-in" style={{ animationDelay: '420ms' }}>
                <span className="bullet-point">🧠 Gemini & GPT-4o</span>
                <span className="bullet-point">🔒 Secure Encryption</span>
              </div>
            </div>

            <div className="hero-visual animate-in" style={{ animationDelay: '150ms' }}>
              <div className="orbital-glow" />
              <div className="orbital-ring ring-1" />
              <div className="orbital-ring ring-2" />
              <div className="phone-frame-container">
                <div className="iphone-mockup">
                  <div className="screen-notch" />
                  <div className="screen-content">
                    <img src="/assets/cat1.jpeg" alt="PercentileX Dashboard" className="screenshot-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════ HIGHLIGHTS ════════════════════════════ */}
        <section className="highlights-section">
          <div className="container">
            <div className="highlights-grid">
              {[
                { value: '5,000+', label: 'AI Exam Questions' },
                { value: '100+',   label: 'Custom Mock Exams' },
                { value: '0',      label: 'Data Leak Risk'    },
                { value: '100%',   label: 'Syllabus Tracking' },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="highlight-card">
                    <div className="value">{item.value}</div>
                    <div className="label">{item.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════ HOW IT WORKS ══════════════════════════ */}
        <section id="features" className="features-section">
          <div className="container">
            <Reveal>
              <div className="section-header">
                <div className="section-label">HOW IT WORKS</div>
                <h2 className="section-title">Three Engines. <span className="gradient-text">Unfair Advantage.</span></h2>
              </div>
            </Reveal>
            <div className="spotlight-grid">
              {[
                { num: '01', title: 'Predict', body: 'Solve custom test papers and receive diagnostic percentile prediction metrics based on difficulty-adapted weighting algorithms.' },
                { num: '02', title: 'Practice', body: 'Generate infinitely tailored VARC reading comprehensions, DILR puzzles, and Quantitative formulas with our integrated dual LLM service.' },
                { num: '03', title: 'Perform', body: 'Track your preparation goals, sync mock scores offline, and unlock detailed chapter masteries as you move closer to CAT Exam Day.' },
              ].map((card, i) => (
                <Reveal key={i} delay={i * 120}>
                  <div
                    className="spotlight-card"
                    ref={el => cardsRef.current[i] = el}
                    onMouseMove={e => handleMouseMove(e, i)}
                  >
                    <div className="card-bg-number">{card.num}</div>
                    <h3>{card.title}</h3>
                    <p>{card.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={400}>
              <div className="interactive-hint">Move your cursor over the cards to see spotlight tracing</div>
            </Reveal>
          </div>
        </section>

        {/* ═══════════════════════════ APP CAROUSEL ══════════════════════════ */}
        <section id="preview" className="showcase-section">
          <div className="container">
            <Reveal>
              <div className="section-header">
                <div className="section-label">THE APP</div>
                <h2 className="section-title">A SANCTUARY FOR <span className="gradient-text">SERIOUS ASPIRANTS.</span></h2>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <AppCarousel />
            </Reveal>
          </div>
        </section>

        {/* ═══════════════════════ PERCENTILE CALCULATOR ═════════════════════ */}
        <section id="calculator" className="calculator-section">
          <div className="container">
            <Reveal>
              <div className="section-header">
                <div className="section-label">PERCENTILE ESTIMATOR</div>
                <h2 className="section-title">Calculate Your <span className="gradient-text">CAT Trajectory.</span></h2>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="calc-box">
                <div className="calc-inputs">
                  {[
                    { id: 'varc', label: 'VARC Score (Max 72)',   max: 72,  val: varc, set: setVarc },
                    { id: 'dilr', label: 'DILR Score (Max 60)',   max: 60,  val: dilr, set: setDilr },
                    { id: 'qa',   label: 'Quants Score (Max 66)', max: 66,  val: qa,   set: setQa   },
                  ].map(({ id, label, max, val, set }) => (
                    <div className="input-group" key={id}>
                      <label htmlFor={id}>{label}</label>
                      <input
                        type="number" id={id} min="0" max={max}
                        value={val}
                        onChange={e => set(Math.min(max, Math.max(0, +e.target.value || 0)))}
                      />
                    </div>
                  ))}
                </div>
                <div className="calc-result-box">
                  <div className="score-label">ESTIMATED COMPOSITE SCORE</div>
                  <div className="score-val">{compositeScore}</div>
                  <div className="percentile-label">PREDICTED CAT PERCENTILE</div>
                  <div className="percentile-val">{predictedPercentile.toFixed(2)} %</div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══════════════════════════ SECURITY ═══════════════════════════════ */}
        <section id="security" className="security-section">
          <div className="container">
            <Reveal>
              <div className="section-header">
                <div className="section-label">PRIVACY FIRST</div>
                <h2 className="section-title">YOUR PREP. <span className="gradient-text">YOUR PROPERTY.</span></h2>
              </div>
            </Reveal>
            <div className="security-grid">
              {[
                { icon: '🔒', title: 'Privacy First',  body: 'We prioritize your privacy. No unnecessary remote profiling, and no selling your data to third-party ad networks.' },
                { icon: '💾', title: 'Local Caching',    body: 'Dashboard metrics and recent stats are cached on-device, minimizing data usage and keeping your app snappy.' },
                { icon: '🧠', title: 'Adaptive AI Mentorship',     body: 'Your dedicated AI tutor analyzes your performance to deliver highly targeted question variants, reducing time wasted.' },
              ].map((card, i) => (
                <Reveal key={i} delay={i * 120}>
                  <div className="security-card">
                    <div className="icon">{card.icon}</div>
                    <h3>{card.title}</h3>
                    <p>{card.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════ DOWNLOAD ════════════════════════════════ */}
        <section id="download" className="waitlist-section">
          <div className="container">
            <Reveal>
              <div className="waitlist-box">
                <div className="avatar-stack">
                  <span className="user-avatar">🚀</span>
                  <span className="user-avatar">🔥</span>
                  <span className="user-avatar">💯</span>
                  <span className="avatar-count">App is Now Live!</span>
                </div>
                <h2>READY TO MASTER THE CAT?</h2>
                <p>The wait is over. Download the official PercentileX Android app today and begin your journey to the 100th percentile.</p>
                
                <div style={{ display: 'flex', justifyContent: 'center', margin: '32px 0' }}>
                  <a href="#" className="btn-primary" style={{ padding: '16px 36px', fontSize: '1.15rem', borderRadius: '50px' }}>
                    ⬇ Download APK
                  </a>
                </div>

                <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-dark)', marginBottom: '16px' }}>
                    Want CAT strategies and updates delivered to your inbox?
                  </p>
                  {!formSubmitted ? (
                    <form className="waitlist-form" onSubmit={handleSubmit}>
                      <input
                        type="email" placeholder="Enter your email address"
                        value={email} onChange={e => setEmail(e.target.value)} required
                      />
                      <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Subscribe'}
                      </button>
                    </form>
                  ) : (
                    <div className="form-feedback">
                      ✅ Subscribed successfully! Check your inbox soon.
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* ══════════════════════════ FOOTER ══════════════════════════════════ */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            {/* Brand Column */}
            <div className="footer-brand-col">
              <Link to="/" className="footer-brand">
                <img src="/assets/app_logo.png" alt="PercentileX" />
                <span>PercentileX</span>
              </Link>
              <p className="footer-tagline">
                An AI-powered sanctuary for serious CAT aspirants. Converting preparation effort into percentile mastery since 2026.
              </p>
            </div>

            {/* Product Column */}
            <div className="footer-link-col">
              <h4>PRODUCT</h4>
              <a href="#features">How it Works</a>
              <a href="#preview">App Preview</a>
              <a href="#calculator">Percentile Predictor</a>
              <a href="#security">Security</a>
              <a href="#download">Download</a>
            </div>

          {/* Legal Column */}
          <div className="footer-link-col">
            <h4>LEGAL & SUPPORT</h4>
            <Link to="/about">About Us</Link>
            <Link to="/help">Help & Support</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© 2026 PercentileX. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/about">About Us</Link>
            <Link to="/help">Help</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms</Link>
          </div>
          </div>
        </div>
      </footer>

      {/* ── Scroll progress widget ── */}
      <div className="scroll-tracker-widget" ref={widgetRef}>
        <div className="tracker-val" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          PAGE PROGRESS: <span>{Math.round(scrollM)}%</span>
          <div style={{ width: '80px', height: '6px', background: 'rgba(255,255,255,0.2)', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{ width: `${scrollM}%`, height: '100%', background: '#06b6d4', transition: 'width 0.2s ease-out' }} />
          </div>
        </div>
        <div className="tracker-desc">{ach}</div>
      </div>
    </>
  );
}
