import React, { useContext, useEffect, useState } from 'react'
import PokebolaGG from '../../Assets/img/pokebolaGG.png'
import Dialogue from '../../Components/Dialogue/Dialogue'
import PokemonDetails from '../../Components/PokemonDetails/PokemonDetails'
import { GlobalState } from '../../Context/GlobalState'
import * as S from './SelectPokemon.styles'

const SelectPokemon = () => {
  const { dispatch } = useContext(GlobalState)
  const [openDetailsPoke, setOpenDetailsPoke] = useState(false)
  const [pokeEscolhido, setPokeEscolhido] = useState('')
  const [namePokemon, setNamePokemon]= useState('')
  const [screen, setScreen] = useState({
    dialogueOne: true,
    selectPokemon: false,
    dialogueTwo: false
  })
  const username = localStorage.getItem('username')
  const handleNextScreen = (e, option) => {

    if (option === 'selectPokemon') {
      setScreen({
        dialogueOne: false,
        selectPokemon: true,
        dialogueTwo: false
      })
    } else if (option === 'dialogueTwo') {
      console.log('oi')
      setOpenDetailsPoke(false)
      setScreen({
        dialogueOne: false,
        selectPokemon: false,
        dialogueTwo: true
      })
      localStorage.setItem("poke", pokeEscolhido)
      dispatch({
        type: 'ADD-POKEMON-BAG-AND-POKEDEX',
        payload: pokeEscolhido
      })
    }
  }

  useEffect(()=>{
    if(pokeEscolhido === '1'){
      setNamePokemon('SQUIRTLE')
    }else if(pokeEscolhido === '4'){
      setNamePokemon('CHARMANDER')
    }else{
      setNamePokemon('BULBASAUR')
    }
  },[pokeEscolhido])
  const handleSelectPoke = (poke) => {
    setOpenDetailsPoke(true)
    setPokeEscolhido(poke)
  }
  return (
    <S.Container>
      {
        screen.dialogueOne &&
        (
          <Dialogue >
            <p><strong>{username}</strong>, seja bem vind@!</p>
            <p>É uma honra te ter aqui. A equipe Rocket andou roubando alguns pokemons e sua missão é resgata-los. Todo pokemons que você resgatar será seu!</p>
            <button className='btn-next' onClick={(e) => handleNextScreen(e, 'selectPokemon')}>Next</button>

          </Dialogue>
        )

      }
      {
        screen.selectPokemon &&
        (
          <S.Select>
            <div className='CaixadeTexto'>
              <p>Para te ajudar, te daremos um pokemon <br />
                Faça a sua escolha!
              </p>
            </div>
            <section>
              <img src={PokebolaGG} alt="pokebola" className={pokeEscolhido === '7' ? 'pokebola bounce' : 'pokebola'} onClick={() => handleSelectPoke('7')} />
              <img src={PokebolaGG} alt="pokebola" className={pokeEscolhido === '4' ? 'pokebola bounce' : 'pokebola'}
                onClick={() => handleSelectPoke('4')}
              />
              <img src={PokebolaGG} alt="pokebola" className={pokeEscolhido === '1' ? 'pokebola bounce' : 'pokebola'}
                onClick={() => handleSelectPoke('1')} />
            </section>

            {
              openDetailsPoke &&
              <S.PokeEscolhido>
                <PokemonDetails pokemon={pokeEscolhido} functionCancel={()=>setOpenDetailsPoke(false)} 
                functionOk={(e)=>handleNextScreen(e,'dialogueTwo')}
                />
              </S.PokeEscolhido>
            }

          </S.Select>
        )
      }
      {
        screen.dialogueTwo &&
        (
          <Dialogue>
            <p>{namePokemon}? Ual, excelente escolha!</p>
            <p>Para começar sua jornada você prefere...</p>
            <button className='btn-next'>Pular Tuturial</button>
          </Dialogue>
        )
      }
    </S.Container>
  )
}

export default SelectPokemon
