import { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import profilePhoto from '../assets/profile.jpg';
import './Hero.css';

function MatrixRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let drops = [];

    const FONT_SIZE = 14;
    const CHARS = '01アイウエオカキクケコサシスセソABCDEFGHIJKLMN<>{}[]|/\\#@!';

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const cols = Math.floor(canvas.width / FONT_SIZE);
      drops = Array.from({ length: cols }, () => Math.random() * -canvas.height / FONT_SIZE);
    };

    init();
    window.addEventListener('resize', init);

    const draw = () => {
      ctx.fillStyle = 'rgba(11, 11, 18, 0.06)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${FONT_SIZE}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const y = drops[i] * FONT_SIZE;
        if (y > 0 && y < canvas.height) {
          const progress = y / canvas.height;
          const opacity = progress < 0.15 ? 0.55 : 0.15;
          ctx.fillStyle = `rgba(165, 152, 247, ${opacity})`;
          ctx.fillText(CHARS[Math.floor(Math.random() * CHARS.length)], i * FONT_SIZE, y);
        }
        if (y > canvas.height && Math.random() > 0.972) drops[i] = 0;
        drops[i] += 0.6;
      }
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', init);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero__matrix" />;
}

function useTypewriter(strings, speed = 70, deleteSpeed = 35, pauseMs = 2000) {
  const [displayed, setDisplayed] = useState('');
  const [idx, setIdx] = useState(0);
  const [typing, setTyping] = useState(true);
  const stringsKey = strings.join('||');

  useEffect(() => {
    setDisplayed('');
    setIdx(0);
    setTyping(true);
  }, [stringsKey]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const current = strings[idx] ?? '';
    let t;
    if (typing) {
      if (displayed.length < current.length) {
        t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), speed);
      } else {
        t = setTimeout(() => setTyping(false), pauseMs);
      }
    } else {
      if (displayed.length > 0) {
        t = setTimeout(() => setDisplayed(d => d.slice(0, -1)), deleteSpeed);
      } else {
        setIdx(i => (i + 1) % strings.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(t);
  }, [displayed, typing, idx, strings, speed, deleteSpeed, pauseMs]);

  return displayed;
}

export default function Hero() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const typeText = useTypewriter(t.hero.typewriter);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="hero">
      <MatrixRain />
      <div className="hero__bg-grid" />
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />

      <div className={`hero__content${visible ? ' visible' : ''}`}>
        <div className="hero__layout">

          {/* ── Text column ── */}
          <div className="hero__text">
            <p className="hero__greeting">{t.hero.greeting}</p>
            <h1 className="hero__name">{t.hero.name}</h1>

            <p className="hero__typewriter">
              <span className="hero__tw-bracket">&lt;</span>
              <span className="hero__tw-text">{typeText}</span>
              <span className="hero__tw-cursor">|</span>
              <span className="hero__tw-bracket"> /&gt;</span>
            </p>

            <p className="hero__subtitle">{t.hero.subtitle}</p>

            {/* Stats */}
            <div className="hero__stats">
              {t.hero.stats.map((stat, i) => (
                <div key={i} className="hero__stat">
                  <span className="hero__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="hero__actions">
              <button
                className="btn btn--primary"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t.hero.cta}
              </button>
              <a
                className="btn btn--outline"
                href="https://github.com/andro73787"
                target="_blank"
                rel="noreferrer"
              >
                {t.hero.github}
              </a>
            </div>
          </div>

          {/* ── Photo column ── */}
          <div className="hero__photo-wrap">
            <div className="hero__photo-ring">
              <div className="hero__photo-inner">
                <img src={profilePhoto} alt="Profile" className="hero__photo-img" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <button
        className="hero__scroll"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll down"
      >
        <span className="hero__scroll-text">{t.hero.scroll}</span>
        <span className="hero__scroll-chevron">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>
    </section>
  );
}
