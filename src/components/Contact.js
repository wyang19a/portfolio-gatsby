import React, { useState } from 'react';
import styled from 'styled-components';
import {
  AiOutlineMail as MailIcon,
  AiOutlinePhone as PhoneIcon,
  AiOutlineTwitter as TwitterIcon,
  AiOutlineInstagram as InstagramIcon,
  AiOutlineLinkedin as LinkedinIcon,
} from 'react-icons/ai';
import { GoLocation as LocationIcon } from 'react-icons/go';

const ContactStyles = styled.div`
  /* text-align: center; */
  display: grid;
  background-color: #2d2d2d;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  padding: 5.5rem;
  ul {
    padding: 0;
  }
  .contactinfo {
    /* display: grid; */
    /* grid-template-columns: 1fr 1fr; */
    /* justify-content: center; */
    /* align-items: center; */
  }
  .sci {
    display: flex;
    font-size: 3rem;
    /* transform: translate(80px, -5px); */
    /* bottom: 0; */
    /* padding-right: 40px; */
    li {
      margin-right: 40px;
      filter: invert(1);
      opacity: 0.5;
      transition: 0.5s;
      a {
        color: inherit;
      }
    }
    li:hover {
      color: #1964bd;
      /* #e69b42 */
      opacity: 1;
      transform: rotateY(360deg) scale(1.25, 1.25);
    }
  }
  li {
    cursor: pointer;
  }
  li span:nth-child(1) {
    filter: invert(1);
    transform: translateY(-6px);
    font-size: 2rem;
  }
  li span:nth-child(2) {
    /* color: #fff; */
    margin-left: 10px;
    font-weight: 300;
    opacity: 0.5;
  }
  li:hover span:nth-child(1),
  li:hover span:nth-child(2) {
    opacity: 1;
  }
  .info {
    li {
      display: grid;
      grid-template-columns: auto 1fr;
      margin: 20px 0;
    }
  }

  .contactForm {
    border-left: 4px solid #0f3959;
    padding: 70px 50px;
    background: #fff;
    /* margin-left: 250px; */
    width: 50vw;
    height: 400px;
    box-shadow: 0 50px 50px rgba(0, 0, 0, 0.5);
    color: black;
    h2 {
      font-size: 25px;
      color: #0f3959;
      font-weight: 500;
    }
    .formBox {
      position: relative;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding-top: 30px;
      .inputBox {
        position: relative;
        margin: 0 0 35px 0;
        input,
        textarea {
          resize: none;
          width: 100% !important;
          padding: 5px 0;
          /* font-size: 10px; */
          font-weight: 300;
          color: #333;
          border: none;
          border-bottom: 1px solid #777;
          outline: none;
        }
        input:focus ~ span,
        textarea:focus ~ span,
        input.filled ~ span,
        textarea.filled ~ span {
          transform: translateY(-20px);
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 1px;
          color: #ff568c;
        }
        span {
          position: absolute;
          left: 0;
          padding: 5px 0;
          font-weight: 300;
          color: #333;
          transition: 0.5s;
          pointer-events: none;
        }
        input.actionBtn {
          position: relative;
          cursor: pointer;
          background: #0f3935;
          color: #fff;
          max-width: 130px;
          padding: 6px;
          transition: 0.2s;
          :hover {
            background-color: #ff568c;
          }
        }
      }
    }
  }
  .actionBtn-grp {
    display: flex;
    justify-content: space-around;
    /* padding-top: 10px; */
  }
  .w50 {
    width: 47%;
  }
  .w100 {
    width: 100%;
  }
  p {
    margin: 0;
  }

  @media (max-width: 871px) {
    grid-template-columns: 1fr;
    .contactinfo {
      margin: 0 auto;
    }
    .contactForm {
      width: 80vw;
    }
  }
`;

const ContactPage = () => {
  const [state, setState] = useState('');
  const [ggul, setGgul] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
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
        setEmail('');
        setName('');
        setSubject('');
        setMessage('');
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
    <ContactStyles id="contact">
      <div className="contactinfo">
        <h2>Contact Info</h2>
        <ul className="info">
          <li>
            <span>
              <LocationIcon />
            </span>
            <span>Boston, MA</span>
          </li>
          <li>
            <span>
              <MailIcon />
            </span>
            <span>wyang19a@gmail.com</span>
          </li>
          <li>
            <span>
              <PhoneIcon />
            </span>
            <span>617-990-6178</span>
          </li>
        </ul>
        <ul className="sci">
          <li>
            <a href="https://www.linkedin.com/in/wootae-yang/">
              <LinkedinIcon />
            </a>
          </li>
          <li>
            <TwitterIcon />
          </li>
          <li>
            <InstagramIcon />
          </li>
        </ul>
      </div>
      <div className="contactForm">
        <h2>Send a message</h2>
        <form
          className="formBox"
          method="post"
          onSubmit={submitForm}
          action="https://formspree.io/mnqvgjad"
          autoComplete="off"
        >
          <div className="inputBox w50">
            <input
              type="email"
              name="email"
              className={email ? 'filled' : 'empty'}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              required="required"
            />
            <span>{email ? 'Email' : 'Email *'}</span>
          </div>
          <div className="inputBox w50">
            <input
              type="text"
              name="name"
              className={name ? 'filled' : 'empty'}
              onChange={(e) => setName(e.target.value)}
              id="name"
            />
            <span>Name</span>
          </div>
          <div className="inputBox w100">
            <input
              type="text"
              className={subject ? 'filled' : 'empty'}
              onChange={(e) => setSubject(e.target.value)}
              name="subject"
              id="subject"
            />
            <span>Subject</span>
          </div>
          <div className="inputBox w100">
            <textarea
              name="message"
              className={`message ${message ? 'filled' : 'empty'}`}
              onChange={(e) => setMessage(e.target.value)}
              id="message"
              rows="5"
              required="required"
            />
            <span>{message ? 'Message' : 'Message *'}</span>
          </div>
          <div className="inputBox w100 actionBtn-grp">
            <input className="actionBtn" type="submit" value="Send" />
            <input className="actionBtn" type="reset" value="Clear" />
          </div>
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
