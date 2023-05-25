import React from 'react';
 import '../styles/body.css';

function Body1() {
  return (
    <div >
     <div class="container">
        <h1 class="title">Bizimle keşfedin!</h1>
        <div class="description">
        <p>FezariTech, denizlerde ve iç sularda gözlem, ölçüm, veri toplama ve su altı haritalama çalışmaları için donanım ve yazılım çözümleri geliştirmektedir.</p>
            {/*<button class="rounded-shadow-button"> Keşfet...</button> */}    
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
