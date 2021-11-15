import React, { useContext, useState } from 'react'
import * as S from './Home.styles'
import { Redirect } from 'react-router-dom'
import pokemonLogo from '../../Assets/img/pokemon-logo.png'
import { GlobalState } from '../../Context/GlobalState'
import Dialogue from '../../Components/Dialogue'

const Home = () => {
  const { dispatch } = useContext(GlobalState)
  const [start, setStart] = useState(false)
  const [name, setName] = useState('')
  const [redirectTo, setRedirectTo] = useState(null)
  const setState = (name)=>{
    dispatch({
      type: 'NEW-USER',
      payload: name
    })
  }

  const NextPage = () => {
    console.log(name)
    if (name.length >= 3) {
      setRedirectTo('/select-pokemon')
      console.log(redirectTo)
      setState(name)
    }
  }

  if (redirectTo) {
    return(
      <Redirect to={redirectTo} />
    )
  }

  return (
    <>
      {!start ?
        <S.Container>
          <div>
            <img src={pokemonLogo} alt="pokemon" />
            <button
              onClick={() => setStart(true)}
            >Start</button>
          </div>
        </S.Container>
        :
        <Dialogue>
          <p>
            Ufaa!
            <br />
            Até que enfim você chegou.
            Estavamos te esperando, espera, qual é seu nome mesmo?
          </p>
          <input
            type="text"
            className='inputName'
            placeholder='Digite seu nome...'
            value={name}
            onChange={({ target }) => setName(target.value)} />
          <button className='btn-next'
            onClick={NextPage}
          >Next</button>
        </Dialogue>
      }
    </>
  )
}

export default Home
