import React from "react";
import s from "./contact.module.css"
function Contact() {
  return (
    <div>
      <div className={s.contactUs} id="contact">
        <h3 data-aos="zoom-in">Contact</h3>
        <p data-aos="zoom-out" data-aos-delay="300">
          I’m interested in freelance opportunities – especially ambitious or
          large projects. However, if you have other request or question, don’t
          hesitate to use the form.
        </p>
        <div className={s.contactUsCont}>
          <div className={s.contactInfo}>
            <form id="contact-form">    
              <div className={s.textFields}>
                <input
                  type="text"
                  className={s.name}
                  placeholder="Name"
                  data-aos="fade-up"
                  data-aos-delay="600"
                />
                <input
                  type="text"
                  className={s.email}
                  placeholder="Email"
                  data-aos="fade-up"
                  data-aos-delay="700"
                />
              </div>
              <textarea
                placeholder="Message"
                data-aos="fade-right"
                data-aos-delay="800"
              ></textarea>
              <button
                type="submit"
                id="submit"
                className={s.submitBtn}
                data-aos="fade-up"
                data-aos-delay="700"
              >
                Send Message
              </button>
            </form>
          </div>

          <img
            src="/images/contact.png"
            className={s.pic}
            data-aos="zoom-in"
            data-aos-delay="900"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
