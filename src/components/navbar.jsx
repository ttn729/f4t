import React from "react";
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <Link className="link" to="/spicy">Spicy Cat</Link>
            <Link className="link" to="/tienlen">Tiến Lên</Link>
            <Link className="link" to="/404">Books</Link>
            <Link className="link" to="/404">Blog</Link>
            <Link className="link" to="/404">List 100</Link>
            <Link className="link" to="/404">Resources</Link>
            <Link className="link" to="/vocab">Vocab</Link>

        </div>
    );
};

export default Navbar;
