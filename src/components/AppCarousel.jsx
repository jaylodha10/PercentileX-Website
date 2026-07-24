import { useState, useEffect, useRef } from 'react';
import '../styles/Carousel.css';

const screenshots = [
  { src: '/assets/cat1.jpeg', label: 'Dashboard' },
  { src: '/assets/cat2.jpeg', label: 'Mock Center' },
  { src: '/assets/cat3.jpeg', label: 'Practice Arena' },
  { src: '/assets/cat4.jpeg', label: 'Topic Progress' },
  { src: '/assets/cat5.jpeg', label: 'Analytics' },
  { src: '/assets/cat6.jpeg', label: 'Mentor AI' },
  { src: '/assets/cat7.jpeg', label: 'Mission Control' },
  { src: '/assets/cat8.jpeg', label: 'Achievements' },
];

export default function AppCarousel() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef(null);
  const touchStartX = useRef(0);

  const goTo = (idx) => {
    if (animating || idx === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 350);
  };

  const prev = () => goTo((current - 1 + screenshots.length) % screenshots.length);
  const next = () => goTo((current + 1) % screenshots.length);

  useEffect(() => {
    timerRef.current = setInterval(next, 3500);
    return () => clearInterval(timerRef.current);
  }, [current]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        next();
      } else {
        prev();
      }
    }
  };

  return (
    <div
      className="carousel-root"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Side phones for context */}
      <div className={`carousel-side left ${animating ? 'fade-out' : 'fade-in'}`}>
        <div className="iphone-mockup small">
          <div className="screen-notch" />
          <div className="screen-content">
            <img
              src={screenshots[(current - 1 + screenshots.length) % screenshots.length].src}
              alt="prev"
              className="screenshot-img"
            />
          </div>
        </div>
      </div>

      {/* Center main phone */}
      <div className="carousel-center">
        <div className={`iphone-mockup main ${animating ? 'carousel-exit' : 'carousel-enter'}`}>
          <div className="screen-notch" />
          <div className="screen-content">
            <img src={screenshots[current].src} alt={screenshots[current].label} className="screenshot-img" />
          </div>
        </div>
        <p className={`carousel-label ${animating ? 'fade-out' : 'fade-in'}`}>
          {screenshots[current].label}
        </p>
      </div>

      {/* Side phones for context */}
      <div className={`carousel-side right ${animating ? 'fade-out' : 'fade-in'}`}>
        <div className="iphone-mockup small">
          <div className="screen-notch" />
          <div className="screen-content">
            <img
              src={screenshots[(current + 1) % screenshots.length].src}
              alt="next"
              className="screenshot-img"
            />
          </div>
        </div>
      </div>

      {/* Arrow Controls */}
      <button className="carousel-arrow left-arrow" onClick={prev} aria-label="Previous">‹</button>
      <button className="carousel-arrow right-arrow" onClick={next} aria-label="Next">›</button>

      {/* Pagination Dots */}
      <div className="carousel-dots">
        {screenshots.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === current ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
