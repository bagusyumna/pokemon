import { React, useEffect, useState } from 'react';
import PokemonMylist from '../components/PokemonMyList'

const MyList = () => {

    const [allPokemon, setAllPokemon] = useState([])

    const getAllPokemons = async () => {
        let listPokemon = localStorage.getItem('ListPokemon');
        const listPokemonJSON = JSON.parse(listPokemon)

        if (listPokemon) {
            listPokemonJSON.forEach( async (pokemon) => {
                setAllPokemon(currentList => [...currentList, pokemon])
            })
        }
    }

  useEffect(() => {
      getAllPokemons()
  }, [])

  return (
    <div className="app-container">
        <div className="pokemon-container">
            <div className="all-container">
                {allPokemon.map((pokemon, index) => 
                    <PokemonMylist 
                        id={index}
                        image={pokemon.image}
                        name={pokemon.name}
                        type={pokemon.type}
                        nickname = {pokemon.nickame}
                        key={index}
                    />
                )}
            </div>
        </div>
    </div>
  );
};

export default MyList;