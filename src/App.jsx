import { useState } from 'react';
import './App.css';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = index => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const faqData = [
    {
      question: 'נכות כללית',
      answer:
        'אדם הסובל מבעיה רפואית אחת או יותר ואיבד את כושר ההשתכרות שלו במעל ל-50% ונקבעה לו נכות בשיעור של 60% ומעלה (או 40% במקרים מסויימים)',
    },
    {
      question: 'תאונת עבודה/מחלת מקצוע',
      answer:
        'מחלת מקצוע-אדם הסובל מבעיה רפואית כתוצאה מתנאי עבודתו. תאונת עבודה- תאונה שהתרחשה תוך כדי ועקב העבודה, כולל בדרך לעבודה וממנה',
    },
    {
      question: 'שירותים נוספים',
      answer:
        'שירותים מיוחדים, ילד נכה, ניידות, החמרות מצב, פטור ממס, חברות ביטוח',
    },
    {
      question: 'תג נכה',
      answer:
        'אדם הסובל מבעיה רפואית שמגבילה את יכולת ההתניידות שלו והתניידות ללא רכב עלולה לערער את מצבו הרפואי',
    },
    {
      question: 'מה ההבדל בין נכות כללית לאובדן כושר עבודה?',
      answer:
        'נכות כללית נבחנת מול ביטוח לאומי ביחס ליכולת ההשתכרות הכללית, ואובדן כושר עבודה מול פוליסות ביטוח וקרנות ביחס למקצוע ועיסוק ספציפי',
    },
    {
      question: 'מי זכאי לפטור ממס הכנסה?',
      answer:
        'מבוטחים שהוכרה להם נכות רפואית גבוהה בהתאם לתנאי החוק עשויים להיות זכאים לפטור ממס. הזכאות תלויה בסוגי הליקויים והאחוזים שנקבעו',
    },
    {
      question: 'איך מתחילים תהליך מימוש זכויות?',
      answer:
        'ממלאים פרטים בטופס ונחזור אליכם לפגישת ייעוץ ללא עלות לבדיקת זכאות ראשונית וקבלת תכנית פעולה מותאמת אישית',
    },
    {
      question: 'מה כולל שירות ילד נכה?',
      answer:
        'זכויות לילדים עם צרכים מיוחדים כולל קצבאות, שירותי סיעוד, פטור ממס, תג חניה, וזכויות נוספות בהתאם למצב הרפואי',
    },
    {
      question: 'מה זה שירותי ניידות?',
      answer:
        'זכויות לניידות עבור אנשים עם מוגבלויות כולל רכב מותאם, רישיון נהיגה מיוחד, וזכויות נוספות הקשורות להתניידות',
    },
    {
      question: 'איך מטפלים בהחמרות מצב?',
      answer:
        'בדיקת זכאות להגדלת קצבאות או זכויות נוספות במקרה של החמרה במצב הרפואי, כולל הגשת בקשות לביטוח לאומי וחברות ביטוח',
    },
    {
      question: 'מה זה נפגעי איבה?',
      answer:
        'זכויות לאנשים שנפגעו בפעולות איבה כולל קצבאות, שירותי שיקום, וזכויות נוספות בהתאם לחוק נפגעי איבה',
    },
    {
      question: 'איך מתחילים?',
      answer:
        'השאירו פרטים בטופס ונחזור אליכם תוך 24 שעות לפגישת ייעוץ ללא עלות לבדיקת זכאות וקבלת תכנית פעולה מותאמת',
    },
    {
      question: 'האם השירות כרוך בעלות?',
      answer:
        'הפגישה הראשונית והבדיקה הראשונית ללא עלות. תשלום רק במקרה של הצלחה במימוש זכויות',
    },
    {
      question: 'סובלים מבעיה רפואית אחת או יותר?',
      answer:
        'עובדים בעבודה פיזית וסובלים מכאבים או בעיה רפואית אחרת כתוצאה מתנאי העבודה שלכם? השאירו פרטים ונדאג לממש את זכויותיכם בצורה הטובה והיעילה ביותר!',
    },
  ];

  const services = [
    { icon: '✅', title: 'פטור ממס הכנסה', description: '' },
    { icon: '🧾', title: 'אובדן כושר עבודה', description: '' },
    { icon: '🏦', title: 'פנסיית נכות', description: '' },
    { icon: '🏥', title: 'סיעוד חברות ביטוח', description: '' },
    { icon: '⚙️', title: 'מחלת מקצוע', description: '' },
    { icon: '🛠️', title: 'תאונת עבודה', description: '' },
    { icon: '🧑‍⚕️', title: 'נכות כללית', description: '' },
    { icon: '🤰', title: 'שמירת הריון', description: '' },
    { icon: '🧒', title: 'ילד נכה', description: '' },
    { icon: '🧰', title: 'שירותים מיוחדים', description: '' },
    { icon: '🏛️', title: 'סיעוד ביטוח לאומי', description: '' },
    { icon: '🛡️', title: 'נפגעי איבה', description: '' },
    { icon: '🚗', title: 'תג חניה לנכה', description: '' },
    { icon: '👪', title: 'זכויות אלמנים ויתומים', description: '' },
    { icon: '📄', title: 'תאונות אישיות', description: '' },
  ];

  return (
    <div className="App">
      {/* Skip link for accessibility */}
      <a href="#main" className="skip-link">
        דלג לתוכן הראשי
      </a>

      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">🏥 קול האזרח</div>
            <nav>
              <ul className={`nav ${mobileMenuOpen ? 'active' : ''}`}>
                <li>
                  <a
                    href="#services"
                    onClick={() => scrollToSection('services')}
                  >
                    שירותים
                  </a>
                </li>
                <li>
                  <a href="#faq" onClick={() => scrollToSection('faq')}>
                    שאלות ותשובות
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={() => scrollToSection('contact')}>
                    צור קשר
                  </a>
                </li>
              </ul>
            </nav>
            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="תפריט ניווט"
              aria-expanded={mobileMenuOpen}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main id="main">
        <section className="hero">
          <div className="container">
            <h1>אנחנו נדאג שאף דלת לא תישאר סגורה בפניך</h1>
            <p>קול האזרח – הבית למימוש זכויות רפואיות. איתך לאורך כל הדרך.</p>
            <div className="hero-buttons">
              <a
                href="#contact"
                className="btn"
                onClick={() => scrollToSection('contact')}
              >
                לפגישת ייעוץ ללא עלות
              </a>
              <a
                href="https://wa.me/972505099936?text=שלום, מעוניין/ת בבדיקת זכאות"
                className="btn btn-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="צור קשר בוואטסאפ"
              >
                וואטסאפ
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services">
          <div className="container">
            <h2>תחומי התמחות</h2>
            <p>מימוש זכויות מול ביטוח לאומי, מס הכנסה, חברות ביטוח וקרנות</p>
            <div className="services-grid">
              {services.map((service, index) => (
                <div key={index} className="service-card">
                  <div className="service-icon" aria-hidden="true">
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="faq">
          <div className="container">
            <h2>שאלות נפוצות</h2>
            <p>התשובות לשאלות הנפוצות ביותר על השירותים שלנו</p>
            <div className="faq-list">
              {faqData.map((faq, index) => (
                <div key={index} className="faq-item">
                  <button
                    className="faq-question"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={openFaq === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    {faq.question}
                  </button>
                  <div
                    id={`faq-answer-${index}`}
                    className={`faq-answer ${openFaq === index ? 'active' : ''}`}
                    aria-hidden={openFaq !== index}
                  >
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <div className="container">
            <h2>צור קשר</h2>
            <p>השאירו פרטים ונחזור אליכם לפגישת ייעוץ בביתכם – ללא התחייבות</p>
            <form className="contact-form" onSubmit={e => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">שם מלא *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  aria-describedby="name-error"
                />
                <div
                  id="name-error"
                  className="error-message"
                  aria-live="polite"
                ></div>
              </div>

              <div className="form-group">
                <label htmlFor="phone">טלפון *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  aria-describedby="phone-error"
                />
                <div
                  id="phone-error"
                  className="error-message"
                  aria-live="polite"
                ></div>
              </div>

              <div className="form-group">
                <label htmlFor="message">הודעה</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  aria-describedby="message-help"
                ></textarea>
                <div id="message-help" className="help-text">
                  סובלים מבעיה רפואית אחת או יותר? עובדים בעבודה פיזית וסובלים
                  מכאבים או בעיה רפואית אחרת כתוצאה מתנאי העבודה שלכם? השאירו
                  פרטים ונדאג לממש את זכויותיכם בצורה הטובה והיעילה ביותר!
                </div>
              </div>

              <div className="form-group">
                <label>
                  <input
                    type="checkbox"
                    required
                    aria-describedby="consent-help"
                  />
                  <span style={{ marginRight: '8px' }}>
                    ידוע לי כי המידע שאמסור יישמר במאגרי המידע בהתאם למדיניות
                    הפרטיות
                  </span>
                </label>
                <div id="consent-help" className="help-text">
                  השירות אינו משפטי*
                </div>
              </div>

              <button type="submit" className="btn">
                שלח
              </button>
            </form>

            <div className="contact-details" style={{ marginTop: '1.5rem' }}>
              <p>
                <strong>משרד:</strong> 02-5099936 · <strong>פקס:</strong>{' '}
                02-5099938
              </p>
              <p>
                <strong>מייל:</strong>{' '}
                <a href="mailto:kol.haezrah@gmail.com">kol.haezrah@gmail.com</a>{' '}
                · <strong>אתר:</strong>{' '}
                <a
                  href="https://kol-haezrah.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  kol-haezrah.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <p>&copy; 2024 קול האזרח. כל הזכויות שמורות.</p>
            </div>
            <ul className="footer-links">
              <li>
                <a href="#services">תחומי התמחות</a>
              </li>
              <li>
                <a href="#faq">שאלות ותשובות</a>
              </li>
              <li>
                <a href="#contact">צור קשר</a>
              </li>
              <li>
                <a href="mailto:kol.haezrah@gmail.com">kol.haezrah@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/972505099936?text=שלום, מעוניין/ת בבדיקת זכאות"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="צור קשר בוואטסאפ"
      >
        💬
      </a>
    </div>
  );
}

export default App;
