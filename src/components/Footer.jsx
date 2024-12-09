import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light text-center py-3 mt-5">
      <p className="mb-1">
        Desarrollado con ❤️ por{" "}
        <a
          href="https://github.com/Mariluz2024"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mariluz 🌟
        </a>
      </p>
      <p className="mb-0">
        &copy; {new Date().getFullYear()} Todos los derechos reservados. 🚀
      </p>
    </footer>
  );
};

export default Footer;
