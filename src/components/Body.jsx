import React from 'react';
 import '../styles/body.css';

function Body1() {
  return (
    <div >
     <div class="container">
        <h1 class="title">Gemide Bir Dünya Markası!</h1>
        <div class="description">
        <p>Denizlerde ölçüm yapma, veri toplama ve balık popülasyonu gibi konuların araştırılması için birçok kişi ve
            tüzel kuruluş,
            çalışmalar yapmaktadır. Bu çalışmalardaki yüksek maliyeti düşürmek, hava muhalefeti nedeniyle yaşanabilecek
            sorunları en aza indirmek için bir
            insansız bir su aracı geliştiriyoruz. </p>
         
            <button class="rounded-shadow-button"> Keşfet

</button>
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
