import React from 'react'
import * as S from './Home.styles'
import pokemonLogo from '../../Assets/img/pokemon-logo.png'

const Home = () => {
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
