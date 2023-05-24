import React from "react";
import '../styles/positions.css';
import { faClock} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const OpenPositions = () => {
  const positions = [
    {
      title: "Gömülü Yazılım Mühendisi",
      location: "Trabzon",
      description: "We are looking for an experienced web developer to join our team in New York.",
    },
    {
      title: "Sosyal Medya Uzmanı",
      location: "Trabzon",
      description: "We are seeking a highly motivated Marketing Manager to help drive our business forward.",
    },
    {
      title: "Grafik Tasarımcı",
      location: "Trabzon",
      description: "We are looking for a talented Graphic Designer to join our growing team in Chicago.",
    },
  ];

  return (
    <div className="open-positions">
      {positions.map((position, index) => (
        <div key={index} className="position-box">
      <FontAwesomeIcon  icon={faClock}  className="my-icon"/>       
          <h3 className="position-title">{position.title}</h3>
          <p className="position-location">{position.location}</p>
          <p className="position-description">{position.description}</p>
          <button className="apply-button" onClick={() => window.location.href='#contact'}>Başvuru</button>

        </div>
      ))}
    </div>
  );
};

export default OpenPositions;
