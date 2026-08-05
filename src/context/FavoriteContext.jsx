
import { createContext, useEffect, useState } from "react";

export const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  useEffect(() => {
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  const addFavorite = (movie) => {
    if (
      favorites.some(
        (item) => item.imdbID === movie.imdbID
      )
    ) {
      return;
    }

    setFavorites([...favorites, movie]);
  };

  const removeFavorite = (id) => {
    setFavorites(
      favorites.filter(
        (movie) => movie.imdbID !== id
      )
    );
  };

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}