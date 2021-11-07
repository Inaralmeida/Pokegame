import React, { useContext } from 'react'
import * as S from './Home.styles'
import pokemonLogo from '../../Assets/img/pokemon-logo.png'
import { GlobalState } from '../../Context/GlobalState'

const Home = () => {
	const {state} = useContext(GlobalState)
	console.log(state)
	return (
		<S.Container>
			<div>
				<img src={pokemonLogo} alt="pokemon" />
				<button>Start</button>
			</div>
		</S.Container>
	)
}

export default Home
