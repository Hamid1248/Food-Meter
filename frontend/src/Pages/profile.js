import React, { useState } from 'react';
import '../CSS/profile.css';
import { Navbar } from '../Components/Navbar';
import { Footer } from '../Components/Footer';

export const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('Harris ahmed');
  const [email, setEmail] = useState('jharis@gmail.com');
  const [phoneNumber, setPhoneNumber] = useState('123-456-7890');
  const [password, setPassword] = useState('********');
  const [profilePicture, setProfilePicture] = useState('');

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleUpdateDetails = () => {
    // Perform necessary actions to update the user details
    handleCloseModal();
  };
  const handleUpdateProfilePicture = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setProfilePicture(e.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
    <div className='page'>
    <div className="layout">
        <Navbar />
        <div className="user-profile-container">
      <div className="user-profile-card">
        <div className="user-profile-picture">
          <img src={profilePicture} alt="Profile" />
          <input type="file" accept="image/*" onChange={handleUpdateProfilePicture} />
        </div>
        <h2 className="user-profile-name">{name}</h2>
        <p className="user-profile-email">Email: {email}</p>
        <p className="user-profile-phone">Phone Number: {phoneNumber}</p>
        <p className="user-profile-password">Password: {password}</p>
        <button className="update-details-button" onClick={handleOpenModal}>
          Update Details
        </button>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Update Details</h2>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="modal-update-button" onClick={handleUpdateDetails}>
              Update
            </button>
            <button className="modal-close-button" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
    <Footer/>
    </div>
    </>
  );
};

