import React from "react";
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="nav-item">
            <Link to="/" className="nav-summary">About</Link>
            <div className="nav-content">ウェブサイト作成の目的</div>
        </div>
        <div className="nav-item">
            <Link to="/profile" className="nav-summary">Profile</Link>
            <div className="nav-content">名前・写真・好きなもの・嫌いなもの</div>
        </div>
        <div className="nav-item">
            <Link to="/skills" className="nav-summary">Skills</Link>
            <div className="nav-content">保有資格・学んでいること</div>
        </div>
        <div className="nav-item">
            <Link to="/appeal" className="nav-summary">Appeal</Link>
            <div className="nav-content">業務における強み</div>
        </div>
        <div className="nav-item">
            <Link to="/portfolio" className="nav-summary">Portfolio</Link>
            <div className="nav-content">自身で制作したポートフォリオ</div>
        </div>
    </nav>
  );
};

export default Navbar;
