import { fetchHarryPotterMovies } from "../MoviesApi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
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
  width: "100%",
  padding: "10px 15px",
  backgroundColor: "#e50914",
  color: "white",
  textDecoration: "none",
  borderRadius: "5px",
  fontWeight: "bold",
  textAlign: "center",
  boxSizing: "border-box",
};

const HarryPotterMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const moviesFromApi = await fetchHarryPotterMovies();
        setMovies(moviesFromApi);
      } catch (err) {
        console.error("Error fetching Harry Potter movies:", err);
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <div className="spinner"></div>
        <p>Loading Harry Potter movies...</p>
      </div>
    );
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>
        Harry Potter Movies
      </h1>
      <div style={movieListStyle}>
        {movies.map((movie) => (
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
              style={{ textAlign: "center", color: "white", marginTop: "10px" }}
            >
              {movie.name}
            </h2>

            {hoveredId === movie.id && (
              <div style={overlayStyle}>
                <div>
                  <p style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    {movie.description}
                  </p>
                </div>
                <Link
                  to={`/details/${movie.id}?category=harrypotter`}
                  style={linkStyle}
                >
                  ▶️ View Details
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HarryPotterMovies;
