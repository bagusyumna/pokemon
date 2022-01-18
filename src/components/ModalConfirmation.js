import { React, useState } from 'react';
import "../css/Modal.css"

function ModalConfirmation({ closeModal, openModalSuccess, namePokemon, imgPokemonFront, imgPokemonBack }) {

    const [runProcessCatch, setRunProcessCatch] = useState(false)
    const [runLoading, setRunLoading] = useState(false)
    
    const [buttonView, setButtonView] = useState(true)
    const [labelBodyModal, setLabelBodyModal] = useState('')

    const [spinAnimation, setSpinAnimation] = useState('img-modal');
    const [currentImage, setCurrentImage] = useState(imgPokemonFront);

    const catchPokemon = async () => {
        setRunProcessCatch(true)

        setLabelBodyModal("loading")
        setSpinAnimation("img-modal img-modal-spin")
        setRunLoading(true)
        setButtonView(false)

        await sleep(2000);

        setButtonView(true)

        let chanceNum = Math.random();
        if (chanceNum < 0.5){
            openModalSuccess(true)
            closeModal(false)
        } else {
            setRunLoading(false)
            setCurrentImage(imgPokemonBack)
            setLabelBodyModal(namePokemon+" Ran Away!! Try Again ?")
            setSpinAnimation("img-modal")
        }
    }

    return (
        <div className='modalBackground'>
            <div className='modalContainer'>
                <div className='body'>
                    <div>
                        {
                            runProcessCatch ? 
                                <p>{labelBodyModal}</p> 
                            : 
                                <p>Do You Want ​Catch {namePokemon} ?</p>
                        }
                        {
                            runLoading ? 
                                <img className={spinAnimation} src={require('../images/pokebal.png')}/>
                            : 
                                <img className='img-modal' src={currentImage} style={{height : "7.5vh"}}/>
                        }
                    </div>
                </div>
                <div className='footer'>
                    {
                        buttonView ? 
                            <div>
                                <button onClick={() => catchPokemon()}>Yes</button>
                                <button onClick={() => closeModal(false)} id='cancelBtn'>No</button>
                            </div>
                        : 
                        <p>Please Wait</p>
                    }
                </div>
            </div>
        </div>
    )
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default ModalConfirmation
