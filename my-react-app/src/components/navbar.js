import React from "react";
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="nav-item">
            <Link to="/" className="nav-summary">このサイトについて</Link>
            <div className="nav-content">ウェブサイト作成の目的</div>
        </div>
        <div className="nav-item">
            <Link to="/introduction" className="nav-summary">自己紹介</Link>
            <div className="nav-content">名前・写真・好きなもの・嫌いなもの</div>
        </div>
        <div className="nav-item">
            <Link to="/background" className="nav-summary">経歴</Link>
            <div className="nav-content">学歴・職歴</div>
        </div>
        <div className="nav-item">
            <Link to="/skills" className="nav-summary">スキル</Link>
            <div className="nav-content">保有資格・学んでいること</div>
        </div>
        <div className="nav-item">
            <Link to="/appeal" className="nav-summary">自己PR</Link>
            <div className="nav-content">業務における強み</div>
        </div>
        <div className="nav-item">
            <Link to="/portfolio" className="nav-summary">ポートフォリオ一覧</Link>
            <div className="nav-content">自身で制作したポートフォリオ</div>
        </div>
    </nav>
  );
};

export default Navbar;
