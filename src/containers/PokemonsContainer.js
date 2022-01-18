import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '../graphql/get-pokemons';
import { Pokemon } from '../components/Pokemon';

const gqlVariables = {
    limit: 20,
    offset: 0,
};

export function PokemonsContainer() {

    const [pokemons, setPokemons] = React.useState([]);

    const { loading, error, data } = useQuery(GET_POKEMONS, {
        variables: gqlVariables,
    });
    
    if (loading) return (
        <div className='pokemons'>
            <h1>Loading</h1>
        </div>
    );
  
    if (error) return (
        <div className='pokemons'>
            <h1>${error.message}</h1>
        </div>
    );
    
    // console.log(data.pokemons.results);

    // setPokemons(data)
    
    const dataDetail = data.pokemons;
    const dataList = dataDetail.results;
    
    return(
        <div className='pokemons'>
            {
                Object.keys(dataList).map(
                    (item, i) => <Pokemon key={item} pokemon={dataList[item]}/> 
                )
            }
        </div>
    )

}

