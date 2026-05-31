import useInView from '../hooks/useInView';
import { useLanguage } from '../context/LanguageContext';
import './Experience.css';

export default function Experience() {
  const { t } = useLanguage();
  const [ref, inView] = useInView();

  return (
    <section id="experience" className="section experience" ref={ref}>
      <div className="section__inner">
        <h2 className={`section__title fade-in${inView ? ' visible' : ''}`}>
          <span>{t.experience.title}</span>
        </h2>
        <div className={`section__divider fade-in${inView ? ' visible' : ''}`} />

        <div className="timeline">
          {t.experience.jobs.map((job, i) => (
            <div
              key={i}
              className={`timeline__item fade-in delay-${i + 1}${inView ? ' visible' : ''}`}
            >
              <div className="timeline__dot" />
              <div className="timeline__card">
                <div className="timeline__header">
                  <div>
                    <h3 className="timeline__role">{job.role}</h3>
                    <p className="timeline__company">{job.company}</p>
                  </div>
                  <span className="timeline__period">{job.period}</span>
                </div>
                <ul className="timeline__list">
                  {job.description.map((d, j) => (
                    <li key={j} className="timeline__list-item">{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
