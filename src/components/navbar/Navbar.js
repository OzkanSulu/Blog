import Link from "next/link";
import React from "react";
import styles from "./navbar.modules.css";
import DarkMode from "../darkMode/DarkMode";



const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Portfolio", url: "/portfolio" },
  { id: 3, title: "Blog", url: "/blog" },
  { id: 4, title: "About", url: "/about" },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  return (
    <div className="navContainer">

      <div>
        <Link href="/" className="logo">
          CryptoLife
        </Link>
      </div>

     

      <div className="links">
      <DarkMode/>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className="link">
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
