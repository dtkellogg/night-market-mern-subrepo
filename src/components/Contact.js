import React from "react";
import axios from "axios";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  console.log(name);

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSubmit = {
      name,
      email,
      phone,
      subject,
      message,
    };

    axios.post("/api/sendMail", dataToSubmit);
    setName('')
    setEmail('')
    setPhone('')
    setSubject('')
    setMessage('')
    setSubmitted(true)
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__header">
        <h1>Any Questions?</h1>
        <h4>Please leave us a message here.</h4>
        {submitted && <p>Email has been sent.</p>}
      </div>
      <div className="form__content">
        <div className="form__element">
          {/* <label>Name</label> */}
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form__element">
          {/* <label>Email</label> */}
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form__element">
          {/* <label>Phone Number</label> */}
          <input
            type="text"
            placeholder="Your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form__element">
          {/* <label>Subject</label> */}
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="form__element form__message">
          {/* <label>Message</label> */}
          <textarea
            type="text"
            placeholder="Please enter your message here."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div className="btn__glow-container">
          <a href="#" className="btn__glow-item">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit it!
          </a>
        </div>
      </div>
    </form>
  );
}

// Form needs:
// 1. name
// 2. email
// 3. phone (optional)
// 4. subject
// 5. message
