import { Link } from "react-scroll";
import React, { useState } from "react";
import Logo from "./Logo";
import { slide as Menu } from "react-burger-menu";
import "../styles/ham.css";
export default function Navbar({ mobile }) {
  const [open, setOpen] = useState(false);
  const handleClik = (e) => {
    e.preventDefault();
    console.log("entre");
    setOpen(!open);
  };

  const nav_class = `${mobile ? "mobile" : "items"}`;
  const linkList = (
    <div className={nav_class}>
      <Link
        className='link'
        activeClass='active'
        to='home'
        spy={true}
        smooth={true}
        offset={-100}
        duration={400}
      >
        <span> About </span>
      </Link>
      <Link
        className='link'
        activeClass='active'
        to='projects'
        spy={true}
        smooth={true}
        offset={-100}
        duration={400}
      >
        <span> Projects </span>
      </Link>
    </div>
  );
  const isMenuOpen = (state) => {
    setOpen(state.isOpen);
  };
  const mobileNav = (
    <Menu isOpen={open} disableAutoFocus onStateChange={isMenuOpen}>
      <Link
        to='home'
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        onClick={handleClik}
      >
        <span> About </span>
      </Link>
      <Link
        to='projects'
        spy={true}
        smooth={true}
        offset={-100}
        duration={600}
        onClick={handleClik}
      >
        <span> Projects </span>
      </Link>
    </Menu>
  );
  return (
    <div className='nav-container'>
      <nav className='navbar'>
        {!mobile && <Logo />}
        {mobile ? mobileNav : linkList}
        {mobile && <Logo />}
      </nav>
    </div>
  );
}
