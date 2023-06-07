import React from "react";
import '../styles/positions.css';
import { faClock} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const OpenPositions = () => {
  const positions = [
    {
      title: "Gömülü Yazılım Mühendisi",
      location: "Trabzon",
      description: "C, C++ programlama dillerine hakim Qt Framework tecrübesi olan bilgisayar veya yazılım mühendisleri arıyoruz.",
    },
    {
      title: "Sosyal Medya Uzmanı",
      location: "Uzaktan çalışabilir.",
      description: "Şirketimizin sosyal medya hesaplarını etkin biçimde yönetebilecek, reklamcılık tecrübesi olan uzmanlar arıyoruz.",
    },
    {
      title: "Grafik Tasarımcı",
      location: "Uzaktan çalışabilir.",
      description: "Şirketimizin reklam, web ve sosyal medya faaliyetlerinde kullanılacak içerik üreticileri arıyoruz.",
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
