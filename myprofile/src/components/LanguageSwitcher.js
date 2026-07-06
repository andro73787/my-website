import { useLanguage } from '../context/LanguageContext';
import './LanguageSwitcher.css';

export default function LanguageSwitcher() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button className="lang-switcher" onClick={toggleLang} aria-label="Switch language">
      <span className={`lang-switcher__option${lang === 'en' ? ' active' : ''}`}>🇺🇸 EN</span>
      <span className="lang-switcher__divider">|</span>
      <span className={`lang-switcher__option${lang === 'ja' ? ' active' : ''}`}>🇯🇵 日本語</span>
    </button>
  );
}
