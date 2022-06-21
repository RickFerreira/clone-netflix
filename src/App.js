import React, { useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import './App.css';
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";


export default () => {
  //Pegar a lista de filmes
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  //Quando a tela for carregada usa a função colocada aqui
  useEffect(()=>{
    const loadAll = async () => {
      //Pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Pegando o featured
      let originals = list.filter(i=>i.slug === 'originals');
      let ramdomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[ramdomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');

      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, []);

  //Monitorar o scroll para mudar header para preto
  useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);


  return(
    <div className="page">
    
      <Header black={blackHeader} />

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }
      

      <section className="listas">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>

    </div>
  );
}