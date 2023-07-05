import React from 'react'
import s from './about.module.css'
function About() {
  return (
    <div className={s.container}>
        <div className={s.about} id="about">
          <h1 className={s.heading} data-aos="zoom-in">About</h1>
          <div className={s.aboutContent}>
            <div className={s.info}>
              <h3 data-aos="fade-right" data-aos-delay="300">
                Get to Know Me !
              </h3>
              <p data-aos="fade-right">
                I'm a <span className="bold">Frontend Web Developer</span> building
                the Front-end of Websites and Web Applications that leads to the
                success of the overall product.
              </p>
              <p data-aos="fade-right" data-aos-delay="500">
                I approach every <span className={s.bold}>project</span> with a positive and can-do attitude,
                and am always seeking out new opportunities to expand my
                skillset and take on new challenges. I am a quick learner, and
                am not afraid to ask questions or seek feedback in order to
                improve my work.
              </p>
              <p data-aos="fade-right" data-aos-delay="700">
                I'm open to <span className={s.bold}>Job</span> opportunities where I
                can contribute, learn and grow. If you have a good opportunity
                that matches my skills and experience then don't hesitate to
                contact me.
              </p>
              <a href="#contact" data-aos="fade-right" data-aos-delay="900">
                <button className={s.contact}>Contact</button>
              </a>
            </div>
            <div className={s.skills}>
              <h3 data-aos="fade-left" data-aos-delay="400">My skills</h3>
              <div className={s.skillsContent}>
                <div
                  className={s.skillItem}
                  data-aos="fade-left"
                  data-aos-delay="600"
                >
                  Html
                </div>
                <div
                  className={s.skillItem}
                  data-aos="fade-left"
                  data-aos-delay="800"
                >
                  CSS
                </div>
                <div
                  className={s.skillItem}
                  data-aos="fade-left"
                  data-aos-delay="1000"
                >
                  Tailwind CSS
                </div>
                <div
                  className={s.skillItem}
                  data-aos="fade-left"
                  data-aos-delay="1200"
                >
                  Sass
                </div>
                <div
                  className={s.skillItem}
                  data-aos="fade-left"
                  data-aos-delay="1400"
                >
                  React
                </div>
                <div
                  className={s.skillItem}
                  data-aos="fade-left"
                  data-aos-delay="1600"
                >
                  Next.js
                </div>
                <div
                  className={s.skillItem}
                  data-aos="fade-left"
                  data-aos-delay="1800"
                >
                  Responsive Design
                </div>
              </div>
              <div className="skillsContent2">
                <div
                  className={s.skillItem}
                  data-aos="fade-right"
                  data-aos-delay="400"
                >
                  Html
                </div>
                <div
                  className={s.skillItem}
                  data-aos="fade-left"
                  data-aos-delay="600"
                >
                  CSS
                </div>
                <div
                  className={s.skillItem}
                  data-aos="fade-right"
                  data-aos-delay="700"
                >
                  Tailwind CSS
                </div>
                <div
                  className={s.skillItem}
                  data-aos="fade-left"
                  data-aos-delay="800"
                >
                  Sass
                </div>
                <div
                  className={s.skillItem}
                  data-aos="fade-right"
                  data-aos-delay="900"
                >
                  React
                </div>
                {/* <!-- <div className={s.skillItem} data-aos="fade-left" data-aos-delay="1000">UI/UX</div> --> */}
                <div
                  className={s.skillItem}
                  data-aos="fade-left"
                  data-aos-delay="1100"
                >
                  Next.js
                </div>
                <div
                  className={s.skillItem}
                  data-aos="fade-right"
                  data-aos-delay="1200"
                >
                  Responsive Design
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About