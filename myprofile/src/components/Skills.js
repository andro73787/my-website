import useInView from '../hooks/useInView';
import { useLanguage } from '../context/LanguageContext';
import './Skills.css';

function SkillBar({ name, sublabel, level, inView, delay }) {
  return (
    <div className={`skill fade-in delay-${delay}${inView ? ' visible' : ''}`}>
      <div className="skill__header">
        <div className="skill__name-wrap">
          <span className="skill__name">{name}</span>
          {sublabel && <span className="skill__sublabel">{sublabel}</span>}
        </div>
        <span className="skill__level">{level}%</span>
      </div>
      <div className="skill__track">
        <div
          className="skill__fill"
          style={{ width: inView ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

function SkillTags({ items, inView }) {
  return (
    <div className="skill-tags">
      {items.map((item, i) => (
        <span
          key={i}
          className={`skill-tag fade-in delay-${(i % 4) + 1}${inView ? ' visible' : ''}`}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default function Skills() {
  const { t } = useLanguage();
  const [ref, inView] = useInView();

  return (
    <section id="skills" className="section skills" ref={ref}>
      <div className="section__inner">
        <h2 className={`section__title fade-in${inView ? ' visible' : ''}`}>
          <span>{t.skills.title}</span>
        </h2>
        <div className={`section__divider fade-in${inView ? ' visible' : ''}`} />

        <div className="skills__grid">
          {t.skills.categories.map((cat, ci) => (
            <div key={ci} className={`skills__category fade-in delay-${(ci % 4) + 1}${inView ? ' visible' : ''}`}>
              <h3 className="skills__cat-name">
                {cat.icon && <span className="skills__cat-icon">{cat.icon}</span>}
                {cat.name}
              </h3>
              {cat.type === 'tag' ? (
                <SkillTags items={cat.items} inView={inView} />
              ) : (
                cat.items.map((item, si) => (
                  <SkillBar
                    key={si}
                    name={item.name}
                    sublabel={item.sublabel}
                    level={item.level}
                    inView={inView}
                    delay={(si % 4) + 1}
                  />
                ))
              )}
            </div>
          ))}
        </div>

        <div className={`skills__languages fade-in delay-2${inView ? ' visible' : ''}`}>
          <h3 className="skills__cat-name">
            {t.skills.languages.icon && <span className="skills__cat-icon">{t.skills.languages.icon}</span>}
            {t.skills.languages.title}
          </h3>
          <div className="skills__lang-list">
            {t.skills.languages.items.map((lang, i) => (
              <div key={i} className={`skills__lang-tag${lang.details ? ' skills__lang-tag--expanded' : ''}`}>
                <div className="skills__lang-tag-header">
                  <span className="skills__lang-name">{lang.name}</span>
                  <span className="skills__lang-level">{lang.level}</span>
                </div>
                {lang.details && (
                  <ul className="skills__lang-details">
                    {lang.details.map((d, di) => (
                      <li key={di}>{d}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <h4 className="skills__lang-achievements-title">{t.skills.languages.achievementsTitle}</h4>
          <div className="skills__lang-achievements">
            {t.skills.languages.achievements.map((item, i) => (
              <div
                key={i}
                className={`lang-ach fade-in delay-${(i % 3) + 1}${inView ? ' visible' : ''}`}
              >
                <span className="lang-ach__year">{item.year}</span>
                <div className="lang-ach__content">
                  <p className="lang-ach__title">{item.title}</p>
                  {item.subtitle && <p className="lang-ach__sub">{item.subtitle}</p>}
                  {item.note && <p className="lang-ach__note">{item.note}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
