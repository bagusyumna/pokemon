import { React, useState } from 'react';
import "../css/Modal.css"
import { useNavigate } from 'react-router-dom';

function ModalSuccess({ closeModal, namePokemon }) {

    const location = useNavigate();

    const savePokemon = async () => {

        let dataList = localStorage.getItem('ListPokemon'); 
        if (!dataList) {
            localStorage.setItem('ListPokemon', JSON.stringify([]));
            dataList = localStorage.getItem('ListPokemon');
        }

        const res = await fetch("https://pokeapi.co/api/v2/pokemon/"+namePokemon.replace('?',''))
        const data = await res.json()

        const dataJSON = JSON.parse(dataList)
        
        var nickname = document.getElementById('nicknamePokemon').value;
        if (nickname === "") {nickname = data.name}

        dataJSON.push({"name":data.name, "image":data.sprites.other.home.front_default, "type":data.types[0].type.name, "nickame":nickname})
        localStorage.setItem('ListPokemon', JSON.stringify(dataJSON));

        let dataCount = localStorage.getItem('countPokemon'); 

        if (!dataCount) {
            localStorage.setItem('countPokemon', JSON.stringify({"pokemon":{}}));
            dataCount = localStorage.getItem('countPokemon');
        }

        const dataCountJSON = JSON.parse(dataCount)
        if (dataCountJSON['pokemon'][namePokemon] || dataCountJSON['pokemon'][namePokemon] === 0) {
            let counter = dataCountJSON['pokemon'][namePokemon] + 1
            dataCountJSON['pokemon'][namePokemon] = counter
        } else {
            dataCountJSON['pokemon'][namePokemon] = 1
        }
        localStorage.setItem('countPokemon', JSON.stringify(dataCountJSON));
       
        closeModal(false)
        location("/mylist")

    }

    return (
        <div className='modalBackground'>
            <div className='modalContainer'>
                <div className='title'>
                    <h3>Yeey Success To ​Catch {namePokemon}</h3>
                </div>
                <div className='body'>
                    <input className='input-nickname' placeholder='Give a nickname' id='nicknamePokemon'></input>
                </div>
                <div className='footer'>
                    <button onClick={() => savePokemon()}>Collect</button>
                    <button onClick={() => closeModal(false)} id='cancelBtn'>Release</button>
                </div>
            </div>
        </div>
    )
}

export default ModalSuccess
