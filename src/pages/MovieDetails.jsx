import { useParams, Link, useLocation } from "react-router-dom";
import { fetchMovies, fetchHarryPotterMovies } from "../MoviesApi";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovie = async () => {
      try {
        const category = new URLSearchParams(location.search).get("category");
        const movies =
          category === "harrypotter"
            ? await fetchHarryPotterMovies()
            : await fetchMovies();

        if (Array.isArray(movies)) {
          const selectedMovie = movies.find((m) => String(m.id) === movieId);

          setTimeout(() => {
            setMovie(selectedMovie);
            setLoading(false);
          }, 1300); // השהייה של 2 שניות
        } else {
          console.error("Movies is not an array:", movies);
          setLoading(false);
        }
      } catch (err) {
        console.error("Error loading movie details:", err);
        setLoading(false);
      }
    };

    loadMovie();
  }, [movieId, location.search]);

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  if (!movie) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Movie not found!</h2>
        <Link to="/" style={{ textDecoration: "none", color: "#00bcd4" }}>
          Back to All Movies
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <img
        src={movie.image}
        alt={movie.name}
        style={{ width: "300px", height: "400px", borderRadius: "8px" }}
      />
      <h1>{movie.name}</h1>
      <p style={{ color: "#555" }}>{movie.description}</p>
      <Link
        to="/"
        style={{
          display: "inline-block",
          padding: "10px 20px",
          backgroundColor: "#00bcd4",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px",
          marginTop: "20px",
        }}
      >
        Back to All Movies
      </Link>
    </div>
  );
};

export default MovieDetails;
