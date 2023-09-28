import React, { useEffect, useState } from "react";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import styles from '../CSS/favorites.module.css'

const BoxCard = ({ data, onRemoveFavorite }) => {
  const handleRemoveFavorite = () => {
    onRemoveFavorite(data.id);
  };

  return (
    <div className={styles.card}>
      <img className={styles.image} src={data.image} alt={data.name} />
      <h3 className={styles.title}>{data.name}</h3>
      <button className={styles.removeButton} onClick={handleRemoveFavorite}>
        Remove
      </button>
    </div>
  );
};

export const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const dummyFavorites = [
      { id: 1, name: "Restaurant 1", image: "image1.jpg" },
      { id: 2, name: "Restaurant 2", image: "image2.jpg" },
      { id: 3, name: "Restaurant 3", image: "image3.jpg" },
      { id: 4, name: "Restaurant 4", image: "image4.jpg" },
    ];

    setFavorites(dummyFavorites);
  }, []);

  const removeFavorite = (favoriteId) => {
    
    const updatedFavorites = favorites.filter((favorite) => favorite.id !== favoriteId);
    setFavorites(updatedFavorites);
  };

  return (
    <div className={styles.container}>
      <Navbar />

      <div className={styles.main}>
        <h10 className={styles.h10}>My Favorites</h10>
      </div>




      <div className={styles.content}>

        <div className={styles.favoriteWrapper}>
          <h2 className={styles.subheading}>Favorites</h2>
          <div className={styles.favoriteContainer}>
            {favorites.map((favorite) => (
              <BoxCard
                key={favorite.id}
                data={favorite}
                onRemoveFavorite={removeFavorite}
              />
            ))}
          </div>
        </div>

      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};