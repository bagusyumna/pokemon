import { React, useEffect, useState } from 'react';
import { useLocation} from "react-router-dom"
import ModalConfirmation from "../components/ModalConfirmation"
import ModalSuccess from "../components/ModalSuccess"

const Detail = () => {

  let location = useLocation();
  let namePokemon = location.search

  const [openModalConfirm, setOpenModalConfirm] = useState(false)
  const [openModalSuccess, setOpenModalSuccess] = useState(false)

  const [pokemon, setPokemon] = useState({})

  const [pokemonTypes, setPokemonTypes] = useState([])
  const [pokemonAbilitis, setPokemonAbilitis] = useState([])
  const [pokemonStats, setPokemonStats] = useState([])
  const [pokemonMoves, setPokemonMoves] = useState([])

  const [currentImage, setCurrentImage] = useState(null);

  const pokemonImages = [];

  const getPokemon = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/"+namePokemon.replace('?',''))
    const data = await res.json()
    
    setPokemon(data)

    pokemonImages.push(data.sprites.front_default)
    pokemonImages.push(data.sprites.back_default)

    data.types.forEach( async (data) => {
      const type = data.type
      type['id'] = data.slot
      type['class'] = "btn-type "+data.type.name
      setPokemonTypes(currentList => [...currentList, type])
    })
    
    data.abilities.forEach( async (data) => {
      const ability = data.ability
      ability['id'] = data.slot
      setPokemonAbilitis(currentList => [...currentList, ability])
    })
    
    data.stats.forEach( async (data) => {
      const datamap = {}
      datamap['name'] = data.stat.name
      datamap['base_stat'] = data.base_stat
      if (data.base_stat > 100) {
        datamap['class'] = "100%"
      } else {
        datamap['class'] = data.base_stat + "%"
      }
      setPokemonStats(currentList => [...currentList, datamap])
    })
    
    let i = 0;
    data.moves.forEach( async (data) => {
      const move = data.move
      move['id'] = i++
      setPokemonMoves(currentList => [...currentList, move])
    })

  }

  useEffect(() => {
    getPokemon()
  }, [])
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(pokemonImages[Math.floor(Math.random() * pokemonImages.length)]);
    }, 1000)
    return () => clearInterval(intervalId);
  }, [])

  return (
    <div className='app'>
      {openModalConfirm && <ModalConfirmation closeModal={setOpenModalConfirm} openModalSuccess={setOpenModalSuccess} namePokemon={pokemon.name} imgPokemonFront={pokemon.sprites.front_default} imgPokemonBack={pokemon.sprites.back_default}/>}
      {openModalSuccess && <ModalSuccess closeModal={setOpenModalSuccess} namePokemon={pokemon.name} />}
      <div className='details'>

        <div className='container-img'>
          <div className='big-img'>
            <img src={currentImage} alt=''/>
          </div>
          <button className='btn-cart' onClick={() => setOpenModalConfirm(true)}>
            <img className='btn-cart-img' src={require('../images/pokebal.png')} alt='logo' style={{height: '6vh'}}/>
            <span className='btn-cart-span'><h2><b>CATCH</b></h2></span>
          </button>
        </div>
        
        <div className='box'>

          <div className='row'>
            <h2>{pokemon.name}</h2>
            <span>#0{pokemon.id}</span>
          </div>

          <p><b>Types</b></p>

          <div className='colors'>
            {pokemonTypes.map((pokemon) => 
              <button key={pokemon.id} className={pokemon.class}>{pokemon.name}</button>
            )}
          </div>

          <p><b>Abilities</b></p>

          <div className='colors'>
          {pokemonAbilitis.map((pokemon) => 
              <button key={pokemon.id} className='btn-ability'>{pokemon.name}</button>
          )}
          </div>
          
          <p><b>Stats</b></p>

          {pokemonStats.map((pokemon, index) => 
              <div className='grid-container' key={index}>
                <p className='stat-title'>{pokemon.name}</p>
                <div className='stats-container'>
                  <div className="stat" style={{width:pokemon.class}}></div>
                </div>
              </div>
          )}
          
          <p><b>Moves</b></p>

          <div className='colors move'>
          {pokemonMoves.map((pokemon) => 
              <button key={pokemon.id} className='btn-move'>{pokemon.name}</button>
          )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Detail;