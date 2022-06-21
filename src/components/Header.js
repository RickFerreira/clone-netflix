import React from "react";
import './Header.css';
import imagemLogo from "../img/rickflix.png";
import imagemAvatar from "../img/boneco.jpg";
import imagemSeta from "../img/triangulo.png";
import imagemSino from "../img/sino.png";
import imagemLupa from "../img/lupa.png";
import imagemInfantil from "../img/infantil.png";

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <nav className="header--navigation">
                <ul className="header--ul">
                    <li className="header--li">
                        <a href="/">
                            <img src={imagemLogo} alt="logo rickflix" />
                        </a>
                    </li>
                    <li className="header--li">
                        <a href="">Início</a>
                    </li> 
                    <li className="header--li">
                        <a href="">Séries</a>
                    </li>
                    <li className="header--li">
                        <a href="">Filmes</a>
                    </li>
                    <li className="header--li">
                        <a href="">Bombando</a>
                    </li>
                    <li className="header--li">
                        <a href="">Minha lista</a>
                    </li>                   
                </ul>
            </nav>
            
            <div className="header--avatar">

                <a href="" className="header--lupa">
                    <img src={imagemLupa} alt="Pesquisar" />
                </a>
                <a href="" className="header--infantil">
                    <img src={imagemInfantil} alt="infantil" />
                </a>
                <a href="" className="header--sino">
                    <img src={imagemSino} alt="Notificações" />
                </a>
                <a>
                    <img src={imagemAvatar} alt="Avatar Rick" />
                </a>
                <a href="/" className="header--seta">
                    <img src={imagemSeta} alt="Seta" />
                </a>

        
            </div>
        </header>
    );
}