import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MovieList from "./pages/MovieList";
import MovieDetails from "./pages/MovieDetails";
import HarryPotterMovies from "./pages/HarryPotterMovies";
import Navbar from "./components/Navbar";
import AddMoviePage from "./pages/AddMoviePage";
import EditMoviePage from "./pages/EditMoviePage";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes/theme";
import GlobalStyle from "./themes/globalStyle";
import { useState } from "react";
import { AccessibilityProvider } from "./context/AccessibilityContext";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <AccessibilityProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar onToggleTheme={() => setIsDarkMode((prev) => !prev)} />
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/list" element={<MovieList />} />
          <Route path="/details/:movieId" element={<MovieDetails />} />
          <Route path="/harrypotter" element={<HarryPotterMovies />} />
          <Route path="/add" element={<AddMoviePage />} />
          <Route path="/edit/:movieId" element={<EditMoviePage />} />
        </Routes>
        <ToastContainer
          position="top-center"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
          theme="dark" // ✅ נטפליקס סטייל
        />
      </BrowserRouter>
    </AccessibilityProvider>
  );
}

export default App;
