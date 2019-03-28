import React from "react"
import * as S from "./styles"

const Key = ({ type }) => (
  <S.Wrapper>
    <S.Subtitle>Key:</S.Subtitle>
    <ul>
      <S.ListItem>Colourful borders = {type} containers</S.ListItem>
      <S.ListItem>Black borders = content</S.ListItem>
    </ul>
  </S.Wrapper>
)

export default Key
