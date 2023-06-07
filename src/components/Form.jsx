import React from 'react';
import '../styles/form.css';
import emailjs from 'emailjs-com';

function Form() {

  function sendMail(e) {
    e.preventDefault();
  
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
  
    // Check if any of the form fields are empty
    if (!name || !email || !message) {
      alert('Please fill in all the fields');
      return;
    }
  
    emailjs
      .send('service_j9syosu', 'template_y3xwvpb', {
        from_name: name,
        from_email: email,
        message: message,
      }, 'MkEHryb1TJfzXGljg')
      .then((result) => {
        console.log(result.text);
        alert('Your message has been successfully sent!');
      })
      .catch((error) => {
        console.log("Error:", error);
        return; // Stop further execution
      });
  
    // Reset the form after sending
    e.target.reset();
  }
  
  
  

  return (
    <div id="contact">
      <h2 class="formtitle">Detaylı bilgi almak için formu doldurun..</h2>
      <form  onSubmit={sendMail}>
        <div class="form-group">
          <label for="name">Ad ve Soyad</label>
          <input type="text" class="form-control" id="name" placeholder="Adınızı ve Soyadınızı Giriniz"/>
        </div>
        <div class="form-group">
          <label for="email">E-posta</label>
          <input type="email" class="form-control" id="email" placeholder="E-posta adresinizi Giriniz"/>
        </div>
        <div class="form-group">
          <label for="message">Mesaj</label>
          <textarea class="form-control" id="message" rows="3" placeholder="Mesajızını Giriniz"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Gönder</button>
      </form>
      <script src="https://cdn.emailjs.com/sdk/2.3.2/email.min.js"></script>

    </div>
  );
}

export default Form;
