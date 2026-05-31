import useInView from '../hooks/useInView';
import { useLanguage } from '../context/LanguageContext';
import './Hobbies.css';

function HobbyCard({ category, delay, inView }) {
  return (
    <div className={`hobby-card fade-in delay-${delay}${inView ? ' visible' : ''}`}>
      <h3 className="hobby-card__heading">
        <span className="hobby-card__icon">{category.icon}</span>
        {category.name}
      </h3>
      <ul className="hobby-card__list">
        {category.items.map((item, i) => (
          <li key={i} className="hobby-card__item">
            <span className="hobby-card__item-icon">{item.icon}</span>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
      {category.quote && (
        <blockquote className="hobby-card__quote">
          "{category.quote}"
        </blockquote>
      )}
    </div>
  );
}

export default function Hobbies() {
  const { t } = useLanguage();
  const [ref, inView] = useInView();

  return (
    <section id="hobbies" className="section hobbies" ref={ref}>
      <div className="section__inner">
        <h2 className={`section__title fade-in${inView ? ' visible' : ''}`}>
          <span>{t.hobbies.title}</span>
        </h2>
        <div className={`section__divider fade-in${inView ? ' visible' : ''}`} />

        <div className="hobbies__grid">
          {t.hobbies.categories.map((cat, i) => (
            <HobbyCard
              key={i}
              category={cat}
              delay={(i % 3) + 1}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
