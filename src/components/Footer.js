import React from "react";
import './Footer.css';
import facebook from "../img/icones/facebook.png";
import instagram from "../img/icones/instagram.png";
import twitter from "../img/icones/twitter.png";
import youtube from "../img/icones/youtube.png";

export default () => {
    return (
        <footer className="footer">
            <div>
                <a href="/"><img src={instagram}/></a> 
                <a href="/"><img src={facebook}/></a> 
                <a href="/"><img src={twitter}/></a>
                <a href="/"><img src={youtube}/></a>
            </div>

            <ul>
                <li><a href="/">Idioma e legendas</a></li>  
                <li><a href="/">Centro de ajuda</a></li> 
                <li><a href="/">Imprensa</a></li>               
            </ul>
            <ul>
                <li><a href="/">Carreiras</a></li>  
                <li><a href="/">Privacidade</a></li> 
                <li><a href="/">Preferências de cookies</a></li>  
            </ul>
            <ul>
                <li><a href="/">Entre em contato</a></li>  
                <li><a href="/">Audiodescrição</a></li> 
                <li><a href="/">Relações com investidores</a></li>  
            </ul>
            <ul>
                <li><a href="/">Termos de uso</a> </li>  
                <li><a href="/">Avisos legais</a> </li> 
                <li><a href="/">Informações corporativas</a> </li> 
            </ul>

            <div>
                <p>Todos os direitos de imagem da Netflix</p>
                <p>Todos os direitos da API do The movie db</p>
                <p>O único intuito dessa cópia é o aprendizado </p>
                <p>Feito por Rick ❤</p>
            </div>

        </footer>
    );
}