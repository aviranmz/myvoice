# קול האזרח - מימוש זכויות רפואיות

אתר למימוש זכויות רפואיות, כולל נכות כללית, תאונת עבודה, פטור ממס, תג נכה ועוד.

## תכונות

- 🏥 **מימוש זכויות רפואיות** - נכות כללית, תאונת עבודה, פטור ממס
- 📱 **עיצוב Mobile-First** - מותאם לכל המכשירים
- ♿ **נגישות מלאה** - תמיכה ב-WCAG AA
- 🌐 **RTL Support** - תמיכה מלאה בעברית
- 📊 **Google Analytics** - מעקב אחר ביצועים
- 🔍 **SEO מותאם** - מטא-תגים ו-OpenGraph

## טכנולוגיות

- **React 18** - ספריית UI מודרנית
- **Vite** - כלי Build מהיר
- **CSS3** - עיצוב רספונסיבי
- **ESLint + Prettier** - איכות קוד
- **Google Analytics** - אנליטיקה

## התקנה והרצה

### דרישות מקדימות

- Node.js 18+
- npm או yarn

### התקנה

```bash
# שכפול הפרויקט
git clone https://github.com/aviranmz/myvoice.git
cd myvoice

# התקנת תלויות
npm install

# הרצה בסביבת פיתוח
npm run dev

# בניית הפרויקט
npm run build

# בדיקת Build
npm run preview
```

### סקריפטים זמינים

- `npm run dev` - הרצה בסביבת פיתוח
- `npm run build` - בניית הפרויקט לייצור
- `npm run preview` - תצוגה מקדימה של Build
- `npm run lint` - בדיקת איכות קוד
- `npm run lint:fix` - תיקון אוטומטי של בעיות קוד
- `npm run format` - עיצוב קוד עם Prettier
- `npm run format:check` - בדיקת עיצוב קוד
- `npm run test` - הרצת בדיקות

## מבנה הפרויקט

```
kol-haezrah/
├── public/                 # קבצים סטטיים
│   ├── robots.txt         # הגדרות SEO
│   └── sitemap.xml        # מפת אתר
├── src/                   # קוד מקור
│   ├── App.jsx           # רכיב ראשי
│   ├── App.css           # עיצוב רכיב ראשי
│   ├── index.css         # עיצוב גלובלי
│   └── main.jsx          # נקודת כניסה
├── .eslintrc.js          # הגדרות ESLint
├── .prettierrc           # הגדרות Prettier
├── .gitignore            # קבצים להתעלמות
├── index.html            # HTML ראשי
├── package.json          # תלויות וסקריפטים
└── vite.config.js        # הגדרות Vite
```

## תכונות נגישות

- **ניווט במקלדת** - תמיכה מלאה בניווט עם Tab
- **קוראי מסך** - תמיכה ב-ARIA labels
- **ניגודיות** - עמידה בתקני WCAG AA
- **Skip Links** - דילוג לתוכן ראשי
- **Focus Management** - ניהול פוקוס ברור

## SEO ואנליטיקה

- **Google Analytics** - מעקב אחר ביצועים (G-EF3TND4Z7L)
- **Meta Tags** - מטא-תגים מותאמים
- **OpenGraph** - שיתוף ברשתות חברתיות
- **Sitemap** - מפת אתר לSEO
- **Robots.txt** - הנחיות למנועי חיפוש

## פריסה

הפרויקט מוכן לפריסה ב:

- **Vercel** - מומלץ
- **Netlify** - חלופה טובה
- **GitHub Pages** - חינמי

### פריסה ל-Vercel

```bash
# התקנת Vercel CLI
npm i -g vercel

# פריסה
vercel --prod
```

## רישיון

© 2024 קול האזרח. כל הזכויות שמורות.

## קשר

- **אימייל**: kol.haezrah@gmail.com
- **וואטסאפ**: [צור קשר](https://wa.me/972505099936)
- **אתר**: https://kol-haezrah.com
