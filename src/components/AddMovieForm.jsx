import { useState } from "react";
import { addMovie } from "../MoviesApi";
import { FaPlus } from "react-icons/fa";

const AddMovieForm = ({ onAdd }) => {
  const [newMovie, setNewMovie] = useState({
    name: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onAdd(newMovie); // שליחה לשרת
      setNewMovie({ name: "", description: "", image: "" }); // איפוס טופס
    } catch (err) {
      console.error("Failed to add movie:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input
        type="text"
        name="name"
        placeholder="Movie Name"
        value={newMovie.name}
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <textarea
        name="description"
        placeholder="Description"
        value={newMovie.description}
        onChange={handleChange}
        required
        style={{ ...inputStyle, height: "120px", resize: "none" }}
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={newMovie.image}
        onChange={handleChange}
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>
        <FaPlus style={{ marginRight: "8px" }} />
        Add Movie
      </button>
    </form>
  );
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center", // ✅ זה מרכז את התוכן!
  gap: "15px",
  width: "100%",
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
  justifyContent: "center", // ✅ מרכז גם את האייקון והטקסט
  alignItems: "center",
};

export default AddMovieForm;
