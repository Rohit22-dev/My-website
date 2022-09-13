import React, { useRef, useState, useEffect } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const form = useRef();

  const [done, setDone] = useState(false);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [mess, setMess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2w3mi54",
        "template_o9o8w49",
        form.current,
        "-GnJU9lc96so5VZ4K"
      )
      .then(
        (result) => {
          setUser("");
          setEmail("");
          setMess("");
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
    });
  }, []);

  return (
    <div className="c-form col-md-10 mx-auto" id="cont" data-aos="zoom-in">
      <div className="c-left col-md-6">
        <p>Contact me</p>
        <p>Get in touch</p>
      </div>

      <div className="c-right col-md-6">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="c-user"
            placeholder="Name"
          />
          <input
            type="text"
            name="user_email"
            className="c-user"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            name="message"
            className="c-user"
            placeholder="Message"
            value={mess}
            onChange={(e) => setMess(e.target.value)}
          />
          <input type="submit" value="Submit" className="c-btn" />
          <span>{done && "Thanks for contacting me!"}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
