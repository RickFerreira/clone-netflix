import React from "react";
import './FeaturedMovie.css';
import imagemClassificacao from "../img/classificacao.png";
import imagemRetornar from "../img/retornar.png";

export default ({item}) => {
    //pegar a data de lançamento
    let firstDate = new Date(item.first_air_date);
    //pegar uma lista de generos
    let genres = [];
    for(let i in item.genres) {
        genres.push( item.genres[i].name );
    }

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average} pontos</div>
                        <div className="featured--year">{firstDate.getFullYear()}</div>
                        <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="featured--description">{item.overview}</div>
                    <div className="featured--buttons">
                        <a href="" className="featured--buttonAssistir">► Quero ver agora</a>
                        <a href="" className="featured--buttonMinhaLista">+ Mais tarde vejo</a>
                    </div>
                    <div className="featured--genres"><strong>Gênero: </strong>{genres.join(', ')}</div>
                    
                    <div>
                        <img className="featured--classificacao" src={imagemClassificacao}/>
                        <img className="featured--retornar" src={imagemRetornar}/>
                    </div>
                </div>
            </div>
        </section>
    );
}
