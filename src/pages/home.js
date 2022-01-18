import { React, useEffect, useState } from "react";
import PokemonDetail from '../components/PokemonDetail'

const Home = () => {

    const [allPokemon, setAllPokemon] = useState([])
    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

    const getAllPokemons = async () => {
        const res = await fetch(loadMore)
        const data = await res.json()
    
        setLoadMore(data.next)
        
        function createPokemonObject(result) {
          result.forEach( async (pokemon) => {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon/'+pokemon.name)
            const data = await res.json()

            let ownedPokemon = localStorage.getItem('countPokemon');
            const ownedPokemonJSON = JSON.parse(ownedPokemon)

            if (!ownedPokemonJSON) {
                data['owned'] = 0
            } else {
                if (ownedPokemonJSON['pokemon'][data.name] || ownedPokemonJSON['pokemon'][data.name] === 0) {
                    data['owned'] = ownedPokemonJSON['pokemon'][data.name]
                } else {
                    data['owned'] = 0
                }
            }
            
            setAllPokemon(currentList => [...currentList, data])
    
          })
        }
    
        createPokemonObject(data.results)
    }

    useEffect(() => {
        getAllPokemons()
    }, [])

    return (
    <div className="app-container">
        <div className="pokemon-container">
            <div className="all-container">
                {allPokemon.map((pokemon, index) => 
                    <PokemonDetail 
                        id={pokemon.id}
                        image={pokemon.sprites.other.home.front_default}
                        name={pokemon.name}
                        type={pokemon.types[0].type.name}
                        owned = {pokemon.owned}
                        key={index}
                    />
                )}
            </div>
            <button className="load-more" onClick={() => getAllPokemons()} ><h2><b>Load More</b></h2></button>
        </div>
    </div>
    )
}

export default Home
