import React from "react";
import s from "./nav.module.css";
function Nav() {
  return (
    <div className={s.container}>
      <div className={s.nav}>
        <a href="/">
          <div className={s.navItems}>Home</div>
        </a>
        <a href="#about">
          <div className={s.navItems}>About</div>
        </a>
        <a href="#projects">
          <div className={s.navItems}>Projects</div>
        </a>
        <a href="#contact">
          <div className={s.navItems}>Contact</div>
        </a>
      </div>
    </div>
  );
}

export default Nav;
