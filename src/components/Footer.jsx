import React from 'react';
 import '../styles/footer.css';

function Footer() {
  return (
    <section className="footer">
      <div class="social">
      <a href="https://www.youtube.com"><i className="fab fa-youtube"></i></a>
      <a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
      <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
      </div>

      <ul className="list">
        <li><a href='#home'>Ana Sayfa</a></li>
        <li><a href='#about'>Hakkımızda</a></li>
        <li><a href='#services'>Hizmetlerimiz</a></li>
        <li><a href='#contact'>İletişim</a></li>
      </ul>
      <h5>Email: info@fezaritech.com </h5>


      <p class="copyright">
        &copy; 2023 | Tüm hakları saklıdır.
      </p>
    </section>
  );
}

export default Footer;
