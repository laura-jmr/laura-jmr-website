import './Contacts.css'

function Contacts() {
  return (
    <div className="page-contacts, page">
      <h1 className='page-h1'>Contacts</h1>
      <div id="contacts-container">
        <ul id="contacts-container-list">
          <li>laura.juergensmeier@gmail.com</li>
          <li>github.com/laura-jmr</li>
          <li>linkedin.com/laura-jmr</li>
        </ul>
        <form id="contact-container-form" action="#" method="post">
          <div>
            <label for="name">Name:</label>
            <input class="contact-container-form-input" type="text" id="contact-container-form-name" name="name" required/>
          </div>
          <div>
            <label for="email">Email:</label>
            <input class="contact-container-form-input" type="text" id="contact-container-form-email" name="email" required/>
          </div>
          <div>
            <label for="message">Message:</label>
            <textarea class="contact-container-form-input" id="contact-container-form-message" name="message" rows="4" required/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contacts;
