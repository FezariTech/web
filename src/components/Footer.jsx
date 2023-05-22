import React from 'react';
 import '../styles/footer.css';

function Footer() {
  return (
    
    

    <section class="footer">
      <div class="social">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-linkedin-in"></i></a>
      </div>
      <ul class="list">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <p class="copyright">
        &copy; 2021 | All rights reserved
      </p>
    </section>
  );
}

export default Footer;
