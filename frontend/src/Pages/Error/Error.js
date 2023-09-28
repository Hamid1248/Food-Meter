import React from "react";
import { Navbara } from "../../Components/Navbara";
import { Footer } from "../../Components/Footer";
import { Link } from "react-router-dom";
import styles from './Error.module.css'

export const Error = () => {
  return (
    <div>
        <Navbara/>
    <div className={styles.container}>
      <div className={styles.heading}>Error 404 - Page not Found</div>
      <div className={styles.message}>Go back to  
        <Link className={styles.homeLink} to={'/'}>
         home</Link></div>
    </div>
    <Footer/>
    </div>
  );
};