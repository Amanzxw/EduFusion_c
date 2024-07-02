// import React from 'react';
// import './Contact.css';

// const Contact = () => {
//   return (
//     <div className="contact-form">
//       <h1>Contact Us</h1>
//       <form>
//         <label>
//           Name
//           <input type="text" placeholder="Your Name" />
//         </label>
//         <label>
//           Email
//           <input type="email" placeholder="Your Email" />
//         </label>
//         <label>
//           Message
//           <textarea placeholder="Your Message"></textarea>
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Contact;


import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        console.log('Message sent successfully!');
        // Optionally reset form fields or show a success message
        setName('');
        setEmail('');
        setMessage('');
      } else {
        console.error('Failed to send message.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="contact-form">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Message
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
