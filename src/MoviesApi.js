const BASE_URL = "http://localhost:3001";

//  כל הסרטים
export const fetchMovies = async () => {
  const res = await fetch(`${BASE_URL}/movies`);
  const data = await res.json();
  return data;
};

export const addMovie = async (movie) => {
  const res = await fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(movie),
  });
  return res.json();
};

export const deleteMovie = async (id) => {
  await fetch(`${BASE_URL}/movies/${id}`, {
    method: "DELETE",
  });
};

export const updateMovie = async (id, updatedMovie) => {
  const res = await fetch(`${BASE_URL}/movies/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedMovie),
  });
  return res.json();
};

// סרטים של הארי פוטר
export const fetchHarryPotterMovies = async () => {
  const res = await fetch(`${BASE_URL}/harrypotter`);
  const data = await res.json();
  return data;
};

export const addHarryPotterMovie = async (movie) => {
  const res = await fetch(`${BASE_URL}/harrypotter`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(movie),
  });
  return res.json();
};

export const deleteHarryPotterMovie = async (id) => {
  await fetch(`${BASE_URL}/harrypotter/${id}`, {
    method: "DELETE",
  });
};

export const updateHarryPotterMovie = async (id, updatedMovie) => {
  const res = await fetch(`${BASE_URL}/harrypotter/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedMovie),
  });
  return res.json();
};
