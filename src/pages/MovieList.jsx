import { useEffect, useState } from "react";
import { fetchMovies, deleteMovie } from "../MoviesApi";
import { Link } from "react-router-dom";
import StarRating from "../components/StarRating";
import { FaPlay } from "react-icons/fa";

const movieListStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
  gap: "20px",
  padding: "20px",
  justifyContent: "center",
};

const movieCardStyle = {
  position: "relative",
  backgroundColor: "#1c1c1c",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  cursor: "pointer",
  height: "100%",
};

const imageStyle = {
  width: "100%",
  height: "300px",
  objectFit: "cover",
  display: "block",
};

const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.85)",
  color: "white",
  opacity: 1,
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  transition: "opacity 0.3s ease",
  boxSizing: "border-box",
};

const linkStyle = {
  width: "75%",
  padding: "10px 15px",
  backgroundColor: "#e50914",
  color: "white",
  textDecoration: "none",
  borderRadius: "5px",
  fontWeight: "bold",
  textAlign: "center",
  boxSizing: "border-box",
};

const deleteButtonStyle = {
  ...linkStyle,
  backgroundColor: "#b0060f",
};

const editButtonStyle = {
  ...linkStyle,
  backgroundColor: "#f39c12",
};

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredId, setHoveredId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const loadMovies = async () => {
      const moviesFromApi = await fetchMovies();
      setMovies(moviesFromApi);
      setLoading(false);
    };
    loadMovies();
  }, []);

  const handleDelete = async (id) => {
    await deleteMovie(id);
    setMovies((prev) => prev.filter((m) => m.id !== id));
  };

  const handleRating = async (movieId, newRating) => {
    await fetch(`http://localhost:3001/movies/${movieId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rating: newRating }),
    });
    setMovies((prev) =>
      prev.map((m) => (m.id === movieId ? { ...m, rating: newRating } : m))
    );
  };

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading movies...</p>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>Movie List</h1>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "12px",
            width: "80%",
            maxWidth: "400px",
            borderRadius: "8px",
            border: "1px solid #555",
            backgroundColor: "#2c2c2c",
            color: "white",
            fontSize: "16px",
          }}
        />
      </div>

      <div style={movieListStyle}>
        {movies
          .filter((movie) =>
            movie.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((movie) => (
            <div
              key={movie.id}
              style={{
                ...movieCardStyle,
                transform: hoveredId === movie.id ? "scale(1.05)" : "scale(1)",
                zIndex: hoveredId === movie.id ? 2 : 1,
              }}
              onMouseEnter={() => setHoveredId(movie.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img src={movie.image} alt={movie.name} style={imageStyle} />
              <h2
                style={{
                  textAlign: "center",
                  color: "white",
                  marginTop: "10px",
                }}
              >
                {movie.name}
              </h2>

              {hoveredId === movie.id && (
                <div style={overlayStyle}>
                  <div>
                    <p style={{ fontSize: "14px", lineHeight: "1.5" }}>
                      {movie.description}
                    </p>
                    <StarRating
                      rating={movie.rating || 0}
                      onRate={(newRating) => handleRating(movie.id, newRating)}
                    />
                  </div>
                  <button
                    style={{
                      width: "100%",
                      padding: "10px 15px",
                      backgroundColor: "#1db954", // ירוק Spotify-style
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      cursor: "pointer",
                    }}
                    onClick={() => alert(`Playing ${movie.name}...`)}
                  >
                    <FaPlay /> Play
                  </button>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <Link
                      to={`/details/${movie.id}`}
                      state={{ movie }}
                      style={linkStyle}
                    >
                      ▶️ View Details
                    </Link>
                    <button
                      style={deleteButtonStyle}
                      onClick={() => handleDelete(movie.id)}
                    >
                      Delete movie
                    </button>
                    <Link to={`/edit/${movie.id}`} style={editButtonStyle}>
                      Edit
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default MovieList;
