import React from "react"
import Key from "../Key"
import * as S from "./styles"

const Grid = () => (
  <S.Wrapper>
    <S.Subtitle>Using CSS grid to layout:</S.Subtitle>
    <S.GridWrapper>
      <S.HeaderOne />
      <S.Stepper />
      <S.Content />
      <S.HeaderTwo />
      <S.SummaryWrapper />
      <S.SummaryText />
    </S.GridWrapper>
    <Key type="grid" />
  </S.Wrapper>
)

export default Grid
