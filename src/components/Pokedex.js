import React from "react";
import Pokemon from './Pokemon'
import Pagination from "./Pagination";

const Pokedex = (props) => {
    const { pokemons, page, setPage, total, loading }  = props;

    const previousPage = () => {
        const nextPage = Math.max(page - 1, 0);
        setPage(nextPage);
    }

    const nextPage = () => {
        const nextPage = Math.min(page + 1, total);
        setPage(nextPage);
    }

    return (
        <div>
            <div className="header">
                <h1 className="h1">Pokemons</h1>
                <Pagination
                 page={page + 1}
                 totalPages={total}
                 onPreviousClick={previousPage}
                 onNextClick={nextPage}
                />
            </div>
            { loading ?
                <div>Loading Pokémons...</div>
                :
                <div className="pokelist">
                    {pokemons.map((pokemon) => {
                        return <Pokemon pokemon={pokemon} key={pokemon.name}/>
                    })}
                </div>
            }
        </div>
    );
}

export default Pokedex;
