import React from 'react';
 import '../styles/body.css';

function Body1() {
  return (
    <div >
     <div class="container">
        <h1 class="title">Su altını bizimle keşfedin!</h1>
        <div class="description">
        <p>FezariTech, tatlı ve tuzlu sucul ortamlarda ölçüm yapma, veri toplama, su altı haritalama için birçok kurum ve kuruluş ile çalışmalar yapmaktadır. 
          Yüksek maliyetli gözlem ve izleme faaliyetlerini otonom İDA teknolojilerimiz ile azaltıyor, zaman ve iş gücü tasarrufu sağlıyoruz. </p>
         
            <button class="rounded-shadow-button"> Keşfet...</button>
        </div>
       
      </div>
      <div id="scroll-icon">
        <a href="#section1">
          <i class="fas fa-arrow-down"></i>
        </a>
      </div>

    </div>


  );
}

export default Body1;
