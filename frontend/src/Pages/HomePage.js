import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../Components/Navbar';
import { Footer } from '../Components/Footer';
import styles from '../CSS/home.module.css';
import img from '../images/256_subway.jpg';
import Img from '../images/McDonalds-Logo.png';
import imag from '../images/hardees4024.jpg';
import { useRef } from 'react';

export const HomePage = () => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior : 'smooth'});
  };

  return (
    <>
      <div className={styles.container}></div>
      <div className={styles.layout}>
        <Navbar />
        <div className={styles.main}>
          <div className={styles.header}>

            <div className={styles.tagline}>
              <h9 className={styles.h9}>Food Meter</h9>
              <h10 className={styles.h10}>Your Trustworthy AI Foodie Companion</h10>
            </div>


            <div className={styles.buttons}>
              <div className={styles.searchbutton}>
                <h6 className={styles.h6}>Search Restaurant</h6>
              </div>
              <div className={styles.featured} onClick={handleClick}>
                <h6 className={styles.h7}>Featured Restaurants</h6>
              </div>
            </div>
            
          </div>
        
          <div ref={ref}></div>
          <h8 className={styles.h8}>Featured Restaurants</h8>

          <div className={styles.grid}>
            <div className={styles.card}>
              <img src={img} alt="Restaurant" className={styles.cardImage} />
              <div className={styles.cardContent}>
                <h4 className={styles.cardTitle}>Subway</h4>
                <p className={styles.cardText}>Eat Fresh</p>
                <Link to="/ReviewPortal" className={styles.cardLink}>Read More</Link>
              </div>
            </div>

            <div className={styles.card}>
              <img src={Img} alt="Restaurant" className={styles.cardImage} />
              <div className={styles.cardContent}>
                <h4 className={styles.cardTitle}>Mcdonalds</h4>
                <p className={styles.cardText}>I am lovin it</p>
                <Link to="/ReviewPortal" className={styles.cardLink}>Read More</Link>
              </div>
            </div>

            <div className={styles.card}>
              <img src={imag} alt="Restaurant" className={styles.cardImage} />
              <div className={styles.cardContent}>
                <h4 className={styles.cardTitle}>Kfc</h4>
                <p className={styles.cardText}>It's finger licking good</p>
                <Link to="/ReviewPortal" className={styles.cardLink}>Read More</Link>
              </div>
            </div>
            
          </div>
        </div>

        <Footer />
      </div>
      
    </>
  );
};
