import React, { useState } from 'react';
import styled from 'styled-components';
import {
  AiOutlineMail as MailIcon,
  AiOutlinePhone as PhoneIcon,
} from 'react-icons/ai';

const ContactStyles = styled.div`
  display: grid;
  padding: 5.5rem;
  text-align: center;
  justify-content: center;
  form {
    display: grid;
    gap: 1rem;
    width: 500px;
  }
`;

const ContactPage = () => {
  const [state, setState] = useState('');
  const [ggul, setGgul] = useState('');
  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setState('SUCCESS');
      } else {
        setState('ERROR');
      }
    };
    if (ggul === '') {
      xhr.send(data);
    }
  };
  const updateGgul = () => {
    setGgul('changed');
  };
  return (
    <ContactStyles>
      <div className="item">
        <MailIcon />
        wyang19a@gmail.com
      </div>
      <div className="item">
        <PhoneIcon />
        617-990-6178
      </div>
      <div className="item">
        <form
          method="post"
          onSubmit={submitForm}
          action="https://formspree.io/mnqvgjad"
        >
          <input
            type="email"
            placeholder="email *"
            name="email"
            id="email"
            required="required"
          />
          <input placeholder="name" type="text" name="name" id="name" />
          <input
            placeholder="subject"
            type="text"
            name="subject"
            id="subject"
          />
          <textarea
            name="message"
            placeholder="message *"
            id="message"
            rows="5"
            required="required"
          />
          <button type="submit">Send</button>
          <input type="reset" value="Clear" />
          <input
            type="ggul"
            name="ggul"
            id="ggul"
            className="ggul"
            onChange={updateGgul}
          />
          {state === 'SUCCESS' ? (
            <p>Thank you. I'll get back to you as soon as I can!</p>
          ) : (
            ''
          )}
          {state === 'ERROR' && (
            <p>Oops! There was an error. Please double check your email.</p>
          )}
        </form>
      </div>
    </ContactStyles>
  );
};

export default ContactPage;

// id="contactForm"
// className="contact-form"
// onSubmit={this.submitForm}
// action=""
// method="POST"
