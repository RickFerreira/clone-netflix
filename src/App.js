import React, { useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";

export default () => {
  //Pegar a lista de filmes
  const [movieList, setMovieList] = useState([]);

  //Quando a tela for carregada usa a função colocada aqui
  useEffect(()=>{
    const loadAll = async () => {
      //Pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }

    loadAll();
  }, []);

  return(
    <div className="page">

      <section className="listas">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>

    </div>
  );
}