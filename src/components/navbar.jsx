import React from "react";
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="siteTitle">
                    <Link className="link" to="/spicy">Spicy Cat</Link>
                </div>

                <div className="siteNav">
                    <Link className="link" to="/tienlen">Tiến Lên</Link>
                    <Link className="link" to="/books">Books</Link>
                    <Link className="link" to="/404">Blog</Link>
                    <Link className="link" to="/404">List 100</Link>
                    <Link className="link" to="/404">Resources</Link>
                    <Link className="link" to="/vocab">Vocab</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
