import React from 'react';
 import '../styles/footer.css';

function Footer() {
  return (
    <section className="footer">
      <div class="social">
      <a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
      <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
      <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
      <a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
      </div>

      <ul className="list">
        <li><a href='anaSayfa'>Ana Sayfa</a></li>
        <li><a href='hakkimizda'>Hakkımızda</a></li>
        <li><a href='hizmetler'>Hizmetlerimiz</a></li>
        <li><a href='iletisim'>İletişim</a></li>
      </ul>

      <p class="copyright">
        &copy; 2023 | Tüm hakları saklıdır.
      </p>
    </section>
  );
}

export default Footer;
