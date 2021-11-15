import React, { useContext, useState } from 'react'
import PokebolaGG from '../../Assets/img/pokebolaGG.png'
import Dialogue from '../../Components/Dialogue'
import { GlobalState } from '../../Context/GlobalState'
import * as S from './SelectPokemon.styles'

const SelectPokemon = () => {
  const { state } = useContext(GlobalState)
  const [openDetailsPoke, setOpenDetailsPoke] = useState(false)
  const [pokeEscolhido, setPokeEscolhido] = useState('')
  const [screen, setScreen] = useState({
    dialogueOne: false,
    selectPokemon: true,
    dialogueTwo: false
  })
  const { user: { username } } = state
  const handleNextScreen = (e, option) => {

    if (option === 'selectPokemon') {
      setScreen({
        dialogueOne: false,
        selectPokemon: true,
        dialogueTwo: false
      })
    } else if (option === 'dialogueTwo') {
      setScreen({
        dialogueOne: false,
        selectPokemon: false,
        dialogueTwo: true
      })
    }
  }
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
            <div className = 'CaixadeTexto'>
              <p>Para te ajudar, te daremos um pokemon <br />
                Faça a sua escolha!
              </p>
            </div>
            <section>
              <img src={PokebolaGG} alt="pokebola" className='pokebola' onClick={() => handleSelectPoke('squirtle')} />
              <img src={PokebolaGG} alt="pokebola" className={pokeEscolhido === 'charmander' ? 'pokebola bounce':'pokebola' }
               onClick={() => handleSelectPoke('charmander')}
              />
              <img src={PokebolaGG} alt="pokebola" className='pokebola' 
              onClick={() => handleSelectPoke('bubasaur')}/>
            </section>

            {
              openDetailsPoke &&
              <S.PokeEscolhido>
              </S.PokeEscolhido>
            }

          </S.Select>
        )
      }
      {
        screen.dialogueTwo &&
        (
          'dialogueTwo'
        )
      }
    </S.Container>
  )
}

export default SelectPokemon
