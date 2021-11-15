import React from 'react'
import * as S from './Dialogue.styles'
const Dialogue = ({ children }) => {
  return (
    <S.Container>
      <div>
        {children}
      </div>
    </S.Container>
  )
}

export default Dialogue
