import { Link } from "gatsby";
import Img, { FixedObject } from 'gatsby-image';
import React, { useState } from "react";
import { GitHub, Linkedin, Menu, Twitter } from 'react-feather';
import './assets/navbar.scss';


export const Navbar: React.FC<{
    fixed: FixedObject;
}> = ({ fixed }) => {
    const [ isMenuOpen, setMenuOpen ] = useState(false);
    
    return (
        <div>
            <div className="navbar">
                
                <div style={{ display: 'contents' }}>
                    <h1><Link to="/">
                        <span className="img_wrapper">
                            <Img fixed={fixed} />
                        </span>
                    </Link></h1>
                    <div className="social_icons">
                        <ul className="list">
                            <li className="list_item">
                                <a href='https://github.com/bolajahmad'>
                                    <span>github</span>
                                    <GitHub size={16} />
                                </a>
                            </li>
                            <li className="list_item">
                                <a href='https://linkedin.com/in/bolajahmad'>
                                    <span>linkedin</span>
                                    <Linkedin size={16} />
                                </a>
                            </li>
                            <li className="list_item">
                                <a href='https://twitter.com/bolajahmad_'>
                                    <span>twitter</span>
                                    <Twitter size={16} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <nav>
                    <ul className="nav_list">
                        <li className="list_item">
                            <Link to='/about'>about</Link>
                        </li>
                        <li className="list_item">
                            <Link to='/projects'>projects</Link>
                        </li>
                    </ul>
                </nav>

                <div className="menu_wrapper">
                    <button className="menu" type="button">
                        <Menu />
                    </button>
                </div>
            </div>
        </div>
    )
}
