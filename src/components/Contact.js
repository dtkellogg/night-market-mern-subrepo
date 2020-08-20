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
    <form onSubmit={handleSubmit}>
      {submitted && <p>Email has been sent.</p>}
      <p>
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </p>
      <p>
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </p>
      <p>
        <label>Phone Number</label>
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </p>
      <p>
        <label>Subject</label>
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </p>
      <p>
        <label>Message</label>
        <textarea
          type="text"
          placeholder="Please enter your message here."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="btn" onClick={handleSubmit}>
          Submit it!
        </button>
      </p>
    </form>
  );
}

// Form needs:
// 1. name
// 2. email
// 3. phone (optional)
// 4. subject
// 5. message
