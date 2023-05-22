import React from 'react';
 import '../styles/partner.css';
 import TeknofestLogo from '../assets/images/Teknofest_logo.png';
 import KtuLogo from '../assets/images/Karadeniz_Technical_University_logo.svg.png';
 import TubitakLogo from '../assets/images/TÜBİTAK_logo.svg.png';




function Partners() {
  return (
    <div id="partners" className="partners">
    <section id="partners">
      <h2 class="logostitle">İş birliklerimiz</h2>
      <div class="partners-container">
        <ul class="partner-list">
        
        
          <li><img src={TeknofestLogo}  alt="Partner 11 Logo"/></li>
          <li><img src= {KtuLogo} alt="Partner 2 Logo"/></li>
          <li><img src= {TubitakLogo} alt="Partner 2 Logo"/></li>
          <li><img src= {TeknofestLogo} alt="Partner 2 Logo"/></li>


          {/* <li style={{backgroundImage: "url('./images/Teknofest_logo.png')" , width: '300px', height: '225px'}}></li> */}
          {/* <li style={{backgroundImage: `url(${require('../../assets/images/Teknofest_logo.png') })`, width: '300px', height: '225px'}}></li> */}

          

        </ul>
      </div>
    </section>
  </div>
  
  );
}

export default Partners;
