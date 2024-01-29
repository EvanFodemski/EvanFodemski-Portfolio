import React from "react";
import { useForm, ValidationError } from '@formspree/react';
import '../styles/contact.css';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mleqgglw");

  if (state.succeeded) {
    return <p className="getBack">Thanks! I'll get back to you as soon as I can.</p>;
  }

  return (
    <div>
      <div className="conTop">
        <h1>Contact me Now</h1>
      </div>

      <form onSubmit={handleSubmit}>
      
        <label htmlFor="email">Name:</label>
        <input id="name" type="name" name="name" />
        <ValidationError prefix="Name" field="name" errors={state.errors} />

        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
<div className="wrapper">
        <button className="button" type="submit" disabled={state.submitting}>
          Submit
        </button>
        </div>
      </form>
    </div>
  );
}
