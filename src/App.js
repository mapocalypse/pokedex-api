import React, { useState, useEffect } from "react";
import './styles.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Pokedex from './components/Pokedex';
import { getPokemons, getPokemon } from "./services/api";

function App() {

  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false); 

  const itemsPerPage = 10;

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      setNotFound(false);
      const data = await getPokemons(itemsPerPage, itemsPerPage * page);  
      const promises = data.results.map(async (pokemon) => {
        return await getPokemon(pokemon.name);
      });

      const results = await Promise.all(promises);
      setPokemons(results); 
      setLoading(false);
      setTotal(Math.ceil(data.count/itemsPerPage));  
    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  const handleOnSearch = async (pokemon) => { 
    if(!pokemon) {
      return fetchPokemons();
    }    
    setLoading(true);
    setNotFound(false);

    const result = await getPokemon(pokemon);
    if(!result) {
      setLoading(false);
      setNotFound(true);
      return;
    } else {
      setPokemons([result]);
    }
    setLoading(false);
    setPage(0);
    setTotal(1);
  }

  return (
    <div>
    <Navbar/>
      <div className="App">
        <Searchbar          
          onSearch={handleOnSearch}
          />
        { notFound ? (
          <div className="not-found">Pokémon not found.</div>
        ) : (
          <Pokedex
            loading={loading}
            pokemons={pokemons}
            page={page}
            setPage={setPage}
            total={total}
          />
        )}      
      </div>
    </div>
  );
  
}

export default App;
