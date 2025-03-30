# 🎬 Movie App - מערכת לניהול ספריית סרטים

מערכת אינטראקטיבית להצגת, הוספה, עריכה ומחיקה של סרטים, כולל ספרייה נפרדת לסרטי הארי פוטר, תמיכה בנגישות מלאה, ומצב יום/לילה. נבנה עם React + JSON Server.

---

## ✨ פיצ'רים עיקריים

- הצגת רשימת סרטים מעוצבת עם אפקט hover
- תצוגת פרטי סרט עם תמונה ותקציר
- **הוספת סרט חדש** דרך טופס
- **עריכת סרט קיים**
- **מחיקת סרט**
- **חיפוש סרטים**
- **דירוג כוכבים**
- **מצב יום/לילה (Theme Toggle)**
- **תמיכה בנגישות מלאה**:
  - הגדלה/הקטנת טקסט
  - ניגודיות גבוהה
  - פונט קריא
  - איפוס הגדרות

---

## 🧠 טכנולוגיות בשימוש

- React
- React Router
- Styled Components
- JSON Server
- React Icons
- Local Storage
- Git + GitHub

---

## ⚙️ איך מריצים את הפרויקט

### שלב 1: התקנת התלויות

```bash
npm install
```

### שלב 2: הרצת שרת JSON

```bash
npx json-server --watch db.json --port 3001
```

### שלב 3: הרצת אפליקציית React

```bash
npm start
```

---

## 🗂️ מבנה הפרויקט

```
movie-app/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── AccessibilityPanel.jsx
│   │   ├── AddMovieForm.jsx
│   │   ├── Navbar.jsx
│   │   └── StarRating.jsx
│   ├── context/
│   │   └── AccessibilityContext.jsx
│   ├── pages/
│   │   ├── AddMoviePage.jsx
│   │   ├── EditMoviePage.jsx
│   │   ├── HarryPotterMovies.jsx
│   │   ├── MovieDetails.jsx
│   │   └── MovieList.jsx
│   ├── themes/
│   │   ├── GlobalStyle.js
│   │   └── theme.js
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── MoviesApi.js
│   ├── reportWebVitals.js
│   └── setupTests.js
├── db.json
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## פותח על ידי: עומר מוסאי
