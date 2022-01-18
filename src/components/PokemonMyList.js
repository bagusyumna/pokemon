import React from 'react';
import "../css/mylist.css"
import { useNavigate } from "react-router-dom";


const PokemonMylist = ({id, image, name, type, nickname, setRefresh}) => {
    const style = type + " thumb-container";
    const navigate = useNavigate();


    function releasePokemon() {
      let listPokemon = localStorage.getItem('ListPokemon');
      const listPokemonJSON = JSON.parse(listPokemon)

      listPokemonJSON.splice(id,1);
      localStorage.setItem('ListPokemon', JSON.stringify(listPokemonJSON));

      let ownedPokemon = localStorage.getItem('countPokemon');
      const ownedPokemonJSON = JSON.parse(ownedPokemon)

      ownedPokemonJSON["pokemon"][name] = ownedPokemonJSON["pokemon"][name] - 1

      localStorage.setItem('countPokemon', JSON.stringify(ownedPokemonJSON));
    
      navigate('/refresh');
    }

    return (
        <div className={style}>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h3>{nickname}</h3>
                <small>{name}</small>
                <button className='btn-release' onClick={() => releasePokemon()}> <span className='btn-release-span'>Release</span> </button>
            </div>
        </div>
    )
}

export default PokemonMylist