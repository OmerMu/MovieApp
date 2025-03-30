import { useNavigate } from "react-router-dom";
import AddMovieForm from "../components/AddMovieForm";
import { addMovie } from "../MoviesApi";
import { toast } from "react-toastify";

const AddMoviePage = () => {
  const navigate = useNavigate();

  const handleAdd = async (movieData) => {
    try {
      await addMovie(movieData); // שליחה לשרת
      toast.success("Movie added successfully! 🎉");
      navigate("/"); // ✅ חזרה לדף הבית
    } catch (error) {
      toast.error("Failed to add movie ❌");
      console.error("Error adding movie:", error);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#121212",
        minHeight: "100vh",
        padding: "40px 20px",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
          Add a New Movie
        </h2>
        <AddMovieForm onAdd={handleAdd} />
      </div>
    </div>
  );
};

export default AddMoviePage;
