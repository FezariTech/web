import React from 'react';
import '../styles/boxes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCoffee, faWater } from '@fortawesome/free-solid-svg-icons';

const Boxes = () => {

  const service = [
    {
      title: "Keşif ve Gözlem",
      description: "Denizlerde ve iç sularda gözlem ve ölçüm faaliyetlerini otonom İDA teknolojilerimizle gerçekleştiriyor, maliyet, zaman ve iş gücü tasarrufu sağlıyoruz.",
    },
    {
      title: "Gerçek Zamanlı Veri",
      description: "GSM ve yüksek bant genişlikli radyo iletişimiyle gerçek zamanlı veri aktarımı gerçekleştiriyoruz.",
    },
    {
      title: "Su Altı Haritalama",
      description: "Yüksek çözünürlüklü sonar teknolojileriyle 3 boyutlu haritalama yapıyoruz.",
    },
    


  ];


  return (
<div>
  <h1>Hizmetlerimiz</h1>
    <div className="services">
      
      {service.map((service, index) => (
        <div key={index} className="service-box">
         <FontAwesomeIcon icon={faClock} className="my-icon" />
          <h3 className="service-title">{service.title}</h3>
          <p className="service-description">{service.description}</p>

        </div>
      ))}
    </div>
    </div>




    // <div id="services" className="services">
    //   <h1>Hizmetlerimiz</h1>
    //   <div className="container3">
    //     <div className="box">
    //       <FontAwesomeIcon icon={faClock} className="my-icon" />
    //       <h2>Keşif ve Gözlem</h2>
    //       <p>Denizlerde ve iç sularda gözlem ve ölçüm faaliyetlerini otonom İDA teknolojilerimizle gerçekleştiriyor, maliyet, zaman ve iş gücü tasarrufu sağlıyoruz.</p>
    //       <ion-icon className="arrow" name="arrow-forward-outline"></ion-icon>
    //     </div>
    //     <div className="box">
    //       <FontAwesomeIcon icon={faCoffee} className="my-icon" />
    //       <h2>Gerçek Zamanlı Veri</h2>
    //       <p>GSM ve yüksek bant genişlikli radyo iletişimiyle gerçek zamanlı veri aktarımı gerçekleştiriyoruz.</p>
    //       <ion-icon className="arrow" name="arrow-forward-outline"></ion-icon>
    //     </div>
    //     <div className="box">
    //       <FontAwesomeIcon icon={faWater} className="my-icon" />
    //       <h2>Su Altı Haritalama</h2>
    //       <p>Yüksek çözünürlüklü sonar teknolojileriyle 3 boyutlu haritalama yapıyoruz.</p>
    //       <ion-icon className="arrow" name="arrow-forward-outline"></ion-icon>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Boxes;
