import './Projects.css';

const PROJECTS = [
  {
    title: 'DevFlow',
    description:
      'A full-stack project management tool with real-time collaboration, drag-and-drop boards, and team analytics dashboard.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Socket.io'],
    github: 'https://github.com/andromel/devflow',
    demo: 'https://devflow.demo',
  },
  {
    title: 'PixelShop',
    description:
      'Modern e-commerce platform featuring product search, cart management, Stripe payments, and an admin panel.',
    tags: ['Next.js', 'MongoDB', 'Stripe', 'Tailwind'],
    github: 'https://github.com/andromel/pixelshop',
    demo: 'https://pixelshop.demo',
  },
  {
    title: 'WeatherMap',
    description:
      'Interactive weather visualization app with geolocation, 7-day forecasts, and animated map overlays.',
    tags: ['React', 'OpenWeather API', 'Leaflet', 'CSS'],
    github: 'https://github.com/andromel/weathermap',
    demo: 'https://weathermap.demo',
  },
];

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.547 1.376.203 2.394.1 2.646.64.698 1.028 1.591 1.028 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects__inner">
        <p className="projects__label">What I've built</p>
        <h2 className="projects__title">Projects</h2>

        <div className="projects__grid">
          {PROJECTS.map((p) => (
            <article key={p.title} className="project-card">
              <div className="project-card__glow" />
              <div className="project-card__body">
                <h3 className="project-card__name">{p.title}</h3>
                <p className="project-card__desc">{p.description}</p>
              </div>
              <div className="project-card__footer">
                <ul className="project-card__tags">
                  {p.tags.map((t) => (
                    <li key={t} className="project-card__tag">{t}</li>
                  ))}
                </ul>
                <div className="project-card__links">
                  <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <GithubIcon />
                  </a>
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                    <ExternalIcon />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
