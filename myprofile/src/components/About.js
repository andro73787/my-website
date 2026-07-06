import useInView from '../hooks/useInView';
import { useLanguage } from '../context/LanguageContext';
import profilePhoto from '../assets/profile.jpg';
import './About.css';

export default function About() {
  const { t } = useLanguage();
  const [ref, inView] = useInView();

  return (
    <section id="about" className="section about" ref={ref}>
      <div className="section__inner">
        <h2 className={`section__title fade-in${inView ? ' visible' : ''}`}>
          <span>{t.about.title}</span>
        </h2>
        <div className={`section__divider fade-in${inView ? ' visible' : ''}`} />

        <div className="about__grid">
          <div className={`about__bio fade-in delay-1${inView ? ' visible' : ''}`}>
            {t.about.bio.map((p, i) => (
              <p key={i} className="about__para">{p}</p>
            ))}
            <div className="about__avatar">
              <div className="about__avatar-inner">
                <img src={profilePhoto} alt="Profile" />
              </div>
            </div>
          </div>

          <div className={`about__details fade-in delay-2${inView ? ' visible' : ''}`}>
            {Object.entries(t.about.details).map(([key, val]) => (
              <div key={key} className="about__detail-row">
                <span className="about__detail-label">{t.about.labels[key]}</span>
                <span className="about__detail-value">
                  {key === 'email' ? (
                    <a href={`mailto:${val}`} className="about__email">{val}</a>
                  ) : val}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
