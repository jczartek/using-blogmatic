import * as React from "react";

const Footer = () => {
  return (
    <footer className="flex">
      <div className="footer-col">
        <h3>Using Blogmatic</h3>
        <p>Blog o programowaniu - Jakub Czartek</p>
      </div>
      <div className="footer-col ml-auto"></div>
      <div className="footer-col">
        <h3>Kontakt</h3>
        <ul>
          <li>kuba@linux.pl</li>
        </ul>
      </div>
      <div className="footer-col">
        <h3>Social</h3>
        <ul>
          <li>
            <a className="inline-flex justify-center items-center" href="https://github.com/jczartek" target="_blank" rel="noreferrer"><i className="fa fa-github mr-2"></i> <span className="mb-1">Github</span></a>
          </li>
          <li>
           <a  className="inline-flex justify-center items-center" href="https://www.linkedin.com/in/jakub-czartek-b64716240/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin mr-2"></i> <span className="mb-1">Linked</span></a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
