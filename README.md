# 🎬 Movie App – Interactive Movie Library System

A fully interactive system for managing a movie library. Built with React + JSON Server, inspired by Netflix-style design. Supports adding, editing, deleting, and rating movies – with accessibility features and light/dark theme toggle.

---

## ✨ Key Features

- 🎥 Display of movies with image & summary  
- ➕ Add / 📝 Edit / ❌ Delete movie entries  
- ⭐ Star rating for each movie  
- 🎨 Light/Dark Theme Toggle  
- ♿ Accessibility panel:  
  - Text resizing  
  - High contrast  
  - Readable font  
  - Reset settings  
- 🔍 Real-time movie search  
- 📂 Dedicated *Harry Potter* movie collection  
- 🧪 Responsive design with smooth hover effects

---

## 🧠 Tech Stack

> **React**, **React Router**, **Styled Components**, **React Icons**,  
> **JSON Server**, **Local Storage**, **Git + GitHub**

---

## 🚀 Installation & Usage

### Step 1: Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/movie-app.git
cd movie-app
```
Step 2: Install dependencies
bash
Copy
Edit
npm install
Step 3: Start the JSON Server
bash
Copy
Edit
npx json-server --watch db.json --port 3001
Step 4: Start the React App
bash
Copy
Edit
npm start
Now visit http://localhost:3000 in your browser.

📁 Project Structure
pgsql
Copy
Edit
movie-app/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   └── manifest.json
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
│   │   ├── theme.js
│   │   └── GlobalStyle.js
│   ├── App.js
│   ├── App.css
│   ├── MoviesApi.js
│   ├── index.js
│   └── index.css
├── db.json
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

👤 Developed by - Omer Musay
This project was created as part of a full-stack course final assignment.
