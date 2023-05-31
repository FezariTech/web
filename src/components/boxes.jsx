import React from 'react';
import '../styles/boxes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faCoffee, faWater } from '@fortawesome/free-solid-svg-icons'


function Boxes() {
  return (
    
    <div id="services"  class="services">
    <h1>Hizmetlerimiz</h1>
    <div class="container3">
      <div class="box">
      <FontAwesomeIcon  icon={faClock}  className="my-icon"/>        
      <h2>Keşif ve Gözlem</h2>
        <p>Denizlerde ve iç sularda gözlem ve ölçüm faaliyetlerini otonom İDA teknolojilerimizle gerçekleştiriyor, maliyet, zaman ve iş gücü tasarrufu sağlıyoruz.</p>
        <ion-icon class="arrow" name="arrow-forward-outline"></ion-icon>
      </div>
      <div class="box">
      <FontAwesomeIcon icon={faCoffee}  className="my-icon"/>
      <h2>Gerçek Zamanlı Veri</h2>
        <p>GSM ve yüksek bant genişlikli radyo iletişimiyle gerçek zamanlı veri aktarımı gerçekleştiriyoruz.</p>
        <ion-icon class="arrow" name="arrow-forward-outline"></ion-icon>
      </div>
      <div class="box">
      <FontAwesomeIcon icon={faWater}  className="my-icon"/>
      <h2>Su Altı Haritalama</h2>
        <p>Yüksek çözünürlüklü sonar teknolojileriyle 3 boyutlu haritalama yapıyoruz.</p>
        <ion-icon class="arrow" name="arrow-forward-outline"></ion-icon>
      </div>
    </div>
    
  </div>
   
  );
}

export default Boxes;
