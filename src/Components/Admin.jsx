import React, { useState, useEffect } from 'react';
import './Admin.css';


function Admin() {

  const images = [
    'https://s-i.huffpost.com/gen/4502696/images/o-OPERATION-HOSPITAL-facebook.jpg',
    'https://i0.wp.com/bdtechtalks.com/wp-content/uploads/2019/08/doctor-patient-healthcare-medicine.jpg?fit=4493%2C2995&ssl=1',
    'https://cdn.britannica.com/76/82676-050-E95B5C00/nurses-patients-care-procedures.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="slideshow-container">
      {images.map((imageUrl, index) => (
        <div key={index} className={`image-container ${index === currentImageIndex ? 'fade-in' : 'fade-out'}`}>
          <img
            src={imageUrl}
            alt=""
          />
          <div className="image-text">
            <h2 style={{color:'black', textAlign:'center',}}>BookMyDoc</h2>
            <p><i>Connecting you to trusted healthcare, one click at a time.</i></p>
          </div>
        </div>
      ))}

      
    </div>
  );
}

export default Admin;
