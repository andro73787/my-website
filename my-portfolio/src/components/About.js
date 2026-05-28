import './About.css';

const SKILLS = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'] },
  { category: 'Tools', items: ['Git', 'Docker', 'Figma', 'Linux'] },
];

const STATS = [
  { value: '2+', label: 'Years experience' },
  { value: '20+', label: 'Projects built' },
  { value: '10+', label: 'Happy clients' },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        <p className="about__label">Who I am</p>
        <h2 className="about__title">About Me</h2>

        <div className="about__layout">
          {/* ── Left: avatar + stats ── */}
          <div className="about__left">
            <div className="about__avatar-wrap">
              <div className="about__avatar">
                <span>A</span>
              </div>
              <div className="about__avatar-ring" />
            </div>

            <div className="about__stats">
              {STATS.map((s) => (
                <div key={s.label} className="about__stat">
                  <span className="about__stat-value">{s.value}</span>
                  <span className="about__stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: bio + skills ── */}
          <div className="about__right">
            <div className="about__bio">
              <p>
                Hi, I'm <strong>Andromel</strong> — a Full Stack Developer passionate about
                building products that live at the intersection of great engineering and
                thoughtful design.
              </p>
              <p>
                I started coding out of curiosity and never stopped. Today I build everything
                from REST APIs and databases to pixel-perfect UIs, always focusing on
                performance, clean code, and user experience.
              </p>
              <p>
                When I'm not pushing commits, you'll find me exploring new technologies,
                contributing to open source, or enjoying a good cup of coffee.
              </p>
            </div>

            <div className="about__skills">
              {SKILLS.map((group) => (
                <div key={group.category} className="about__skill-group">
                  <h4 className="about__skill-category">{group.category}</h4>
                  <ul className="about__skill-list">
                    {group.items.map((item) => (
                      <li key={item} className="about__skill-tag">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
