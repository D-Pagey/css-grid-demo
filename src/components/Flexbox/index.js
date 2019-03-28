import React from "react"
import Key from "../Key"
import * as S from "./styles"

const Flexbox = () => (
  <S.Wrapper>
    <S.Subtitle>Using Flexbox to layout:</S.Subtitle>
    <S.FlexWrapper>
      <S.LeftBox>
        <S.Header />
        <S.ContentWrapper>
          <S.Stepper />
          <S.Content />
        </S.ContentWrapper>
        <S.Header />
      </S.LeftBox>
      <S.RightBox>
        <S.SummaryWrapper />
        <S.SummaryCopy />
      </S.RightBox>
    </S.FlexWrapper>
    <Key type="flex" />
  </S.Wrapper>
)

export default Flexbox
