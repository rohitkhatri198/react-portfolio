import React, { useEffect, useState } from "react";
import s from "./banner.module.css";

function Banner() {
  const [text, setText] = useState("");
  const typeArray = [
    "A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product.",
  ];
  useEffect(() => {
    let index = 0;
    let isAdding = true;
    let typeIndex = 0;

    function playAnim() {
      setTimeout(
        () => {
          setText(typeArray[typeIndex].slice(0, index));

          if (isAdding) {
            if (index >= typeArray[typeIndex].length) {
              isAdding = false;
              setTimeout(() => {
                playAnim();
              }, 1000);
              return;
            } else {
              index++;
            }
          } else {
            if (index === 0) {
              isAdding = true;
              typeIndex++;
              if (typeIndex >= typeArray.length) {
                typeIndex = 0;
              }
            } 
          }

          playAnim();
        },
        isAdding ? 20 : 120
      );
    }

    playAnim();
  },[]);

  function onButtonClick() {
    console.log("hello");
    fetch("Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Resume.pdf";
        alink.click();
      });
    });
  }
  return (
    <div className={s.container}>
      <div className={s.banner}>
        <div className={s.info}>
          <h1
            className={s.header}
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="100"
          >
            <span className="wobble">👋🏼</span> Hi, I am Rohit, Web Developer
          </h1>
          <div className={s.desc}>
            <span id={s.typed} className={s.typed}>
              {text}
            </span>
          </div>
          <button className={s.button} onClick={onButtonClick}>
            Download Resume
          </button>
        </div>
        <div
          className={s.imgSection}
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="600"
        >
          <img src="/images/rohit.png" className={s.profile} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
