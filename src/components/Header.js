import React from "react";
import './Header.css';
import imagemLogo from "../img/rickflix.png";
import imagemAvatar from "../img/boneco.jpg";

export default () => {
    return (
        <header>
            <div className="header--logo">
                <a href="/">
                    <img src={imagemLogo} alt="logo rickflix" />
                </a>
            </div>
            <div className="header--avatar">
                <a href="/">
                    <img src={imagemAvatar} alt="Avatar Rick" />
                </a>
            </div>
        </header>
    );
}