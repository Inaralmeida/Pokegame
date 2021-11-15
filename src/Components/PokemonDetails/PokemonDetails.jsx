import React, { useEffect, useState } from 'react'
import * as S from './PokemonDetails.style'
import { api } from '../../services/api'
import { defineCor } from '../../Utils/defineCor'
import TagType from '../TagType/TagType'
const PokemonDetails = ({ functionOk, functionCancel, pokemon }) => {
  const [details, setDetails] = useState({
    tipos: [],
    habilidades: [],
    status: [{ value: 100 }, { value: 100 }, { value: 100 }, { value: 100 }, { value: 100 }, { value: 100 },],
  })
  const [colorDefault, setColorDefault] = useState('')
  useEffect(() => {
    api.get(`/pokemons/${pokemon}`)
      .then(response => {
        setDetails(response.data)
        console.log(response.data)
        setColorDefault(defineCor(response.data.tipos[0].name))
      })
  }, [pokemon])



  return (
    <>
      {!!details &&
        (
          <S.Container colorDefault={colorDefault.color} status={details.status}>

            <div className="details">
              <h3>{details.name}</h3>
              <section>
                <article>
                  <label>Peso</label>
                  <p>{details.peso}Kg</p>
                </article>
                <article>
                  <label>Habilidades</label>
                  <p>{details.habilidades.map((hab, index) => (<TagType key={index} type={details.tipos} name={hab.name} />))}</p>
                </article>
                <article>
                  <label>altura</label>
                  <p>{details.altura}M</p>
                </article>
                <article>
                  <label>Tipo</label>
                  <p>{details.tipos.map((tipo, index) => (<TagType key={index} type={tipo.name} name={tipo.name} />))}</p>
                </article>

              </section>
            </div>
            <div className="poke">
              <img src={details.url} alt={details.name} />
            </div>
            <div className="attributes">
              {
                details.status.map((stats, index) => {
                  return (
                    <div className='status' key={index}>
                      <label htmlFor="">{stats.name}</label>
                      <div className='progressBar'>
                        <span style={{ animation: `${stats.name} linear 1s 0.7s forwards` }}>{stats.value}</span>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <div className="cancel">
              <button
                onClick={functionCancel}
              >Cancelar</button>
            </div>
            <div className="next">
              <button
                onClick={functionOk}
              >Escolher</button>

            </div>

          </S.Container>
        )}
    </>
  )
}

export default PokemonDetails
