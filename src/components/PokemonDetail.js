import React from 'react';
import { NavLink } from 'react-router-dom';

const PokemonDetail = ({id, image, name, type, owned}) => {
    const style = type + " thumb-container";
    return (
        <NavLink to={{
            pathname:'/detail',
            search: name
          }}>
        <div className={style}>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <small>Owned: {owned}</small>
            </div>
        </div>
        </NavLink>
    )
}

export default PokemonDetail