import React from 'react';
import { Download, GitHub, Linkedin, Twitter } from 'react-feather';
import './assets/footer.scss';



export const FooterComponent: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer_wrapper">
        <div className="copy-text">
          &copy; {new Date().getFullYear()}, Built by devthuts 
        </div>

        <nav>
          <ul className="footer_nav">
            <div className="btn_wrapper">
              <button type="button" className="btn">
                <span>download resume</span>
                <Download size="16" />
              </button>
            </div>

            <li className="nav_item">
              <a href="https://twitter.com/bolajahmad_" className="nav_link">
                <Twitter size="20" />
              </a>
            </li>
            <li className="nav_item">
              <a href="https://github.com/bolajahmad" className="nav_link"><GitHub size="20" /></a>
            </li>
            <li className="nav_item">
              <a href="https://linkedin.com/in/bolajahmad" className="nav_link">
                <Linkedin size="20" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}