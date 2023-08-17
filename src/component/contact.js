import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_11whge8",
        "template_zdl0h2h",
        form.current,
        "_4uaal6BIvDKfqqqT"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent")
        },
        (error) => {
          console.log(error.text);
        }
      );

      e.target.reset()
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col">
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <button type="submit">
      submit 
      </button>
    </form>
  );
};
export default ContactUs;
