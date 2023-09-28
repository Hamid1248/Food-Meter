import React, { useState, useEffect } from "react";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import styles from "../CSS/review.module.css";

export const ReviewPortal = () => {
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch restaurant details and comments
    // ...

    // Mocked data for restaurant details
    const fetchedRestaurantDetails = {
      name: "Restaurant",
      image: "Image",
      description: "A place where food dreams come true",
      contactNumber: "123-456-7890",
      address: "123 Main Street, City",
      email: "Restaurant@example.com",
      systemRating: "-",
    };

    // Mocked data for comments
    const fetchedComments = [
      {
        id: 1,
        username: "JohnDoe",
        comment: "Great restaurant!",
      },
      {
        id: 2,
        username: "JaneSmith",
        comment: "Amazing food and service!",
      },
    ];

    setRestaurantDetails(fetchedRestaurantDetails);
    setComments(fetchedComments);
  }, []);

  const handleRatingChange = (event) => {
    const inputRating = event.target.value;
    if (inputRating >= 1 && inputRating <= 5) {
      setRating(inputRating);
    }
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    // Submit the rating and comment
    // ...
  };

  const handleShowMoreDetails = () => {
    // Handle showing more details
    // ...
  };

  return (
    <div className={styles.container}>
      <Navbar />

      <div className={styles.content}>
        <h1 className={styles.heading}>Restaurant Details</h1>

        {restaurantDetails && (
          <div className={styles["restaurant-container"]}>
            <div className={styles["restaurant-box"]}>
              <img
                className={styles["restaurant-image"]}
                src={restaurantDetails.image}
                alt="Restaurant"
              />
              <div className={styles["restaurant-info"]}>
                <h2 className={styles["restaurant-name"]}>
                  {restaurantDetails.name}
                </h2>
                <p>{restaurantDetails.description}</p>
                <p>Contact: {restaurantDetails.contactNumber}</p>
                <p>Address: {restaurantDetails.address}</p>
                <p>Email: {restaurantDetails.email}</p>
              </div>
            </div>
            <button
              className={styles["show-more-details"]}
              onClick={handleShowMoreDetails}
            >
              Show more details
            </button>
          </div>
        )}

        <div className={styles["ratings-container"]}>
          <div className={styles.rating}>
            <p>System Rating</p>
            <p>{restaurantDetails ? restaurantDetails.systemRating : "-"}</p>
          </div>

          <div className={styles.rating}>
            <p>User Rating</p>
            <p>{rating || "-"}</p>
          </div>
        </div>

        <div className={styles["review-form"]}>
          <div className={styles["rating-comment-box"]}>
            <div className={styles["rating-input"]}>
              <label>Rate the restaurant:</label>
              <input
                type="number"
                min="1"
                max="5"
                value={rating}
                onChange={handleRatingChange}
              />
            </div>
            <div className={styles["comment-input"]}>
              <label>Leave a comment:</label>
              <textarea
                value={comment}
                onChange={handleCommentChange}
              ></textarea>
            </div>
            <button className={styles["submit-button"]} onClick={handleSubmit}>
              Submit
            </button>
          </div>

          <div className={styles["previous-comments"]}>
            <h3>Previous Comments</h3>
            <ul className={styles["comment-list"]}>
              {comments.map((comment) => (
                <li key={comment.id} className={styles["comment-item"]}>
                  <p className={styles["user-name"]}>{comment.username}</p>
                  <p className={styles["comment-content"]}>
                    {comment.comment}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};