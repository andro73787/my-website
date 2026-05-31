import useInView from '../hooks/useInView';
import { useLanguage } from '../context/LanguageContext';
import './Education.css';

export default function Education() {
  const { t } = useLanguage();
  const [ref, inView] = useInView();

  return (
    <section id="education" className="section education" ref={ref}>
      <div className="section__inner">
        <h2 className={`section__title fade-in${inView ? ' visible' : ''}`}>
          <span>{t.education.title}</span>
        </h2>
        <div className={`section__divider fade-in${inView ? ' visible' : ''}`} />

        <div className="timeline">
          {t.education.items.map((item, i) => (
            <div
              key={i}
              className={`timeline__item fade-in delay-${(i % 5) + 1}${inView ? ' visible' : ''}`}
            >
              <div className="timeline__dot" />
              <div className="timeline__card">
                <div className="timeline__header">
                  <div>
                    <h3 className="timeline__role">{item.school}</h3>
                    {item.faculty && (
                      <p className="edu__faculty">{item.faculty}</p>
                    )}
                    {item.degree && (
                      <p className="edu__degree">{item.degree}</p>
                    )}
                  </div>
                  <span className="timeline__period">{item.year}</span>
                </div>
                {item.note && (
                  <span className={`edu__badge${item.note.includes('Expected') || item.note.includes('見込み') ? ' edu__badge--expected' : ''}`}>
                    {item.note}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
