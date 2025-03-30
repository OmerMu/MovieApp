import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchMovies, updateMovie } from "../MoviesApi";
import { FaSave } from "react-icons/fa";

const EditMoviePage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const loadMovie = async () => {
      const allMovies = await fetchMovies();
      const selected = allMovies.find((m) => String(m.id) === movieId);
      setMovie(selected);
    };
    loadMovie();
  }, [movieId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateMovie(movie.id, movie);
    navigate("/");
  };

  if (!movie) {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
          color: "white",
          fontSize: "20px",
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#121212",
        minHeight: "100vh",
        padding: "40px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          backgroundColor: "#1c1c1c",
          borderRadius: "16px",
          padding: "30px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#e50914",
          }}
        >
          Edit Movie
        </h2>
        <form onSubmit={handleSubmit} style={formStyle}>
          <input
            type="text"
            name="name"
            placeholder="Movie Name"
            value={movie.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <textarea
            name="description"
            placeholder="Description"
            value={movie.description}
            onChange={handleChange}
            required
            style={{ ...inputStyle, height: "120px", resize: "none" }}
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={movie.image}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>
            <FaSave style={{ marginRight: "8px" }} />
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const inputStyle = {
  width: "100%",
  padding: "14px",
  borderRadius: "10px",
  border: "1px solid #333",
  backgroundColor: "#2c2c2c",
  color: "white",
  fontSize: "16px",
  outline: "none",
  boxSizing: "border-box",
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  borderRadius: "10px",
  backgroundColor: "#e50914",
  color: "white",
  border: "none",
  fontWeight: "bold",
  fontSize: "16px",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default EditMoviePage;
