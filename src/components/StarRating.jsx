import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ rating, onRate }) => {
  const [hover, setHover] = useState(null);

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          size={20}
          color={star <= (hover || rating) ? "#e50914" : "#444"}
          onClick={() => onRate(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(null)}
          style={{ cursor: "pointer", transition: "color 0.2s ease" }}
        />
      ))}
    </div>
  );
};

export default StarRating;
